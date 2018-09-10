import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Visuals from "./components/visuals";
import Tabs from "./components/tabs";
import Tab from "./components/tab";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs>
          <div label="Tab 1">
            <Visuals />
          </div>
          <div label="Tab 2">Innhold 2</div>
          <div label="Tab 3">Innhold 3</div>
          <div label="Tab 4">Innhold 4</div>
        </Tabs>
      </div>
    );
  }
}

export default App;
