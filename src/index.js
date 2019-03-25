import React, {createElement} from 'react';
import { render } from 'react-dom';

import TimeLine from './timeLine/timeLine.jsx';
import timelineItems from './timelineItems';

import './index.css';

render(
  createElement(TimeLine, {items: timelineItems}),
  document.getElementById('root')
);
