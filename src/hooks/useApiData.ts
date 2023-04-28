import { useState, useEffect } from "react";
import { DataType } from "./types";

export function useApiData() {
  const [coords] = useState({ lat: 56.1324, lon: 47.2025 });
  const [wheatherData, setWeatherData] = useState<DataType[]>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const [isResponse, setIsResponse] = useState<boolean>(true);
  const [currentCardId, setCurrentCardId] = useState(0);

  const onCurrentCardClick = (id: number) => {
    setCurrentCardId(id);
  };

  useEffect(() => {
    const getWheatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&cnt=8&units=metric&appid=6b5f6866aee48a58db488348846a7e1f`
        );
        response.json().then((data) => {
          const result = data.list.map(
            (value: any, index: number): DataType => {
              return {
                id: index,
                timeStamp: value.dt,
                temp: value.main.temp,
                windSpeed: value.wind.speed,
                humidity: value.main.humidity,
                weatherStatus: value.weather[0].main,
                icon: value.weather[0].icon,
              };
            }
          );
          setWeatherData(result);
          setLoader(false);
        });
      } catch {
        setIsResponse(false);
      }
    };
    getWheatherData();
  }, [coords.lat, coords.lon]);

  return {
    wheatherData,
    loader,
    onCurrentCardClick,
    currentCardId,
    isResponse,
  };
}
