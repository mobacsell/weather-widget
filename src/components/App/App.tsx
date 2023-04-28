import React from "react";
import styles from "./App.module.css";
import { DateInfo } from "./components/DateInfo";
import { DateList } from "./components/DateList";
import { useApiData } from "../../hooks/useApiData";
import { Loader } from "./components/Loader";

export function App() {
  const { wheatherData, loader, isResponse } = useApiData();

  if(loader)  {
    return <Loader />
  }

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <DateInfo />
        <DateList data={wheatherData} />
      </div>
    </div>
  );
}
