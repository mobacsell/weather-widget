import styles from "./Tab.module.css";
import { TabProps } from "./types";
import { formatDay } from "../../../../../../utils/utils";

export function Tab({ data }: TabProps) {
  return (
    <li>
      <input
        type="radio"
        className={styles.input}
        value={data.id}
        name="weekday"
        id={`${data.id}`}
      />
      <label className={styles.label} htmlFor={`${data.id}`}>
        <span className={styles.span}>{formatDay(data.day)}</span>
      </label>
    </li>
  );
}
