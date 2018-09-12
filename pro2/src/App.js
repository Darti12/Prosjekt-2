import React, { Component } from "react";
import "./App.css";
import Tabs from "./components/Tab.js";
import Visuals from "./components/Visuals.jsx";
import Category from "./components/Category";

// components

class App extends Component {
  render() {
    return (
      <div className="App">
        <Category />
      </div>
    );
  }
}

export default App;
