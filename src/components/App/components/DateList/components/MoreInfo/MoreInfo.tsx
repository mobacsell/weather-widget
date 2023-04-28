import React from "react";
import styles from "./MoreInfo.module.css";
import { MoreInfoProps } from "./types";

export const MoreInfo = (props: MoreInfoProps) => {
  const { humidity, windSpeed } = props;

  return (
    <div className={styles.root}>
      <div className={styles.headers}>
        <div>Влажность воздуха:</div>
        <div>Скорость ветра:</div>
      </div>
      <div className={styles.text}>
        <div>{humidity} %</div>
        <div>{windSpeed} м/с</div>
      </div>
    </div>
  );
};
