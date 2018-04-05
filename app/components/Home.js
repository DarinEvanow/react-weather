import React from 'react';
import CityForm from './CityForm';

export default function Home () {
  return (
    <div className='home'>
      <h1 className='header'>Enter a City</h1>
      <CityForm direction='column' />
    </div>
  )
}
