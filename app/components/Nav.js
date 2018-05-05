import React from 'react';
import { Link } from 'react-router-dom';
import CityForm from './CityForm';

export default function Nav ({ history }) {
  return (
    <div className='nav'>
      <h1 className='nav-title'>
        <Link to={'/'}>React Weather</Link>
      </h1>
      <CityForm
        direction='row'
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
