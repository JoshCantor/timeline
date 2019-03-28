import React from 'react';


const TimeLineRow = (props) => {
  const {label, children} = props;
  return (
    <div className="timeLineRow">
      <div className="timeLineRowNameContainer">
        <div className="timeLineRowName">
          {label}
        </div>
      </div>
      {children}
    </div>
  );
};

export default TimeLineRow;
