import styles from "./Tab.module.css";
import { TabProps } from "./types";
import { formatDay } from "@utils/formatDay";

export function Tab({ data, currentTabId, handlerTabClick }: TabProps) {
  return (
    <li>
      <input
        type="radio"
        className={styles.input}
        value={data.id}
        name="weekday"
        id={`weekday_${data.id}`}
        checked={data.id === currentTabId ? true : false}
        onChange={() => {
          handlerTabClick(data.id);
        }}
      />
      <label className={styles.label} htmlFor={`weekday_${data.id}`}>
        <span className={styles.span}>{formatDay(data.day)}</span>
      </label>
    </li>
  );
}
