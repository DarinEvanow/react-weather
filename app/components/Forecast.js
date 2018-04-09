import React, { Component } from 'react'

export default class Forecast extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div>Forecast</div>
    )
  }
}
