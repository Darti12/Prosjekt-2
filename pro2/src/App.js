import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tabs from "./components/Tabs";

// components

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs>
          <div label="Tab 1" />
          <div label="Tab 2" />
          <div label="Tab 3" />
          <div label="Tab 4" />
        </Tabs>
      </div>
    );
  }
}

export default App;
