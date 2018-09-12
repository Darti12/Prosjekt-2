import React, { Component } from "react";
import "./App.css";
import Tabs from "./components/Tabs.jsx";
import Category from "./components/Category";

class App extends Component {
  state = {
    textType: null,
    imageType: null,
    soundType: null
  };
  getInfoFromCategories = info => {
    this.setState({ textType: info.textType });
    this.setState({ imageType: info.imageType });
    this.setState({ soundType: info.soundType });
  };

  render() {
    return (
      <div className="App">
        <Tabs>
          <div label="tab1" typer={this.state}>
            dette er tab1
          </div>
          <div label="tab2" typer={this.state}>
            dette er tab2
          </div>
        </Tabs>
        <Category onChangeValue={this.getInfoFromCategories} />
      </div>
    );
  }
}

export default App;
