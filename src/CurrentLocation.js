import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export default class CurrentLocation extends Component {
  static propTypes = { refresh: PropTypes.func.isRequired };

  _click(event) {
    navigator.geolocation.getCurrentPosition(position => {
      this.props.refresh(position.coords.latitude, position.coords.longitude);
    });
  }

  render() {
    return (
      <button className="button" onClick={event => this.currentLocation(event)}>
        <FontAwesomeIcon icon="map-marker-alt" />
      </button>
    );
  }
}
