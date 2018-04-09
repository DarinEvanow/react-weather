import React from 'react';
import PropTypes from 'prop-types';
import { getCurrentWeather, getForecast } from '../utils/api';

class CityForm extends React.Component {
  static propTypes = {
    city: PropTypes.string.isRequired,
  }

  state = {
    city: '',
  }

  handleUpdateCity = (event) => {
    const value = event.target.value;

    this.setState(() => ({city: value}));
  }

  handleSubmitCity = (event) => {
    event.preventDefault();

    console.log(getCurrentWeather(this.state.city));
    console.log(getForecast(this.state.city));
    this.props.onSubmitCity(this.state.city);
  }

  render () {
    return (
      <div>
        <form className='city-form'
              style={{flexDirection: this.props.direction}}
              onSubmit={this.handleSubmitCity}>
          <input className='form-control'
                 type='text' name='city'
                 placeholder='San Francisco'
                 onChange={this.handleUpdateCity} />
          <input className='btn btn-success'
                 type='submit'
                 value='Get Weather' />
        </form>
      </div>
    )
  }
}

export default CityForm;
