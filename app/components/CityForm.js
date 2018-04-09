import React from 'react';
import PropTypes from 'prop-types';
import { getCurrentWeather, getForecast } from '../utils/api';
import { Redirect } from 'react-router-dom'

class CityForm extends React.Component {
  static propTypes = {
    city: PropTypes.string,
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
    this.props.onSubmitCity(this.state.city)
    // get "getForecast"
    // const forecast = await getForecast(this.state.city)
    //console.log(forecast)
    // get "getCurrentWeather"
    // const currentWeather = await getCurrentWeather(this.state.city)
    //console.log(currentWeather)
    // this.setState(() => ({
    //   forecast,
    //   currentWeather
    // }))
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
