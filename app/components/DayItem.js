import React, { Component } from 'react';
import { getDate } from '../utils/helpers';

export default function DayItem ({ day, onClick }) {
  const icon = day.weather[0].icon;
  const date = getDate(day.dt);
  return (
    <div className='forecast-item' onClick={onClick}>
      <img className='forecast-image' src={`./app/images/weather-icons/${icon}.svg`} alt='Weather' />
      <h2 className='forecast-text'>{date}</h2>
    </div>
  )
}