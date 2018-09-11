import React, { Component } from 'react';
import './App.css';
import Tabs from "./components/Tabs";
import TextComponent from './components/TextComponent.js'

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
