import React from "react";
import styles from "./Loader.module.css";

export function Loader() {
  return (
    <div className={styles.root}>
      <div className={styles.block}>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
}
