import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { faCloudMeatball } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
import { faCloudMoon } from '@fortawesome/free-solid-svg-icons';
import { faCloudMoonRain } from '@fortawesome/free-solid-svg-icons';
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';
import { faPooStorm } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(faSun);
library.add(faMoon);
library.add(faCloud);
library.add(faCloudRain);
library.add(faCloudMeatball);
library.add(faCloudSun);
library.add(faCloudMoon);
library.add(faCloudSunRain);
library.add(faCloudMoonRain);
library.add(faCloudShowersHeavy);
library.add(faPooStorm);
library.add(faSnowflake);
library.add(faWind);

//Enter your APPID created from openweathermap.org here
const APPID = "";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card />
      </div>
    );
  }
}

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'Bangalore',
      data: null
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.fetchWeatherData = this.fetchWeatherData.bind(this);
    this.setWeatherData = this.setWeatherData.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSubmit(event) {
    const { city } = this.state;
    this.fetchWeatherData(city);
    event.preventDefault();
  }

  fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APPID}&units=metric`
    fetch(url)
      .then(response => response.json())
      .then(result => this.setWeatherData(result))
      .catch(e => e);
  }

  componentDidMount() {
    const { city } = this.state;
    this.fetchWeatherData(city);
  }

  onSearchChange(event) {
    this.setState({ city: event.target.value });
  }

  setWeatherData(result) {
    this.setState({ data: result });
  }

  render() {
    const { data } = this.state;
    return (<div className="card">
        <Search onSubmit={this.onSubmit} onChange={this.onSearchChange}/>
        { data &&
          <div className="weather-container">
            <p>{data.name}</p>
            <div className="weather">
              <Icon icon={data.weather[0].icon} />
              <span>{data.main.temp}&#x2103;</span>
            </div>
          </div>
         }
      </div>
    );
  }
}

const Search = (props) => {
  return (
    <form onSubmit={props.onSubmit} className="search-container">
      <input type="text" placeholder="Search the city" onChange={props.onChange} className="search-input" />
      <button type="submit" className="button">Search</button>
    </form>
  );
}

const Icon = (props) => {
  console.log(props);
  switch (props.icon) {
    case '01d':
      return <FontAwesomeIcon icon="sun" />
      break;
    case '01n':
      return <FontAwesomeIcon icon="moon" />
      break;
    case '02d':
      return <FontAwesomeIcon icon="cloud-sun" />
      break;
    case '02n':
      return <FontAwesomeIcon icon="cloud-moon" />
      break;
    case '03d':
      return <FontAwesomeIcon icon="cloud" />
      break;
    case '03n':
      return <FontAwesomeIcon icon="cloud" />
      break;
    case '04d':
      return <FontAwesomeIcon icon="cloud-meatball" />
      break;
    case '04n':
      return <FontAwesomeIcon icon="cloud-meatball" />
      break;
    case '09d':
      return <FontAwesomeIcon icon="cloud-showers-heavy" />
      break;
    case '09n':
      return <FontAwesomeIcon icon="cloud-showers-heavy" />
      break;
    case '10d':
      return <FontAwesomeIcon icon="rain" />
      break;
    case '10n':
      return <FontAwesomeIcon icon="rain" />
      break;
    case '11d':
      return <FontAwesomeIcon icon="poo-storm" />
      break;
    case '11n':
      return <FontAwesomeIcon icon="poo-storm" />
      break;
    case '13d':
      return <FontAwesomeIcon icon="snowflake" />
      break;
    case '13n':
      return <FontAwesomeIcon icon="snowflake" />
      break;
    case '50d':
      return <FontAwesomeIcon icon="wind" />
      break;
    case '50n':
      return <FontAwesomeIcon icon="wind" />
      break;
    default:

  }
}

export default App;
