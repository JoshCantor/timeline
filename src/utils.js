import {PIXELS_IN_A_DAY} from './constants';

export const convertDaysToPixels = (numDays) => {
  return `${numDays * PIXELS_IN_A_DAY}px`;
};

export const sortItemsByStartDateAsc = (items) => {
  return items.sort((a, b) => {
    return new Date(a.start) - new Date(b.start);
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

const addMonthToCalendar = (calendar, date) => {
  const year = date.getFullYear();
  const monthZeroIndex = date.getMonth();
  const month = monthZeroIndex + 1;
  const daysInMonth = new Date(year, month, 0).getDate();

  if (calendar[year]) {
    calendar[year][month] = daysInMonth;
  } else {
    calendar[year] = {};
    calendar[year][month] = daysInMonth;
  }
};

export const getCalendar = (items) => {
  const calendar = {};
  items.forEach((item) => {
    const startDate = new Date(item.start);
    const endDate = new Date(item.end);
    addMonthToCalendar(calendar, startDate);
    addMonthToCalendar(calendar, endDate);
  });
  return calendar;
};