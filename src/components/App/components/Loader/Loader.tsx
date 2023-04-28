import React from "react";
import styles from "./Loader.module.css";

export function Loader() {
  return (
    <div className={styles.root}>
      <div>Загрузка данных...</div>
    </div>
  );
}
