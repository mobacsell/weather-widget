import React from "react";
import styles from "./App.module.css";
import { DateInfo } from "./components/DateInfo";
import { DateList } from "./components/DateList";
import { useApiData } from "../../hooks/useApiData";
import { Loader } from "./components/Loader";

export function App() {
  const {
    wheatherData,
    loader,
    onCurrentCardClick,
    currentCardId,
    isResponse,
  } = useApiData();

  if (loader) {
    return <Loader />;
  }

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <DateInfo data={wheatherData} currentCardId={currentCardId} />
        <DateList
          data={wheatherData}
          onCurrentCardClick={onCurrentCardClick}
          currentCardId={currentCardId}
        />
      </div>
    </div>
  );
}
