import { useState, useEffect } from "react";
import { ItemFilterData } from "./types";
import { formatFilterData } from "../utils/utils";
import cities from "../cities.json";

export function useApiData() {
  const [currentCityId, setCurrentCityId] = useState<number>(0);
  const [weatherData, setWeatherData] = useState<ItemFilterData[]>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const lat = cities[currentCityId].coords.lat;
  const lon = cities[currentCityId].coords.lon;

  function handlerChangeCity(cityId: number) {
    setLoader(true);
    setCurrentCityId(cityId);
  }

  useEffect(() => {
    const getWheatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=6b5f6866aee48a58db488348846a7e1f`
        );
        const data = await response.json();
        const filterData: ItemFilterData[] = [];
        data.list.reduce((memoIndex: number, value: any): number => {
          const currentDay = new Date(value.dt * 1000).getDay();

          if (currentDay !== memoIndex) {
            filterData.push({
              dateId: filterData.length,
              dayOfMonth: currentDay,
              dateData: [],
            });
          }

          filterData[filterData.length - 1].dateData.push({
            timeId: filterData[filterData.length - 1].dateData.length,
            timeStamp: value.dt,
            temp: value.main.temp,
            windSpeed: value.wind.speed,
            humidity: value.main.humidity,
            weatherStatus: value.weather[0].description,
            icon: value.weather[0].icon,
            pressure: value.main.pressure,
          });
          return currentDay;
        }, 0);
        formatFilterData(filterData);
        setWeatherData(filterData);
        setLoader(false);
      } catch {
        setError(true);
      }
    };
    getWheatherData();
  }, [lat, lon]);

  return {
    weatherData,
    loader,
    error,
    handlerChangeCity,
    currentCityId,
  };
}
