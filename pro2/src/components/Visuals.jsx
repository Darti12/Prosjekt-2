import React, { Component } from "react";
import $ from "jquery";
import axios from "axios";

class Visuals extends Component {
  state = {
    image: null,
    imageName: null
  };

  constructor() {
    super();
  }

  componentDidMount() {
    this.setRandomElephant();
  }

  getRandomInt() {
    return Math.floor(Math.random() * 4) + 1;
  }

  setRandomCat() {
    var name = "Cat" + this.getRandomInt();
    this.state.imageName = name;
    this.setImage(name);
  }

  setRandomDog() {
    var name = "Dog" + this.getRandomInt();
    this.state.imageName = name;
    this.setImage(name);
  }

  setRandomElephant() {
    var name = "Elephant" + this.getRandomInt();
    this.state.imageName = name;
    this.setImage(name);
  }

  setImage(name) {
    if (this.state.image === name) {
      name = name.substring(0, name.length - 1) + this.getRandomInt();
      console.log(name);
      return this.setImage(name);
    }
    axios.get(`./media/images/` + name + ".svg").then(response => {
      const image = response.data;
      this.setState({ image });
      $("#bilde").html(this.state.image);
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
