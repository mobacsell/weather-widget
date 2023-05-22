import React from "react";
import styles from "./DateList.module.css";
import { DateCard } from "./components/DateCard";
import { PropsDateList } from "./types";
import { MoreInfo } from "./components/MoreInfo";
import { Tab } from "./components/Tab";

export function DateList(props: PropsDateList) {
  const {
    weatherData,
    currentTabId,
    handlerTabClick,
    currentCardId,
    handlerCardClick,
  } = props;

  return (
    <div className={styles.root}>
      <ul className={styles.tabsList}>
        {weatherData.map((value, index) => {
          return (
            <Tab
              data={{ id: value.dateId, day: value.dayOfMonth }}
              handlerTabClick={handlerTabClick}
              currentTabId={currentTabId}
              key={`${index}_tab}`}
            />
          );
        })}
      </ul>
      <ul className={styles.cardsList}>
        {weatherData[currentTabId].dateData.map((value, index) => {
          return (
            <DateCard
              data={{
                id: value.timeId,
                icon: value.icon,
                timestamp: value.timeStamp,
                temperature: value.temp,
              }}
              currentCardId={currentCardId}
              handlerCardClick={handlerCardClick}
              key={`${index}_dateCard`}
            />
          );
        })}
      </ul>
    </div>
  );
}
