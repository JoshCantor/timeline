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

const addToCalendarIfNotPresent = (calendar, year, monthZeroIndexed) => {
  // const year = date.getFullYear();
  // const monthZeroIndex = date.getMonth();
  const month = monthZeroIndex + 1;
  const daysInMonth = new Date(year, month, 0).getDate();

  if (!calendar[year]) {
    calendar[year] = {};
    calendar[year][month] = daysInMonth;
  } else if (!calendar[year][month]) {
    calendar[year][month] = daysInMonth;
  }
};

const getLatestEndDate = (items) => {
  let latestEndDate = null;
  items.forEach((item) => {
    const currentEndDate = new Date(item.end);
    if (!latestEndDate || currentEndDate > latestEndDate) {
      latestEndDate = currentEndDate;
    }
  });
  return latestEndDate;
};

export const getCalendar = (sortedItems) => {
  const itemWithEarliestStart = sortedItems[0];
  const earliestStartDate = getTimeZoneAwareDateFromStr(itemWithEarliestStart.start);
  const latestEndDate = getLatestEndDate(sortedItems);
  const earliestStartDateYear = earliestStartDate.getFullYear();
  const latestEndDateYear = latestEndDate.getFullYear();
  const earliestStartDateMonth = earliestStartDate.getMonth();
  const latestEndDateMonth = latestEndDate.getMonth();

  const calendar = {};

  let year = earliestStartDateYear;
  while (year <= latestEndDateYear) {
    const month = 0;
    const december = 11;

    if (year === earliestStartDateYear) {
      let month = earliestStartDateMonth;
      while (month <= december) {
        addToCalendarIfNotPresent(calendar, year, month);
        month ++
      }
    } else if (year === latestEndDateYear) {
      let mon
    }

    year++
  }
  // items.forEach((item) => {
  //   const startDate = getTimeZoneAwareDateFromStr(item.start);
  //   const endDate = getTimeZoneAwareDateFromStr(item.end);
  //   const startMonth = startDate.getMonth();
  //   const endMonth = startDate.getMonth();
  //
  //   //
  //   if (endMonth - startMonth <= 1) {
  //     addToCalendarIfNotPresent(calendar, startDate);
  //     addToCalendarIfNotPresent(calendar, endDate);
  //   }
  //
  // });
  return calendar;
};
