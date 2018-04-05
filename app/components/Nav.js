import React from 'react';
import CityForm from './CityForm';

export default function Nav () {
  return (
    <div className='nav'>
      <h1>
        React Weather
      </h1>
      <CityForm direction='row' />
    </div>
  )
}
