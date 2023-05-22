import styles from "./App.module.css";
import { useState } from "react";
import { DateInfo } from "./components/DateInfo";
import { DateList } from "./components/DateList";
import { useApiData } from "../../hooks/useApiData";
import { Loader } from "./components/Loader";

export function App() {
  const { weatherData, loader } = useApiData();

  const [currentTabId, setCurrentTabId] = useState<number>(0);
  const [currentCardId, setCurrentCardId] = useState<number>(0);

  const onCurrentCardClick = (id: number) => {
    setCurrentCardId(id);
  };

  const handlerTabClick = (id: number) => {
    setCurrentTabId(id);
  };

  if (loader) {
    return <Loader />;
  }

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <DateInfo
          data={weatherData[1].dateData}
          currentCardId={currentCardId}
        />
        <DateList
          weatherData={weatherData}
          onCurrentCardClick={onCurrentCardClick}
          currentCardId={currentCardId}
          handlerTabClick={handlerTabClick}
          currentTabId={currentTabId}
        />
      </div>
    </div>
  );
}
