import React from 'react';

import {MONTH_NUMBER_TO_NAME} from '../constants';
import {convertDaysToPixels, getCalendar} from '../utils';
import TimeLineRow from '../timeLineRow/timeLineRow.jsx';

const TimeLineHeader = (props) => {

  const renderMonths = (currentYearCalendar) => {
    const monthNumbers = Object.keys(currentYearCalendar);
    return monthNumbers.map((monthNum) => {
      const daysInMonth = currentYearCalendar[monthNum];
      const daysInPixels = convertDaysToPixels(daysInMonth);
      const monthName = MONTH_NUMBER_TO_NAME[monthNum];
      const style = {width: daysInPixels};
      return <div className="timeLineHeaderMonth" style={style}>{monthName}</div>;
    });
  };

  const renderYearsAndMonths = (calendar) => {
    const years = Object.keys(calendar);
    return years.map((year) => {
      const currentYearCalendar = calendar[year];
      return (
        <div className="timeLineHeaderYearCalendar">
          <div className="timeLineHeaderYear">{year}</div>
          <div className="timeLineHeaderMonths">{renderMonths(currentYearCalendar)}</div>
        </div>
      );
    });
  };

  const calendar = getCalendar(props.items);
  return (
    <TimeLineRow label="Items">
      <div className="timeLineHeader">
        {renderYearsAndMonths(calendar)}
      </div>
    </TimeLineRow>
  );
};

export default TimeLineHeader;
