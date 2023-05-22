import styles from "./Tab.module.css";
import { TabProps } from "./types";
import { formatDay } from "../../../../../../utils/utils";

export function Tab({ data, currentTabId, handlerTabClick }: TabProps) {
  return (
    <li
      onClick={() => {
        handlerTabClick(data.id);
      }}
    >
      <input
        type="radio"
        className={styles.input}
        value={data.id}
        name="weekday"
        id={`weekday_${data.id}`}
        checked={data.id === currentTabId ? true : false}
      />
      <label className={styles.label} htmlFor={`weekday_${data.id}`}>
        <span className={styles.span}>{formatDay(data.day)}</span>
      </label>
    </li>
  );
}
