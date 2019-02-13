import React from 'react'


class WeatherViewList extends React.Component {

  render() {
    if(this.props.cities){
      return (
        <div className="weather-view-list">
          {this.props.cities.map((city, i) => {
            return (
              <div key={i} className="weather-view-list-item">
                <p>City name: {city.cityName}</p>
                <p>Temperature: {city.temperature} Celsius</p>
              </div>
            )
          })}
        </div>
      )
  }
    return ''
  }

}

export default WeatherViewList;
