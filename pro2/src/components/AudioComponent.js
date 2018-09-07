import React, {Component} from 'react';

/**
 * Component that plays chosen audio when one
 * presses the button on this component.
 */
class AudioComponent extends Component {
    constructor(props) {
        super(props);
        this._playSound = this._playSound.bind(this);
        this.state = {
            audioHund: "hundbjeff.wav",
            audioKatt: "",
            audioElefant: "ElefantSnabelLyd.mp3"
        }
    }

    render() {
        return (
            <div>
                <button onClick={this._playSound()}>
                    Play {this._countFiles()} sound(s)
                </button>
            </div>
        )
    }

    /**
     * Plays sound files that are stored in the
     * state. The files are played sequentially.
     * @private
     */
    _playSound() {
        // TODO: Make the audio play in the browser
        let ts = this.state;
        for (let key in ts) {
            if (ts.hasOwnProperty(key) && ts[key] !== "") {
                let file_name = ts[key];
                let audio = new Audio(file_name);
                audio.play().then(() =>
                    console.log("Playing song ${file_name}")
                );
            }
        }
    }

    /**
     * Counts the number of valid audio files
     * in the state.
     * @returns {number}
     * @private
     */
    _countFiles() {
        let count = 0;
        let ts = this.state;
        for (let key in ts) {
            // TODO: Consider making a _validFile function
            if (ts.hasOwnProperty(key) && ts[key] !== "") {
                    count++;
            }
        }
        return count;
    }

    // Better to pass data as props than to have functionality inside 'bottom'-component.
    componentDidUpdate() {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState = 4 && )
        }

    }
}

export default AudioComponent;

// TODO: place sources for .mp3 correctly.
// https://freesound.org/people/Princess6537/sounds/144885/