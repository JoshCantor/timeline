import React from 'react';

import {
  convertDaysToPixels,
  getLatestEndDate,
  getTimeDifferenceInDays,
  sortItemsByStartDateDesc
} from '../utils';
import TimeLineItemRow from '../timeLineItemRow/timeLineItemRow';

const TimeLine = (props) => {
  const sortedItems = sortItemsByStartDateDesc(props.items);
  const itemWithEarliestStart = sortedItems[sortedItems.length - 1];
  const earliestStartDate = new Date(itemWithEarliestStart.start);
  const latestEndDate = getLatestEndDate(sortedItems);
  const totalNumberOfDays = getTimeDifferenceInDays(earliestStartDate, latestEndDate);


  const renderTimeLineItemRows = (items) => {
    return items.map((item) => {
      const leftOffsetDays = getTimeDifferenceInDays(earliestStartDate, new Date(item.start));
      return <TimeLineItemRow item={item} leftOffsetDays={leftOffsetDays} key={item.id} />;
    });
  };

  // const renderColumnHeaders = (items) => {
  //   return (
  //     <div>
  //
  //     </div>
  //   );
  // };

  const renderTimeLine = () => {
    return (
      <div className="timeLineContainer">
        {renderTimeLineItemRows(sortedItems)}
      </div>
    );
  };

  return renderTimeLine();

};

export default TimeLine;
