export interface CityLocationProps {
  handlerChangeCity: (cityId: number) => void;
  resetCurrentCardId: () => void;
  currentCityId: number;
}
