import {PIXELS_IN_A_DAY} from './constants';


export const getTimeZoneAwareDate = (dateStr) => {
  const dateUtc = new Date(dateStr);
  return new Date(dateUtc.getTime() + dateUtc.getTimezoneOffset() * 60000)
};

export const convertDaysToPixels = (numDays) => {
  return `${numDays * PIXELS_IN_A_DAY}px`;
};

export const sortItemsByStartDateAsc = (items) => {
  return items.sort((a, b) => {
    return getTimeZoneAwareDate(a.start) - getTimeZoneAwareDate(b.start);
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
    const startDate = getTimeZoneAwareDate(item.start);
    const endDate = getTimeZoneAwareDate(item.end);
    addToCalendarIfNotPresent(calendar, startDate);
    addToCalendarIfNotPresent(calendar, endDate);
  });
  return calendar;
};

export const getDaysInCalendarYear = (calendar, year) => {
  let daysInYear = 0;
  const calendarYear = calendar[year];
  for (const month in calendarYear) {
    if (calendarYear.hasOwnProperty(month)) {
      daysInYear += calendarYear[month];
    }
  }
  return daysInYear;
};