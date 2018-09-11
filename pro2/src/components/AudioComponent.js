import React, {Component} from 'react';

// import dog from "../media/audio/woof1_short.mp3";

/**
 * Component that plays chosen audio when one
 * presses the button on this component.
 */
class AudioComponent extends Component {
    constructor(props) {
        super(props);
        this._playSound = this._playSound.bind(this);
        this.state = {
            audioHund: this.props.audio1,
            audioKatt: this.props.audio2,
            audioElefant: this.props.audio3
        }
    }

    render() {
        return (
            <div>
                <button onClick={this._playSound}>
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
            if (ts.hasOwnProperty(key) && ts[key] !== undefined) {
                let file_name = ts[key];
                let audio = new Audio(file_name);
                audio.play().then(() =>
                    console.log("Playing song " + file_name)
                );
            }
        }

        let audio = new Audio();
        audio.play().then(() => console.log("Playing dog"));
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
}

export default AudioComponent;

// TODO: place sources for .mp3 correctly.
// https://freesound.org/people/Princess6537/sounds/144885/