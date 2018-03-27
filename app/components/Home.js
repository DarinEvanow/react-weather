import React from 'react';
import CityStateForm from './CityStateForm';

export default function Home () {
  return (
    <div className='home'>
      <h1 className='header'>Enter a City and State</h1>
      <CityStateForm />
    </div>
  )
}
