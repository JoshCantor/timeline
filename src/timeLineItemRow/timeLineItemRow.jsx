import React from 'react';

import {convertDaysToPixels, getTimeDifferenceInDays} from '../utils';

const TimeLineItemRow = (props) => {
  const {item, leftOffsetDays} = props;
  const itemDays = getTimeDifferenceInDays(new Date(item.start), new Date(item.end));
  const style = {
    backgroundColor: 'blue',
    height: '10px',
    marginLeft: convertDaysToPixels(leftOffsetDays),
    width: convertDaysToPixels(itemDays),
  };

  return (
    <div className="timeLineItemRow">
      <div className="timeLineItemNameContainer">
        <div className="timeLineItemName">
          {item.name}
        </div>
      </div>
      <div className="timeLineItem" style={style}/>
    </div>
  );
};

export default TimeLineItemRow;
