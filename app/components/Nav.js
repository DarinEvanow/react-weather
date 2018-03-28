import React from 'react';
import CityStateForm from './CityStateForm';

export default function Nav () {
  return (
    <div className='nav'>
      <h1>
        React Weather
      </h1>
      <CityStateForm direction='row' />
    </div>
  )
}
