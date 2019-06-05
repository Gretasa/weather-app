import React, { Component } from "react";
import { Route } from "react-router-dom";
import Weather from "./Weather";
import { Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Route
          exact={true}
          path="/"
          render={() => (
            <div className="App">
              <ul className="favoriteCitiesDescription">
                <li>
                  <Link to={"https://de.wikipedia.org/wiki/Lissabon"}>
                    Lisbon
                  </Link>
                </li>
                <li>
                  Lisbon is Portugal’s hilly, coastal capital city. From
                  imposing São Jorge Castle, the view encompasses the old city’s
                  pastel-colored buildings, Tagus Estuary and Ponte 25 de Abril
                  suspension bridge.
                </li>
                <Weather city="Lisbon" />
              </ul>
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
              <ul className="favoriteCitiesDescription">
                <li>
                  <Link
                    to={"https://www.labiennale.org/en/art/2019/information"}
                  >
                    Biennale Arte 2019 May You Live In Interesting Times
                  </Link>
                </li>
                <li>
                  It is situated on a group of 118 small islands that are
                  separated by canals and linked by over 400 bridges.
                </li>
                <Weather city="Venice" />
              </ul>
            </div>
          )}
        />
      </div>
    );
  }
}
