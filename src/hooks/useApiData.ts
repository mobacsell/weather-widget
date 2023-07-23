import { useState, useEffect } from "react";
import { ItemFilterData } from "./types";
import { formatFilterData } from "../utils/utils";
import cities from "../cities.json";

export function useApiData() {
  const [currentCityId, setCurrentCityId] = useState<number>(0);
  const [weatherData, setWeatherData] = useState<ItemFilterData[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const lat = cities[currentCityId].coords.lat;
  const lon = cities[currentCityId].coords.lon;

  function handlerChangeCity(cityId: number) {
    setLoaded(false);
    setCurrentCityId(cityId);
  }

  useEffect(() => {
    /**
     * Функция getWeatherData подтягивает данные с api.openweathermap.org - 40 точек каждый 3 часа и структурирует их в массиве по дням недели, начиная с текущего
     * состояние loaded ставим на false после окончания формирования массива с данными.
     */
    const getWeatherData = async () => {
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
        }, -1);

        formatFilterData(filterData);
        setWeatherData(filterData);
        setLoaded(true);
      } catch {
        setError(true);
      }
    };
    getWeatherData();
  }, [lat, lon]);

  return {
    weatherData,
    loaded,
    error,
    handlerChangeCity,
    currentCityId,
  };
}
