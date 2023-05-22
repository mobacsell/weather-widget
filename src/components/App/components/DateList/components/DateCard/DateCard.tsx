import React from "react";
import styles from "./DateCard.module.css";
import { DateCardProps } from "./types";
import { formatDay, formatTimestamp } from "../../../../../../utils/utils";

export function DateCard(props: DateCardProps) {
  const { cardId, icon, timestamp, temperature, onCurrentCardClick } = props;
  
  const weekday = formatDay(0);
  const time = formatTimestamp(timestamp);

  return (
    <div className={styles.root} onClick={(e) => onCurrentCardClick(cardId)}>
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
