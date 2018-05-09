import React from 'react';
import DayItem from './DayItem.jsx';

export default class Detail extends React.Component {
  render() {
    let { city, dayItem } = this.props.location.state;
    console.log('city', city);
    console.log('dayItem', dayItem);
    return (
      <div>
        <DayItem day={dayItem} />
        <div className='detail-container'>
          <p>{city}</p>
          <p>{dayItem.weather[0].description}</p>
          <p>min temp: {dayItem.temp.min} degrees</p>
          <p>max temp: {dayItem.temp.max} degrees</p>
          <p>humidity: {dayItem.humidity}</p>
        </div>
      </div>
    )
  }
}
