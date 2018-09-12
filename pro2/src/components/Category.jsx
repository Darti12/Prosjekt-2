import React, { Component } from "react";
import Choices from "./Choices";

class Category extends Component {
  state = {
    textType: null,
    imageType: null,
    soundType: null
  };

  hello() {
    console.log("text: " + this.state.textType);
    console.log("lyd: " + this.state.soundType);
    console.log("bilde: " + this.state.imageType);
  }

  handleChangeValueImage = e => {
    this.state.imageType = e;
    this.setState({ imageType: e });
    this.hello();
  };
  handleChangeValueSound = e => {
    this.state.soundType = e;
    this.setState({ soundType: e });
  };
  handleChangeValueText = e => {
    this.state.textType = e;
    this.setState({ textType: e });
  };
  render() {
    return (
      <div id="Category-container">
        <Choices
          type="Bilde"
          value={this.state.imageType}
          onChangeValue={this.handleChangeValueImage}
        />
        <Choices
          type="Lyd"
          value={this.state.soundType}
          onChangeValue={this.handleChangeValueSound}
        />
        <Choices
          type="Text"
          value={this.state.textType}
          onChangeValue={this.handleChangeValueText}
        />
      </div>
    );
  }
}

export default Category;
