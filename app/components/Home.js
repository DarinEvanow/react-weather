import React from 'react';
import CityForm from './CityForm';
import { withRouter } from 'react-router-dom';

export default function Home ({ history }) {
  return (
    <div className='home'>
      <h1 className='header'>Enter a City</h1>
      <CityForm
        direction='column'
        onSubmitCity={(city) => {
          history.push({
            pathname: 'forecast',
            search: `?city=${city}`
          });
        }}
        />
    </div>
  )
}
