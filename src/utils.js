import {PIXELS_IN_A_DAY} from './constants';


export const getTimeZoneAwareDateFromStr = (dateStr) => {
  const dateUtc = new Date(dateStr);
  return new Date(dateUtc.getTime() + dateUtc.getTimezoneOffset() * 1000 * 60);
};

export const convertDaysToPixels = (numDays) => {
  return `${numDays * PIXELS_IN_A_DAY}px`;
};

export const sortItemsByStartDateAsc = (items) => {
  return items.sort((a, b) => {
    return getTimeZoneAwareDateFromStr(a.start) - getTimeZoneAwareDateFromStr(b.start);
  });
};

export const getTimeDifferenceInDays = (startDate, endDate) => {
  const timeDistance = Math.abs(endDate.getTime() - startDate.getTime());
  return Math.ceil(timeDistance / (1000 * 60 * 60 * 24));
};

const addToCalendarIfNotPresent = (calendar, date) => {
  const year = date.getFullYear();
  const monthZeroIndex = date.getMonth();
  const month = monthZeroIndex + 1;
  const daysInMonth = new Date(year, month, 0).getDate();

  if (!calendar[year]) {
    calendar[year] = {};
    calendar[year][month] = daysInMonth;
  } else if (!calendar[year][month]) {
    calendar[year][month] = daysInMonth;
  }
};

export const getCalendar = (items) => {
  const calendar = {};
  items.forEach((item) => {
    const startDate = getTimeZoneAwareDateFromStr(item.start);
    const endDate = getTimeZoneAwareDateFromStr(item.end);
    addToCalendarIfNotPresent(calendar, startDate);
    addToCalendarIfNotPresent(calendar, endDate);
  });
  return calendar;
};
