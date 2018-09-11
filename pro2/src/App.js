import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Visuals from "./components/Visuals";
import Tabs from "./components/Tabs";

// components
import Tab from './components/Tab.js';


class App extends Component {
<<<<<<< HEAD
    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <Tab/>
          </div>
        );
      }
=======
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
>>>>>>> Development-tabs
}

export default App;
