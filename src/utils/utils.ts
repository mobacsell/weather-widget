import { ItemFilterData } from "../hooks/types";

/**
 * Функция преобразует день недели из числовом представлении (метод getDay) в строковое ('Вс', 'Пн', 'Вт', 'Ср'...)
 * @param day числовое представление дня недели
 * @returns строковое представление дня недели
 */
export const formatDay = (day: number): string => {
  const dayList = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

  return dayList[day];
};

/**
 * Функция преобразует timestamp в временной формат вида <ЧЧ:ММ>
 * @param timestamp временная метка
 * @returns временной формат вида <ЧЧ:ММ>
 */
export const formatTimestamp = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const time = `${normalizeTimeValue(date.getHours())}:${normalizeTimeValue(
    date.getMinutes()
  )}`;

  function normalizeTimeValue(value: number) {
    return value.toString().length > 1 ? value : `0${value}`;
  }

  return time;
};

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
