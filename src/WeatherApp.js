import React from 'react'
import WeatherView from './WeatherView'
import WeatherViewList from './WeatherViewList';

class WeatherApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cityName: '',
      cityData: {},
      cities: [],
      showCity: false
    }

    this.updateNewCity = this.updateNewCity.bind(this);
    this.handleNewCity = this.handleNewCity.bind(this)
    this.handleAddCity = this.handleAddCity.bind(this)
  }

  updateNewCity(e) {
    this.setState({
      cityName : e.target.value
    })
  }

  handleNewCity() {
    // Dont add empty names
    if(this.state.cityName){
      console.log(this.state.cityName)
      this.setState({
        showCity: true,
      })
    }
  }


  handleAddCity() {
    // Dont add empty names
    if(this.state.cityName){
      let newCity = {name: this.state.cityName, temperature: 24}
      this.setState({
        cities: this.state.cities.concat([newCity])
      })
    }
  }

  getDataFromCity(){
    return <p>TODO:</p>
  }

  render() {
    return (
      <div>
        <h1>Weather Application:</h1>
        <input
        type="text"
        value={this.state.cityName}
        onChange={this.updateNewCity}
        />
        <button
          onClick={this.handleNewCity} >
          Get weather
        </button>
        {this.state.showCity ? <WeatherView cityName={this.state.cityName} adder={this.handleAddCity}/> : '' }
        <WeatherViewList cities={this.state.cities} />
      </div>
    )

  }
}

export default WeatherApp;
