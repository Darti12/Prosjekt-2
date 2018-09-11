import React, { Component } from 'react';
import './App.css';



// components
import Tabs from "./components/Tabs.jsx";


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
