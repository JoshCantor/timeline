import React from 'react';

import {
  getTimeDifferenceInDays,
  getTimeZoneAwareDateFromStr,
  sortItemsByStartDateAsc
} from '../utils';
import TimeLineHeader from '../timeLineHeader/timeLineHeader.jsx';
import TimeLineItem from '../timeLineItem/timeLineItem.jsx';


const TimeLine = (props) => {
  const sortedItems = sortItemsByStartDateAsc(props.items);
  const itemWithEarliestStart = sortedItems[0];
  const earliestStartDate = getTimeZoneAwareDateFromStr(itemWithEarliestStart.start);
  const startYear = earliestStartDate.getFullYear();
  const startMonthZeroIndexed = earliestStartDate.getMonth();
  const firstDayOfStartMonth = new Date(startYear, startMonthZeroIndexed, 1);

  const renderTimeLineItems = (items) => {
    return items.map((item) => {
      const itemStartDate = getTimeZoneAwareDateFromStr(item.start);
      const leftOffsetDays = getTimeDifferenceInDays(firstDayOfStartMonth, itemStartDate);
      return <TimeLineItem item={item} leftOffsetDays={leftOffsetDays} key={item.id} />;
    });
  };

  return (
    <div className="timeLineContainer">
      <TimeLineHeader items={sortedItems}/>
      {renderTimeLineItems(sortedItems)}
    </div>
  );
};

export default TimeLine;
