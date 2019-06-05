import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default class Navigation extends Component {
  render() {
    return (
      <header>
        <h1>Travel + Weather + Sun + Sea</h1>
        <br />
        <ul className="navigation-items">
          <li className="navigation-item">
            <Link to="/">Sun & Sea</Link>
          </li>
          <li className="navigation-item">
            <Link to="/munich">Family & Snow</Link>
          </li>
          <li className="navigation-item">
            <Link to="/venice">Love & Art</Link>
          </li>
        </ul>
      </header>
    );
  }
}
