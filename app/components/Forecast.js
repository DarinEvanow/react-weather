import React, { Component } from 'react';
import { getForecast } from '../utils/api';
import queryString from 'query-string';

function DayItem ({ day }) {
  const icon = day.weather[0].icon;
  return (
    <div>
      <img src={`./app/images/weather-icons/${icon}.svg`} alt='Weather' />
      <h2>{day.dt}</h2>
    </div>
  )
}

export default class Forecast extends Component {
  state = {
    city: '',
    forecastData: [],
    loading: true,
  }

  componentDidMount() {
    this.city = queryString.parse(this.props.location.search).city;
    this.makeRequest(this.city)
  }

  componentWillReceiveProps(nextProps) {
    this.city = queryString.parse(nextProps.location.search).city;
    this.makeRequest(this.city);
  }

  makeRequest = (city) => {
    if (!city) return null;
    this.setState({ loading: true }, async () => {
      const forecast = await getForecast(city);
      this.setState(() => ({ city, forecastData: forecast.list, loading: false }));
    })
  }

  render() {
    return (
      <div className='forecast-container'>
        {this.state.loading
          ? <h1 className='forecast-header'>Loading</h1>
          : <div>
              <h1 className='forecast-header'>{this.state.city}</h1>
              <div className='forecast'>
                {this.state.forecastData.map((dayItem) => {
                  console.log(dayItem);
                  return <DayItem day={dayItem} />
                })}
              </div>
            </div>
        }
      </div>
    )
  }
}
