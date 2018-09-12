import React, { Component } from "react";
import PropTypes from "prop-types";

class Choices extends Component {
  state = {};
  constructor(props) {
    super(props);
    this._getValueChecked = this._getValueChecked.bind(this);
  }

  _getValueChecked() {
    var checked = document.querySelector(
      'input[name="' + this.props.type + '"]:checked'
    ).value;
    this.props.onChangeValue(checked);
  }

  render() {
    return (
      <div>
        <h3>
          Choose {this.props.type}
          -type
        </h3>
        <form onChange={() => this._getValueChecked()}>
          <input
            type="radio"
            name={this.props.type}
            id={this.props.type}
            value="Cat"
          />
          Cat
          <br />
          <input
            type="radio"
            name={this.props.type}
            id={this.props.type}
            value="Dog"
          />
          Dog
          <br />
          <input
            type="radio"
            name={this.props.type}
            id={this.props.type}
            value="Elephant"
          />
          Elephant
        </form>
      </div>
    );
  }
}

export default Choices;
