export const getHourDate = (date: string) => {
  const hour = `${date.split(' ')[1].split(':')[0]}:${
    date.split(' ')[1].split(':')[1]
  }`;
  return hour;
};
