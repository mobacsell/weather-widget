import styles from "./DateCard.module.css";
import { DateCardProps } from "./types";
import { formatTimestamp } from "@utils/formatTimeStamp";

export function DateCard({
  data,
  currentCardId,
  handlerCardClick,
}: DateCardProps) {
  return (
    <li>
      <input
        type="radio"
        className={styles.input}
        value={data.id}
        name="time"
        id={`time_${data.id}`}
        checked={data.id === currentCardId ? true : false}
        onChange={() => handlerCardClick(data.id)}
      />
      <label className={styles.label} htmlFor={`time_${data.id}`}>
        <img
          src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt="wheather icon"
          className={styles.icon}
        />
        <span className={styles.time}>{formatTimestamp(data.timestamp)}</span>
        <span className={styles.temperature}>
          {Math.round(data.temperature)}°C
        </span>
      </label>
    </li>
  );
}
