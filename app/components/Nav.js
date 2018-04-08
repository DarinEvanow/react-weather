import React from 'react';
import { Link } from 'react-router-dom';
import CityForm from './CityForm';

export default function Nav () {
  return (
    <div className='nav'>
      <h1 className='nav-title'>
        <Link to={'/'}>React Weather</Link>
      </h1>
      <CityForm direction='row' />
    </div>
  )
}
