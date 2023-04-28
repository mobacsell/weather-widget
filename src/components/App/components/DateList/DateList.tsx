import React from "react";
import styles from "./DateList.module.css";
import { DateCard } from "./components/DateCard";
import { PropsDateList } from "./types";

export function DateList(props: PropsDateList) {
  const { data } = props;

  return (
    <div className={styles.root}>
      {data.map((value) => {
        return (
          <DateCard
            icon={value.icon}
            timestamp={value.timeStamp}
            temperature={value.temp}
          />
        );
      })}
    </div>
  );
}
