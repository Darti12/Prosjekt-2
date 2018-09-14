import React, { Component } from "react";
import "./App.css";
import TextComponent from "./components/TextComponent";
import Tabs from "./components/Tabs.jsx";
import Category from "./components/Category";

class App extends Component {
  state = {
    textType: null,
    imageType: null,
    soundType: null
  };
  getInfoFromCategories = info => {
    if (info.startsWith("Text")) {
      console.log(info);
      this.setState({ textType: info.substring(6, info.length) });
    }
    if (info.startsWith("Image")) {
      console.log(info);
      this.setState({ imageType: info.substring(7, info.length) });
    }
    if (info.startsWith("Sound")) {
      console.log(info);
      this.setState({ soundType: info.substring(7, info.length) });
    }
  };

  render() {
    return (
      <div className="App">

        <Tabs>          
          <div label="tab1" typer={this.state}>
            dette er tab1
            <TextComponent/>
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
