import React from "react";
import styles from "./App.module.css";
import { DateInfo } from "./components/DateInfo";
import { DateList } from "./components/DateList";
import { useApiData } from "../../hooks/useApiData";

export function App() {
  const { wheatherData, isResponse } = useApiData();

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <DateInfo />
        <DateList data={wheatherData} />
      </div>
    </div>
  );
}
