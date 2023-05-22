import { ItemFilterData } from "../../../../hooks/types";

export interface PropsDateList {
  weatherData: ItemFilterData[];
  currentCardId: number;
  handlerCardClick: (id: number) => void;
  currentTabId: number;
  handlerTabClick: (id: number) => void;
}
