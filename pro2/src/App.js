import React, { Component}  from 'react';
import logo from './logo.svg';
import './App.css';

// components
import Tab from './components/Tab.js';
import TextComponent from './components/TextComponent.js'


class App extends Component {
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
              <TextComponent/>
          </div>
        );
      }
}
export default App;
