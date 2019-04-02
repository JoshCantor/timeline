import {PIXELS_IN_A_DAY} from './constants';


export const getTimeZoneAwareDateFromDate = (dateUtc) => {
  const timeZoneOffsetMS = dateUtc.getTimezoneOffset() * 60 * 1000;
  return new Date(dateUtc.getTime() + timeZoneOffsetMS);
};

export const getTimezoneAwareDateFromStr = (dateStr) => {
  const dateUtc = new Date(dateStr);
  return getTimeZoneAwareDateFromDate(dateUtc);
};

export const convertDaysToPixels = (numDays) => {
  return `${numDays * PIXELS_IN_A_DAY}px`;
};

export const sortItemsByStartDateAsc = (items) => {
  return items.sort((a, b) => {
    return getTimezoneAwareDateFromStr(a.start) - getTimezoneAwareDateFromStr(b.start);
  });
};

export const getTimeDifferenceInDays = (startDate, endDate) => {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  const timeDistanceInMS = Math.abs(endDate.getTime() - startDate.getTime());
  return timeDistanceInMS / MS_PER_DAY;
};

const addToCalendarIfNotPresent = (calendar, year, monthZeroIndexed) => {
  const month = monthZeroIndexed + 1;
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
    const currentEndDate = getTimezoneAwareDateFromStr(item.end);
    if (!latestEndDate || currentEndDate > latestEndDate) {
      latestEndDate = currentEndDate;
    }
  });
  return latestEndDate;
};

export const getCalendar = (sortedItems) => {
  const itemWithEarliestStart = sortedItems[0];
  const earliestStartDate = getTimezoneAwareDateFromStr(itemWithEarliestStart.start);
  const latestEndDate = getLatestEndDate(sortedItems);
  const earliestStartDateYear = earliestStartDate.getFullYear();
  const latestEndDateYear = latestEndDate.getFullYear();
  const earliestStartDateMonth = earliestStartDate.getMonth();
  const latestEndDateMonth = latestEndDate.getMonth();

  const calendar = {};

  let year = earliestStartDateYear;
  while (year <= latestEndDateYear) {
    let monthToAdd = 0;
    let endMonth = 11;

    if (year === earliestStartDateYear) {
      monthToAdd = earliestStartDateMonth;
    } else if (year === latestEndDateYear) {
      endMonth = latestEndDateMonth;
    }

    while (monthToAdd <= endMonth) {
      addToCalendarIfNotPresent(calendar, year, monthToAdd);
      monthToAdd ++
    }
    year++
  }
  return calendar;
};
