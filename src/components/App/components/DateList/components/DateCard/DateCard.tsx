import React from "react";
import styles from "./DateCard.module.css";
import { DateCardProps } from "./types";
import { formatTimestamp } from "./utils";

export function DateCard(props: DateCardProps) {
  const { icon, timestamp, temperature } = props;
  const { weekday, time } = formatTimestamp(timestamp);

  return (
    <div className={styles.root}>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="wheather icon"
        width="50"
      />
      <div className={styles.weekday}>{weekday}</div>
      <div className={styles.time}>{time}</div>
      <div className={styles.temperature}>{Math.round(temperature)}°C</div>
    </div>
  );
}
