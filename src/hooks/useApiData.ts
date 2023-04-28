import React from "react";
import { useState, useEffect } from "react";

interface DataType {
  timeStamp: number;
  temp: number;
  windSpeed: number;
  humidity: number;
  weatherStatus: string;
  icon: string;
}

export function useApiData() {
  const [coords, setCoords] = useState({ lat: 56.1324, lon: 47.2025 });
  const [wheatherData, setWeatherData] = useState<DataType[]>([]);
  const [isResponse, setIsResponse] = useState<boolean>(true);

  useEffect(() => {
    const getWheatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&cnt=7&units=metric&appid=6b5f6866aee48a58db488348846a7e1f`
        );
        response.json().then((data) => {
          const result = data.list.map((value: any): DataType => {
            return {
              timeStamp: value.dt,
              temp: value.main.temp,
              windSpeed: value.wind.speed,
              humidity: value.main.humidity,
              weatherStatus: value.weather[0].main,
              icon: value.weather[0].icon,
            };
          });
          setWeatherData(result);
        });
      } catch {
        setIsResponse(false);
      }
    };
    getWheatherData();
  }, [coords.lat, coords.lon]);

  return { wheatherData, isResponse };
}
