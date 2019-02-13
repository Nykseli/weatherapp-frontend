import React from 'react'
import WeatherView from './WeatherView'
import WeatherViewList from './WeatherViewList';

class WeatherApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cityName: '',
      newName: '',
      cityTemp: 0,
      cityData: {},
      cities: [],
      showCity: false
    }

    this.updateNewCity = this.updateNewCity.bind(this);
    this.handleNewCity = this.handleNewCity.bind(this)
    this.handleAddCity = this.handleAddCity.bind(this)
  }

  componentDidMount() {
    this.getCityData()
  }

  updateNewCity(e) {
    this.setState({
      cityName : e.target.value
    })
  }

  handleNewCity() {
    // Dont add empty names
    if(this.state.cityName){
      fetch("http://localhost:8000/cityWeather/" + this.state.cityName)
      .then(result=>result.json())
      .then(json => {
        this.setState({
          cityTemp: json.temperature,
          newName: json.cityName,
          showCity: true,
        });
      });
    }
  }


  handleAddCity() {
    // Dont add empty names
    if(this.state.cityName){
      let newCity = {cityName: this.state.cityName, temperature: this.state.cityTemp}
      this.setState({
        cities: this.state.cities.concat([newCity])
      })
      fetch('http://localhost:8000/saveCity', {
        method: 'POST',
        body: JSON.stringify({
          data: newCity
        })
      })
    }
  }

  getCityData(){
    fetch("http://localhost:8000/getCities")
      .then(result=>result.json())
      .then(json => {
        if(json.data) {
          this.setState({
            cities: json.data
          });
        }
      });
  }

  render() {
    return (
      <div className="weather-app">
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
        {this.state.showCity ? <WeatherView cityName={this.state.newName} temperature={this.state.cityTemp} adder={this.handleAddCity}/> : '' }
        <WeatherViewList cities={this.state.cities} />
      </div>
    )

  }
}

export default WeatherApp;
