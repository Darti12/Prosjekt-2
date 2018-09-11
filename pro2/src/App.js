import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Visuals from "./components/Visuals";
import Tabs from "./components/Tabs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs>
          <div label="Tab 1">
            <Visuals />
          </div>
          <div label="Tab 2" />
          <div label="Tab 3" />
          <div label="Tab 4" />
        </Tabs>
      </div>
    );
  }
}

export default App;
