import React, { Component } from "react";
import axios from "axios";
import "./Weather.css";
import Api from "./Api";
import Search from "./Search";
import DateUtility from "./DateUtil";
import WeatherIcon from "./Weathericon";
import Forecast from "./Forecast";
import CurrentLocation from "./CurrentLocation";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: this.props.city
    };
  }

  componentDidMount = () => {
    if (this.state.city) {
      this.search(this.state.city);
    }
  };

  search = city => {
    let url = `${Api.url}/weather?q=${city}&appid=${
      Api.weatherApiKey
    }&units=metric`;

    axios.get(`${url}`).then(response => {
      let date = new Date(response.data.dt * 1000);
      this.setState({
        city: response.data.name,
        //date: this.formatDate(new Date(response.data.dt * 1000)),
        date: new DateUtility(date).fullDate(),
        temperature: `${Math.round(response.data.main.temp)}°`,
        icon: response.data.weather[0].icon,
        iconDescription: response.data.weather[0].main,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        pressure: response.data.main.pressure
      });
    });
  };

  currentLocation = (latitude, longitude) => {
    this.refresh(
      `${Api.url}/weather?lat=${latitude}&lon=${longitude}&appid=${
        Api.weatherApiKey
      }&units=metric`
    );
  };

  refresh = url => {
    axios.get(url).then(response => {
      this.setState({
        searching: false,
        city: response.data.name
      });
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="search-bar">
            <Search handleSearch={this.search} />
            <CurrentLocation refresh={this.currentLocation} />
          </div>
          <div className="weather-location">
            <h1>{this.state.city}</h1>
          </div>
          <div className="date">
            <p>{this.state.date}</p>
          </div>

          <div className="row">
            <div className="col-sm-7">
              <div className="weather-info">
                <h2 className="temperture">{this.state.temperature}</h2>
                <div className="icon-and-description">
                  <div className="weather-icon">
                    <WeatherIcon code={this.state.icon} />
                  </div>
                  <div className="icon-description">
                    {this.state.iconDescription}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-5">
              <ul className="weather-details list-group">
                <li className="weather-wind weather-detail-item">
                  Wind
                  <div className="wind-km-h">
                    <span>{this.state.wind}</span>
                    m/s
                  </div>
                </li>
                <li className="weather-humidity weather-detail-item">
                  Humidity
                  <div className="humidity-percentage">
                    <span>{this.state.humidity}</span>%
                  </div>
                </li>
                <li className="weather-humidity weather-detail-item">
                  Pressure
                  <div className="humidity-percentage">
                    <span>{this.state.pressure}</span>
                    hPa
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="weather-division">
            <hr />
          </div>

          <Forecast city={this.state.city} />
        </div>
      </div>
    );
  }
}
