import styles from "./App.module.css";
import { useState } from "react";
import { DateInfo } from "./components/DateInfo";
import { DateList } from "./components/DateList";
import { useApiData } from "../../hooks/useApiData";
import { Loader } from "./components/Loader";
import { Error } from "./components/Error";

export function App() {
  const [currentTabId, setCurrentTabId] = useState<number>(0);
  const [currentCardId, setCurrentCardId] = useState<number>(0);

  const { weatherData, loader, error, handlerChangeCity, currentCityId } =
    useApiData();

  const handlerCardClick = (id: number) => {
    setCurrentCardId(id);
  };

  const handlerTabClick = (id: number) => {
    setCurrentTabId(id);
    setCurrentCardId(0);
  };

  if (loader) {
    return <Loader />;
  } else if (error) {
    return <Error />;
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
          serviceData={{ currentCityId, currentTabId, currentCardId }}
          handlerCardClick={handlerCardClick}
          handlerTabClick={handlerTabClick}
          handlerChangeCity={handlerChangeCity}
        />
      </div>
    </div>
  );
}
