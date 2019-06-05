import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navigation from "./Navigation";
import Main from "./Main";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);
library.add(faMapMarkerAlt);

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Main />
      </div>
    );
  }
}
