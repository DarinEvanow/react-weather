import React from 'react';
import DayItem from './DayItem';

export default class Detail extends React.Component {
  render() {
    let { ctiy, dayItem } = this.props.location.state;
    console.log(dayItem);
    return (
      <div>
        <DayItem day={dayItem} />
      </div>
    )
  }
}
