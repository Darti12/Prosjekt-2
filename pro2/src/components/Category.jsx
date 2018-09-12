import React, { Component } from "react";
import Choices from "./Choices";

class Category extends Component {
  state = {
    textType: null,
    imageType: null,
    soundType: null
  };

  sendInfoUp() {
    console.log("text: " + this.state.textType);
    console.log("lyd: " + this.state.soundType);
    console.log("bilde: " + this.state.imageType);
    this.props.onChangeValue(this.state);
  }

  handleChangeValueImage = e => {
    this.setState({ imageType: e });
    this.sendInfoUp();
  };
  handleChangeValueSound = e => {
    this.setState({ soundType: e });
    this.sendInfoUp();
  };
  handleChangeValueText = e => {
    this.setState({ textType: e });
    this.sendInfoUp();
  };
  render() {
    return (
      <div id="Category-container">
        <Choices
          type="image"
          value={this.state.imageType}
          onChangeValue={this.handleChangeValueImage}
        />
        <Choices
          type="sound"
          value={this.state.soundType}
          onChangeValue={this.handleChangeValueSound}
        />
        <Choices
          type="text"
          value={this.state.textType}
          onChangeValue={this.handleChangeValueText}
        />
      </div>
    );
  }
}

export default Category;
