import React, { Component } from "react";
import $ from "jquery";

class Visuals extends Component {
  state = {
    url: "Example.svg"
  };

  constructor() {
    super();
  }

  imageStyle = {
    width: 200,
    height: 200
  };

  funksjon() {
    console.log("hei");
    fetch("Example.svg").then(function(response) {
      // perform setState here
      $("#bilde").append(response);
    });
  }

  render() {
    return (
      <div>
        <div id="bilde">
          <svg>
            <circle cx={50} cy={50} r={10} fill="yellow" />
          </svg>
        </div>
        <button
          id="knapp"
          onClick={() => {
            this.funksjon();
          }}
        >
          Klikk meg!
        </button>
      </div>
    );
  }
}

$(document).ready(function() {
  $("#knapp").on("click", "button.switch", function() {
    console.log("hei");
    $.ajax("Example.svg").done(function(response) {
      $("#bilde").html(response);
    });
  });
});

export default Visuals;
