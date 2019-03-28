import React from 'react';

import {MONTH_NUMBER_TO_NAME, PIXELS_IN_A_DAY} from '../constants';
import {convertDaysToPixels, getDaysInCalendarYear, getCalendar} from '../utils';
import TimeLineRow from '../timeLineRow/timeLineRow.jsx';

const TimeLineHeader = (props) => {
  const calendar = getCalendar(props.items);
  const years = Object.keys(calendar);

  const renderYears = (years) => {
    return years.map((year) => {
      const daysInYear = getDaysInCalendarYear(calendar, year);
      const yearInPixels = convertDaysToPixels(daysInYear);
      const style = {width: yearInPixels};
      return (
        <div className="timeLineHeaderYear" style={style}>
          {year}
        </div>
      );
    });
  };

  // const currentYear = calendar[year];
  // const currentYearMonths = Object.keys(currentYear);

  // const renderMonths = (year, monthNumbers) => {
  //   return monthNumbers.map((monthNum) => {
  //     const monthName = MONTH_NUMBER_TO_NAME[monthNum];
  //     const daysInMonth
  //     const style = {width: }
  //     return <div className="timeLineHeaderMonth">{monthName}</div>;
  //   });
  // };

  return (
    <TimeLineRow label="Items">
      <div className="timeLineHeaderYears">{renderYears(years)}</div>
      {/*<div>{renderMonths(months)}</div>*/}
    </TimeLineRow>
  );
};

export default TimeLineHeader;
