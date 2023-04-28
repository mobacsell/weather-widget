import React from "react";
import styles from "./DateList.module.css";
import { DateCard } from "./components/DateCard";

interface DataType {
  timeStamp: number;
  temp: number;
  windSpeed: number;
  humidity: number;
  weatherStatus: string;
  icon: string;
}

interface PropsDateList {
  data: DataType[];
}

export function DateList(props: PropsDateList) {
  const { data } = props;

  return (
    <div className={styles.root}>
      {data.map((value) => {
        return (
          <DateCard
            icon={value.icon}
            timestamp={value.timeStamp}
            temperature={value.temp}
          />
        );
      })}
    </div>
  );
}
