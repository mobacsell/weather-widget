import React from "react";
import styles from "./DateList.module.css";
import { DateCard } from "./components/DateCard";
import { PropsDateList } from "./types";
import { Tab } from "./components/Tab";
import { CityLocation } from "./components/CityLocation";

export function DateList({
  weatherData,
  serviceData,
  handlerTabClick,
  handlerCardClick,
  handlerChangeCity,
  resetCurrentCardId,
}: PropsDateList) {
  const { currentCityId, currentTabId, currentCardId } = serviceData;
  const currentDateDataList = weatherData[serviceData.currentTabId].dateData;

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
        {currentDateDataList.map((value, index) => {
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
      <CityLocation
        handlerChangeCity={handlerChangeCity}
        currentCityId={currentCityId}
        resetCurrentCardId={resetCurrentCardId}
      />
    </div>
  );
}
