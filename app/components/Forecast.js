import React, { Component } from 'react';
import { getForecast } from '../utils/api';
import queryString from 'query-string';

export default class Forecast extends Component {
  state ={
    city: '',
    forecast: [],
    loading: true,
  }

  componentDidMount() {
    this.city = queryString.parse(this.props.location.search).city;
    this.makeRequest(this.city)
  }

  makeRequest = (city) => {
    if (!city) return null;
    this.setState({ loading: true }, async () => {
      const forecast = await getForecast(city);
      this.setState(() => ({ city, forecast, loading: false }));
    })
  }

  render() {
    return (
      <div>
        {!this.state.forecast
          ? <h1>Loading</h1>
          : <h1>{this.state.city}</h1>
        }
      </div>
    )
  }
}
