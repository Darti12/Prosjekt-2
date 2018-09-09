import React, { Component } from "react";
import $ from "jquery";
import ReactDOM from "react-dom";
import axios from "axios";

class Visuals extends Component {
  state = {
    image: null
  };

  constructor() {
    super();
  }

  componentDidMount() {
    this.setImage("Cat4");
  }

  getRandomInt() {
    return Math.floor(Math.random() * 4) + 1;
  }

  setRandomCat() {
    var name = "Cat" + this.getRandomInt();
    this.setImage(name);
  }

  setRandomDog() {
    var name = "Dog" + this.getRandomInt();
    this.setImage(name);
  }

  setRandomElephant() {
    var name = "Elephant" + this.getRandomInt();
    this.setImage(name);
  }

  setImage(name) {
    axios.get(`./media/images/` + name + ".svg").then(response => {
      const image = response.data;
      this.setState({ image });
      $("#bilde").html(this.state.image);
      var svgBilde = $("#bilde").find("svg")[0];
    });
  }

  render() {
    return (
      <div>
        <div id="bilde">Faulty image url</div>
      </div>
    );
  }
}

export default Visuals;
