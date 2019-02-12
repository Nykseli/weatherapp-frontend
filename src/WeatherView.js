import React from 'react'


class WeatherView extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <h3>City name: {this.props.cityName} </h3>
        <h4>Temperature: 24 C</h4>
        <button
          onClick={this.props.adder}>
          Add City
        </button>
      </div>
    )
  }
}

export default WeatherView;
