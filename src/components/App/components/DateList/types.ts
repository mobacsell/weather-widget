import { ItemFilterData } from "../../../../hooks/types";

export interface PropsDateList {
  weatherData: ItemFilterData[];
  serviceData: {
    currentCityId: number;
    currentTabId: number;
    currentCardId: number;
  };
  handlerCardClick: (id: number) => void;
  handlerTabClick: (id: number) => void;
  handlerChangeCity: (cityId: number) => void;
}
