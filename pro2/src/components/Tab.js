import React, {Component} from 'react';
import AudioComponent from './AudioComponent.js';
class Tab extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>
                    This is a tab
                </h1>
                <AudioComponent/>
                <button onClick={this._getAudioFile}>
                    Get Audio File
                </button>
                <p id="test-para">
                    This is the first text
                </p>
                <audio id="audio1-com" src="" controls>
                    song song
                </audio>

            </div>
        )
    }

    _getAudioFile() {
        let other_file_dog = './media/audio/woo1.mp3';
        let myInit = { method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        };

        fetch(other_file_dog, myInit)
            .then(response => {
                return response.blob();
            })
            .then(blob => {
                let obj = URL.createObjectURL(blob);
                let audio = new Audio(obj);
                audio.play().then(() => {
                    console.log("Playing song.")
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
}

AudioComponent.propTypes = {
    audio1: "",
    audio2: "",
    audio3: ""
};

export default Tab;