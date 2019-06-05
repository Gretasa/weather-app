import React, { Component } from "react";
import { Route } from "react-router-dom";
import Weather from "./Weather";

export default class App extends Component {
  render() {
    return (
      <div>
        <Route
          exact={true}
          path="/"
          render={() => (
            <div className="App">
              <Weather city="Lisbon" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/munich"
          render={() => (
            <div className="App">
              <Weather city="Munich" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/venice"
          render={() => (
            <div className="App">
              <Weather city="Venice" />
            </div>
          )}
        />
      </div>
    );
  }
}
