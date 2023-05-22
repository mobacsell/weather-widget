import styles from "./Tab.module.css";
import { TabProps } from "./types";

export function Tab({ data }: TabProps) {
  return (
    <li>
      <input
        type="radio"
        className={styles.input}
        value={data.date}
        name="weekday"
        id={data.id.toString()}
      />
      <label className={styles.label} htmlFor={data.id.toString()}>
        <span className={styles.span}>{data.date}</span>
      </label>
    </li>
  );
}
