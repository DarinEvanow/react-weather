import React, { Component } from 'react'
import queryString from 'query-string'
import { getForecast } from '../utils/api'

export default class Forecast extends Component {
  state = {
    forecast: [],
    loading: true
  }

  componentDidMount() {
    this.city = queryString.parse(this.props.location.search).city
    this.makeRequest(this.city)
  }

  componentWillReceiveProps(nextProps, prevState) {
    if(nextProps.location !== prevState.forecast) {
      this.city = queryString.parse(nextProps.location.search).city
      this.makeRequest(this.city)
    }
  }

  makeRequest = (city) => {
    if(!city) return null
    this.setState({loading: true}, async () => {
      const forecast = await getForecast(city);
      this.setState(() => ({ forecast, loading: false }))
    })
  }

  render() {
    const { forecast } = this.state
    console.log(forecast)
    return (
      <div>
        {!forecast
          ? <div>Loading</div>
          : <h1>{this.city}</h1>
        }
      </div>
    )
  }
}
