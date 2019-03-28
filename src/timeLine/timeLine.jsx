import React from 'react';

import {
  getTimeDifferenceInDays,
  getTimeZoneAwareDate,
  sortItemsByStartDateAsc
} from '../utils';
import TimeLineHeader from '../timeLineHeader/timeLineHeader.jsx';
import TimeLineItem from '../timeLineItem/timeLineItem.jsx';


const TimeLine = (props) => {
  const sortedItems = sortItemsByStartDateAsc(props.items);
  const itemWithEarliestStart = sortedItems[0];
  const earliestStartDate = getTimeZoneAwareDate(itemWithEarliestStart.start);

  const renderTimeLineItems = (items) => {
    return items.map((item) => {
      const itemStartDate = getTimeZoneAwareDate(item.start);
      const leftOffsetDays = getTimeDifferenceInDays(earliestStartDate, itemStartDate);
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
