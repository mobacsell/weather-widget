import React from "react";
import styles from "./DateList.module.css";
import { DateCard } from "./components/DateCard";
import { PropsDateList } from "./types";
import { MoreInfo } from "./components/MoreInfo";


export function DateList(props: PropsDateList) {
  const { data, currentCardId, onCurrentCardClick } = props;

  return (
    <div className={styles.root}>
      <MoreInfo
        humidity={data[currentCardId].humidity}
        windSpeed={data[currentCardId].windSpeed}
      />
      <div className={styles.wrapper}>
        {data.map((value) => {
          return (
            <DateCard
              cardId={value.timeId}
              icon={value.icon}
              timestamp={value.timeStamp}
              temperature={value.temp}
              onCurrentCardClick={onCurrentCardClick}
            />
          );
        })}
      </div>
    </div>
  );
}
