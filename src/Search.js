import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  _handleChange(event) {
    this.setState({ value: event.target.value });
  }

  _submit(event) {
    event.preventDefault();
    this.props.refresh(this.state.value);
  }

  render() {
    return (
      <form className="float-left" onClick={event => this._submit(event)}>
        <input
          type="text"
          placeholder="Choose your next location!"
          autoComplete="off"
          autoFocus="on"
          onChange={event => this._handleChange(event)}
          value={this.state.value}
        />
        <button className="button" type="submit">
          <FontAwesomeIcon icon="search" />
        </button>
      </form>
    );
  }
}
