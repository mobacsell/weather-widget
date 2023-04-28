import React from "react";
import styles from "./DateList.module.css";
import { DateCard } from "./components/DateCard";
import { PropsDateList } from "./types";
import { MoreInfo } from "./components/MoreInfo";
import { useState } from "react";

export function DateList(props: PropsDateList) {
  const { data } = props;
  const [currentCardId, setCurrentCardId] = useState(0);

  const onCurrentCardClick = (id: number) => {
    setCurrentCardId(id);
  };

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
              cardId={value.id}
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
