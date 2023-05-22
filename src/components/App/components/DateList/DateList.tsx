import React from "react";
import styles from "./DateList.module.css";
import { DateCard } from "./components/DateCard";
import { PropsDateList } from "./types";
import { MoreInfo } from "./components/MoreInfo";
import { Tab } from "./components/Tab";


export function DateList(props: PropsDateList) {
  const { weatherData, currentCardId, onCurrentCardClick } = props;

  return (
    <div className={styles.root}>
      <ul className={styles.tabsList}>
      {weatherData.map((value, index) => {
          return (
            <Tab data={{id:value.dateId, day:value.dayOfMonth}} key={`${index}_tab}`} />
          );
        })}
      </ul>
      <div className={styles.cardsList}>
        {weatherData[1].dateData.map((value) => {
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
