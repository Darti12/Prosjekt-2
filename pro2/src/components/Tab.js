import React, { Component } from "react";
import AudioComponent from "./AudioComponent.js";
import TextComponent from "./TextComponent";

/**
 * Tab component that takes care of text, visuals and audio.
 */
class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
        text: {
            category: "",
            selectionNumber: null,

        }
    };
    this._getAudioFile = this._getAudioFile.bind(this);
  }

  render() {
    return (
      <div>
        <h1>This is a tab</h1>
          <TextComponent text={this.state.text}/>
      </div>
    );
  }

  _getAudioFile() {
    let file_name = document.getElementById("audio_file_name").value;
    if (!file_name.endsWith(".mp3")) {
      let p = document.getElementById("test-para");
      p.innerHTML = "<p>Not a valid format</p>";
    }
    let file_path = "./media/audio/" + file_name;
    let myInit = {
      method: "GET",
      headers: new Headers(),
      mode: "cors",
      cache: "default"
    };

    fetch(file_path, myInit)
      .then(response => {
        return response.blob();
      })
      .then(blob => {
        let obj = URL.createObjectURL(blob);
        let audio = new Audio(obj);

        this.setState({
          audioHund: obj
        });

        audio.play().then(() => {
          console.log("Playing song.");
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}
export default Tab;
