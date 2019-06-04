import React, { Component } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import PropTypes from "prop-types";

export default class WeatherIcon extends Component {
  static propTypes = { iconName: PropTypes.string.isRequired };
  render() {
    return (
      <ReactAnimatedWeather
        icon={this.iconMatching[this.props.iconName]}
        color="#000"
        size={38}
        animate={true}
      />
    );
  }
}
