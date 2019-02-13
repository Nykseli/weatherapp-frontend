import React from 'react'


class WeatherViewList extends React.Component {
  constructor(props) {
    super(props)
  }

  cityList() {
    return
  }


  render() {
    return (
      <div className="weather-view-list">
        {this.props.cities.map((city, i) => {
          return (
            <div key={i} className="weather-view-list-item">
              <h5>City name: {city.cityName}</h5>
              <h6>Temperature: {city.temperature}</h6>
            </div>
          )
        })}
      </div>
    )
  }
}

export default WeatherViewList;
