import React from 'react';
import CityForm from './CityForm';

export default function Home({ history }) {
  return (
    <div className='home-container' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
      <div className='home'>
        <h1 className='header'>Enter a City</h1>
        <CityForm
          direction='column' onSubmitCity={(city) => {
            history.push({
              pathname: '/forecast',
              search: `?city=${city}`
            })
          }} />
      </div>
    </div>
  )
}
