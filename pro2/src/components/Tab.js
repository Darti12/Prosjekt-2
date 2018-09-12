import React, {Component} from 'react';
import AudioComponent from './AudioComponent.js';


/**
 * Tab component that takes care of text, visuals and audio.
 */
class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            audio: "",
            visual: "",
            text: ""
        };
        this._getAudioFile = this._getAudioFile.bind(this);
    }

    render() {
        return (
            <div>
                <h1>
                    {this.props.name}
                </h1>
                <AudioComponent audio={this.audio}/>
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
        let p = document.getElementById("test-para");

        if (!file_name.endsWith(".mp3")) {
            p.innerText = "Not a valid format";
            return;
        }
        p.innerText = "Finding song: " + file_name;

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
                     audio: obj
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