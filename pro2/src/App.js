import React, { Component } from "react";
import "./App.css";
import Tabs from "./components/Tab.js";
import Visuals from "./components/Visuals.jsx";
import TextComponent from "./components/TextComponent";

// components

class App extends Component {
  render() {
    return (
      <div className="App">
        <TextComponent/>
      </div>
    );
  }
}

export default App;
