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
    forecast: null,
    currentWeather: null
  }

  handleUpdateCity = (event) => {
    const value = event.target.value;

    this.setState(() => ({city: value}));
  }

  handleSubmitCity = async (event) => {
    event.preventDefault();
    // get "getForecast"
    const forecast = await getForecast(this.state.city)
    //console.log(forecast)
    // get "getCurrentWeather"
    const currentWeather = await getCurrentWeather(this.state.city)
    //console.log(currentWeather)
    this.setState(() => ({
      forecast,
      currentWeather
    }))

    // console.log(getCurrentWeather(this.state.city));
    //console.log(getForecast(this.state.city));
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  render () {
    if(this.state.forecast) {
      const { forecast, currentWeather } = this.state
      return <Redirect to={{
        pathname: '/forecast',
        search: `?city=${currentWeather.name}`,
        state: {forecast, currentWeather}
      }} />
    }
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
