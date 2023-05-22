/**
 * Функция преобразует день недели из числовом представлении (метод getDay) в строковое ('Вс', 'Пн', 'Вт', 'Ср'...)
 * @param day числовое представление дня недели
 * @returns строковое представление дня недели
 */
export const formatDay = (day:number):string =>  {
  const dayList = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  
  return dayList[day];
}

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
