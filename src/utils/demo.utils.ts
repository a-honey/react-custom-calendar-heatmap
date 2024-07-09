export function getCalendarValues() {
  const values = [];
  const today = new Date();
  const startDate = new Date(today.getFullYear(), 0, 1); // 1월 1일

  for (let i = 0; i < 365; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    if (currentDate > today) {
      continue;
    }

    const randomValue = Math.floor(Math.random() * 50);

    values.push({
      value: randomValue,
      date: currentDate,
    });
  }

  return values;
}
