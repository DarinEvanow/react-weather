import React from 'react';
import DayItem from './DayItem.jsx';
import { convertTemp } from '../utils/helpers';

export default class Detail extends React.Component {
  render() {
    let { city, dayItem } = this.props.location.state;
    return (
      <div>
        <DayItem day={dayItem} />
        <div className='detail-container'>
          <p>{city}</p>
          <p>{dayItem.weather[0].description}</p>
          <p>max temp: {convertTemp(dayItem.temp.max)} degrees</p>
          <p>min temp: {convertTemp(dayItem.temp.min)} degrees</p>
          <p>humidity: {dayItem.humidity}</p>
        </div>
      </div>
    )
  }
}
