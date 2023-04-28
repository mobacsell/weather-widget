export const formatTimestamp = (timestamp: number) => {
  const days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  const date = new Date(timestamp * 1000);
  const weekday = days[date.getDay()];
  const time = `${normalizeTimeValue(date.getHours())}:${normalizeTimeValue(
    date.getMinutes()
  )}`;

  function normalizeTimeValue(value: number) {
    return value.toString().length > 1 ? value : `0${value}`;
  }

  return { weekday, time };
};
