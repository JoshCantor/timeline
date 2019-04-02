import React from 'react';

import TimeLineRow from '../timeLineRow/timeLineRow.jsx';
import {convertDaysToPixels, getTimeDifferenceInDays, getTimezoneAwareDateFromStr} from '../utils';


const TimeLineItem = (props) => {
  const {item, firstDayOfStartMonth} = props;
  const startDate = getTimezoneAwareDateFromStr(item.start);
  const endDate = getTimezoneAwareDateFromStr(item.end);
  const itemDays = getTimeDifferenceInDays(startDate, endDate);
  const leftOffsetDays = getTimeDifferenceInDays(firstDayOfStartMonth, startDate);
  const style = {
    backgroundColor: 'blue',
    height: '10px',
    marginLeft: convertDaysToPixels(leftOffsetDays),
    width: convertDaysToPixels(itemDays),
  };

  return (
    <TimeLineRow label={props.item.name}>
      <div className="timeLineItem" style={style}/>
    </TimeLineRow>
  );
};

export default TimeLineItem
