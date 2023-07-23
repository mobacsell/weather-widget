import styles from "./DateInfo.module.css";
import { ItemDataTime } from "@hooks/types";
import { formatDay, formatTimestamp } from "@utils/utils";

export function DateInfo({
  currentTimeData,
}: {
  currentTimeData: ItemDataTime;
}) {
  const weekday = formatDay(
    new Date(currentTimeData.timeStamp * 1000).getDay()
  );
  const time = formatTimestamp(currentTimeData.timeStamp);

  return (
    <div className={styles.root}>
      <div className={styles.sectionTop}>
        <div className={styles.dateTime}>
          <div className={styles.weekday}>{weekday}</div>
          <div className={styles.time}>{time}</div>
        </div>
        <div className={styles.moreInfo}>
          <div className={styles.windSpeed}>
            Скорость ветра: {currentTimeData.windSpeed} м/с
          </div>
          <div className={styles.humidity}>
            Влажность: {currentTimeData.humidity}%
          </div>
          <div className={styles.pressure}>
            давление: {Math.round(currentTimeData.pressure * 0.750062)} мм рт.
            ст.
          </div>
        </div>
      </div>
      <img
        src={`https://openweathermap.org/img/wn/${currentTimeData.icon}@2x.png`}
        alt="wheather icon"
        className={styles.sectionMiddle}
      />
      <div className={styles.sectionBottom}>
        <div className={styles.temperature}>
          {Math.round(currentTimeData.temp)}°C
        </div>
        <div className={styles.status}>{currentTimeData.weatherStatus}</div>
      </div>
    </div>
  );
}
