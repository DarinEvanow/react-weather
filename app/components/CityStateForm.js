import React from 'react';

export default function CityStateForm () {
  return (
    <div>
      <form class='city-state-form'>
        <input class='form-control' type='text' name='citystate' placeholder='San Francisco, California' />
        <input class='btn btn-success' type='submit' value='Get Weather' />
      </form>
    </div>
  )
}