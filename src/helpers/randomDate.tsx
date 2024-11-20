export const randomDate = (): string => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const randomDayStart = Math.floor(Math.random() * 7) + 1;
  const randomDayEnd = randomDayStart + 6;

  const startDate = new Date(currentYear, currentMonth, randomDayStart);
  const endDate = new Date(currentYear, currentMonth, randomDayEnd);

  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };

  const startFormatted = startDate.toLocaleDateString('en-US', options);
  const endFormatted = endDate.toLocaleDateString('en-US', options);

  return `${startFormatted} - ${endFormatted}`;
};
