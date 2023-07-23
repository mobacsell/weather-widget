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