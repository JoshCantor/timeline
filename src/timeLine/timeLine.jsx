import React from 'react';

import {
  convertDaysToPixels,
  getCalendar,
  getLatestEndDate,
  getTimeDifferenceInDays,
  sortItemsByStartDateAsc
} from '../utils';
import TimeLineItemRow from '../timeLineItemRow/timeLineItemRow';

const TimeLine = (props) => {
  const sortedItems = sortItemsByStartDateAsc(props.items);
  const itemWithEarliestStart = sortedItems[0];
  const earliestStartDate = new Date(itemWithEarliestStart.start);

  const renderTimeLineItemRows = (items) => {
    return items.map((item) => {
      const leftOffsetDays = getTimeDifferenceInDays(earliestStartDate, new Date(item.start));
      return <TimeLineItemRow item={item} leftOffsetDays={leftOffsetDays} key={item.id} />;
    });
  };

  const renderColumnHeaders = (items) => {
    console.log(getCalendar(items));
    return (
      <div className="timeLineItemRow">
        <div className="timeLineItemNameContainer">
          <div className="timeLineItemName">
            Items
          </div>
        </div>
        {/*<div className="timeLineItem" style={style}/>*/}
      </div>
    );
  };

  const renderTimeLine = () => {
    return (
      <div className="timeLineContainer">
        {renderColumnHeaders(sortedItems)}
        {renderTimeLineItemRows(sortedItems)}
      </div>
    );
  };

  return renderTimeLine();

};

export default TimeLine;
