import styles from "./CityLocation.module.css";
import cities from "@json/cities.json";
import { CityLocationProps } from "./types";

export function CityLocation({
  handlerChangeCity,
  currentCityId,
  resetCurrentCardTabId,
}: CityLocationProps) {
  return (
    <select
      className={styles.select}
      onChange={(e) => {
        handlerChangeCity(Number(e.target.value));
        resetCurrentCardTabId();
      }}
      value={currentCityId}
    >
      {cities.map((value) => {
        return (
          <option
            value={String(value.id)}
            key={value.id}
            className={styles.option}
          >
            {value.name}
          </option>
        );
      })}
    </select>
  );
}
