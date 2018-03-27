import React from 'react';
import PropTypes from 'prop-types';

export default function CityStateForm (props) {
  return (
    <div>
      <form class='city-state-form' style={{flexDirection: props.direction}}>
        <input class='form-control' type='text' name='citystate' placeholder='San Francisco, California' />
        <input class='btn btn-success' type='submit' value='Get Weather' />
      </form>
    </div>
  )
}