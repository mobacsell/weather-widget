import { DataType } from "../../../../hooks/types";

export interface PropsDateList {
  data: DataType[];
  currentCardId: number;
  onCurrentCardClick: (id: number) => void;
}
