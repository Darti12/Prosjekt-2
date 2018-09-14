import React, { Component } from "react";
import Choices from "./Choices";

class Category extends Component {
  state = {
    textType: null,
    imageType: null,
    soundType: null
  };

  sendInfoUp() {
    this.props.onChangeValue(this.state);
  }

  handleChangeValueImage = e => {
    this.props.onChangeValue("Image: " + e);
  };
  handleChangeValueSound = e => {
    this.props.onChangeValue("Sound: " + e);
  };
  handleChangeValueText = e => {
    this.props.onChangeValue("Text: " + e);
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
