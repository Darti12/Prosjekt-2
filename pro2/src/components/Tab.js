import React, {Component} from 'react';
import AudioComponent from './AudioComponent.js';


/**
 * Tab component that takes care of text, visuals and audio.
 */
class Tab extends Component {
    constructor() {
        super();
        this.state = {
            audioHund: "",
            audioKatt: "",
            audioElefant: ""
        }
        this._getAudioFile = this._getAudioFile.bind(this);

    }

    render() {
        return (
            <div>
                <h1>
                    This is a tab
                </h1>
                <AudioComponent hund={this.state.audioHund} katt={this.state.audioKatt} elefant={this.state.audioElefant}/>
                <button onClick={this._getAudioFile}>
                    Get Audio File
                </button>
                <div id="test-para">
                </div>

                <label htmlFor="username">
                    File name (audio)
                    <input type="text" id = "audio_file_name"/>
                </label>
            </div>
        )
    }

    _getAudioFile() {
        let file_name = document.getElementById("audio_file_name").value;
        if (!file_name.endsWith(".mp3")) {
            let p = document.getElementById("test-para");
            p.innerHTML = "<p>Not a valid format</p>"

        }
        let file_path = './media/audio/' + file_name;
        let myInit = { method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
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
                    console.log("Playing song.")
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
}


export default Tab;