import { ItemDataTime } from "../../../../hooks/types";

export interface PropsDateList {
  data: ItemDataTime[];
  currentCardId: number;
  onCurrentCardClick: (id: number) => void;
}
