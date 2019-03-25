import {NAME_COLUMN_WIDTH, PIXELS_IN_A_DAY} from './constants';

export const convertDaysToPixels = (numDays) => {
  return `${numDays * PIXELS_IN_A_DAY + NAME_COLUMN_WIDTH}px`;
};

export const sortItemsByStartDateDesc = (items) => {
  return items.sort((a, b) => {
    return new Date(b.start) - new Date(a.start);
  });
};

export const getTimeDifferenceInDays = (startDate, endDate) => {
  const timeDistance = Math.abs(endDate.getTime() - startDate.getTime());
  return Math.ceil(timeDistance / (1000 * 60 * 60 * 24));
};

export const getLatestEndDate = (items) => {
  let latestEndDate = null;
  items.forEach((item) => {
    const currentEndDate = new Date(item.end);
    if (!latestEndDate || currentEndDate > latestEndDate) {
      latestEndDate = currentEndDate;
    }
  });
  return latestEndDate;
};