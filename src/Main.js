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
              <span>
                Lisbon is Portugal’s hilly, coastal capital city. From imposing
                São Jorge Castle, the view encompasses the old city’s
                pastel-colored buildings, Tagus Estuary and Ponte 25 de Abril
                suspension bridge.
              </span>
              <Weather city="Lisbon" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/munich"
          render={() => (
            <div className="App">
              <span>
                Servus, Minga! Komm vorbei und genieß die Zeit. Munich is the
                capital and most populous city of Bavaria, the second most
                populous German federal state.
              </span>
              <Weather city="Munich" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/venice"
          render={() => (
            <div className="App">
              <span>
                Biennale Arte 2019 May You Live In Interesting Times
                {"https://www.labiennale.org/en/art/2019/information "}
                <a href="https://www.labiennale.org/en/art/2019/information" />{" "}
                It is situated on a group of 118 small islands that are
                separated by canals and linked by over 400 bridges.
              </span>
              <Weather city="Venice" />
            </div>
          )}
        />
      </div>
    );
  }
}
