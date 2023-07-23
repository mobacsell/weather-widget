/**
 * Функция преобразует день недели из числовом представлении (метод getDay) в строковое ('Вс', 'Пн', 'Вт', 'Ср'...)
 * @param day числовое представление дня недели
 * @returns строковое представление дня недели
 */
export const formatDay = (day: number): string => {
    const dayList = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  
    return dayList[day];
  };