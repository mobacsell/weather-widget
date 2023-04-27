import React from "react";
import styles from "./App.module.css";
import { DateInfo } from "./components/DateInfo";
import { DateList } from "./components/DateList";

export function App() {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <DateInfo />
        <DateList />
      </div>
    </div>
  );
}
