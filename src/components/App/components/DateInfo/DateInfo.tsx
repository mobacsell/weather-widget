import React from "react";
import styles from "./DateInfo.module.css";
import { PropsDateInfo } from "./types";
import { formatDay, formatTimestamp } from "../../../../utils/utils";

export function DateInfo(props: PropsDateInfo) {
  const { data, currentCardId } = props;
  const weekday = formatDay(0);
  const time = formatTimestamp(data[currentCardId].timeStamp);

  return (
    <div className={styles.root}>
      <div className={styles.weekday}>{weekday}</div>
      <div className={styles.time}>{time}</div>
      <img
        src={`https://openweathermap.org/img/wn/${data[currentCardId].icon}@2x.png`}
        alt="wheather icon"
        width="100" className={styles.icon}
      />
      <div className={styles.temperature}>
        {Math.round(data[currentCardId].temp)}°C
      </div>
      <div className={styles.status}>{data[currentCardId].weatherStatus}</div>
    </div>
  );
}
