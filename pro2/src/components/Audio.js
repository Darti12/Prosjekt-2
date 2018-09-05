import React, {Component} from 'react';

/**
 * Component that plays chosen audio when one
 * presses the button on this component.
 */
class Audio extends Component {
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
        for (let i = 0; i < this.state.length ; i++) {
            let audio_file = this.state[i];
            if (audio_file !== "") {
                let audio = new Audio(audio_file);
                audio.play();
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
            if (ts.hasOwnProperty(key) && ts[key] !== "") {
                    count++;
            }
        }
        return count;
    }



}

export default Audio;