import React from 'react'

import "./Weather.css"

class WeatherView extends React.Component {

  render() {
    return (
      <div className="weather-view">
        <h3>City name: {this.props.cityName} </h3>
        <h4>Temperature: {this.props.temperature} Celsius</h4>
        <button
          onClick={this.props.adder}>
          Add City
        </button>
      </div>
    )
  }
}

export default WeatherView;
