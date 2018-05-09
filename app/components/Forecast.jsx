import React, { Component } from 'react';
import queryString from 'query-string';
import DayItem from './DayItem.jsx';
import { getForecast } from '../utils/api';

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
    });
  }

  handleClick = (city, dayItem) => {
    this.props.history.push({
      pathname: `/details/${city}`,
      state: {city, dayItem},
    });
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
                  return <DayItem day={dayItem} onClick={() => this.handleClick(this.state.city, dayItem)} />
                })}
              </div>
            </div>
        }
      </div>
    )
  }
}
