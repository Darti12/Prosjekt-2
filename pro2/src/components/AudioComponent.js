import React, {Component} from 'react';


/**
 * Component that plays chosen audio when one
 * presses the button on this component.
 */
class AudioComponent extends Component {
    constructor(props) {
        super(props);
        this._playSound = this._playSound.bind(this);
        this._countFiles = this._countFiles.bind(this);
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
        let ts = this.props;
        for (let key in ts) {
                if (ts.hasOwnProperty(key) && ts[key] !== "") {
                    let obj = ts[key];
                    let audio = new Audio(obj);
                    audio.play().then(() => {
                        console.log("Playing song inside loop" )
                        console.log(key);
                    });
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
        let ts = this.props;
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
// https://freesound.org/people/arightwizard/sounds/253754/
// https://freesound.org/people/rhostik/sounds/220904/
// https://freesound.org/people/CGEffex/sounds/85664/