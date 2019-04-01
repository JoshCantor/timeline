import React from 'react';

import TimeLineRow from '../timeLineRow/timeLineRow.jsx';
import {convertDaysToPixels, getTimeDifferenceInDays, getTimeZoneAwareDateFromStr} from '../utils';


const TimeLineItem = (props) => {
  const {item, leftOffsetDays} = props;
  const startDate = getTimeZoneAwareDateFromStr(item.start);
  const endDate = getTimeZoneAwareDateFromStr(item.end);
  const itemDays = getTimeDifferenceInDays(startDate, endDate);
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
