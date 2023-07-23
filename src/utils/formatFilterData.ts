import { ItemFilterData } from "types/ItemFilterData";

/**
 * Функция форматирует массив с отфильтрованными данными, полученными по API.
 * Добавляем недостающие данные по первому дню - берем  из последующего дня.
 * Удаляем данные по последнему дню, если они неполные - отображаем только первые 5 дней.
 * @param filterData отфильтрованные данные, полученные по API
 */
export const formatFilterData = (filterData: ItemFilterData[]): void => {
  const firstDayDataList = filterData[0].dateData;
  const seconfDayDataList = filterData[1].dateData;
  const lastDayDataList = filterData[filterData.length - 1].dateData;

  //Добавляем данные по первому дню (если необходимо)
  for (let i = firstDayDataList.length, j = 0; i < 8; i++, j++) {
    firstDayDataList[i] = Object.assign({}, seconfDayDataList[j]);
    firstDayDataList[i].timeId = i;
  }

  //Удаляем данные по последнему дню (если необходимо)
  if (lastDayDataList.length < 8) {
    filterData.pop();
  }
};