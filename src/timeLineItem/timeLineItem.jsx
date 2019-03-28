import React from 'react';

import TimeLineRow from '../timeLineRow/timeLineRow.jsx';
import {convertDaysToPixels, getTimeDifferenceInDays} from '../utils';


const TimeLineItem = (props) => {
  const {item, leftOffsetDays} = props;
  const itemDays = getTimeDifferenceInDays(new Date(item.start), new Date(item.end));
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
