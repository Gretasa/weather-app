import React, { Component } from "react";

export default class WeatherIcon extends Component {
  animatedIconName = {
    "01d": "day",
    "01n": "night",
    "02d": "cloudy-day",
    "02n": "cloudy-night",
    "03d": "cloudy",
    "03n": "cloudy",
    "04d": "cloudy",
    "04n": "cloudy",
    "09d": "rainy-1",
    "09n": "rainy-2",
    "10d": "rainy-3",
    "10n": "rainy-3",
    "11d": "thunder",
    "11n": "thunder",
    "13d": "snowy",
    "13n": "snowy",
    "50d": "cloudy",
    "50n": "cloudy"
  };

  render() {
    return (
      <img
        className="weather-icon"
        src={`/icons/${this.animatedIconName[this.props.code]}.svg`}
        alt=""
      />
    );
  }
}
