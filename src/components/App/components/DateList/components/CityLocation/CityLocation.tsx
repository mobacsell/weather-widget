import styles from "./CityLocation.module.css";
import cities from "../../../../../../cities.json";
import { CityLocationProps } from "./types";

export function CityLocation({
  handlerChangeCity,
  currentCityId,
  resetCurrentCardId,
}: CityLocationProps) {
  return (
    <select
      className={styles.select}
      onChange={(e) => {
        handlerChangeCity(Number(e.target.value));
        resetCurrentCardId();
      }}
      value={currentCityId}
    >
      {cities.map((value) => {
        return (
          <option
            value={String(value.id)}
            key={`city_${value.id}`}
            className={styles.option}
          >
            {value.name}
          </option>
        );
      })}
    </select>
  );
}
