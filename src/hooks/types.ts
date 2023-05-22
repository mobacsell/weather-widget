export interface ItemFilterData {
  dateId: number;
  dayOfMonth: number;
  dateData: ItemDataTime[];
}

export interface ItemDataTime {
  timeId: number;
  timeStamp: number;
  temp: number;
  windSpeed: number;
  humidity: number;
  weatherStatus: string;
  icon: string;
  pressure: number;
}
