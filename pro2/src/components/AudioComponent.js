import React, {Component} from 'react';

/**
 * Component that plays chosen audio when one
 * presses the button on this component.
 */
class AudioComponent extends Component {
    constructor(props) {
        super(props);
        this._playSound = this._playSound.bind(this);
    }

    render() {
        return (
            <div>
                <button onClick={this._playSound}>
                    Play sound
                </button>
                <div>
                    <p id="test-para" >

                    </p>
                </div>
                <label htmlFor="username">
                    File name (audio)
                    <input type="text" id ="audio_file_name" defaultValue="cat_meow1.mp3"/>
                </label>
            </div>
        )
    }

    /**
     * Plays sound files that are stored in the
     * state. The files are played sequentially.
     * @private
     */
    _playSound() {
        let input_file = document.getElementById("audio_file_name").value;
        let p = document.getElementById("test-para");

        if (!input_file.endsWith(".mp3")) {
            p.innerText = "Not a valid format";
            return;
        }
        this.props.getAudioFile(input_file);

        let current_audio = this.props.audio;

        p.innerText = "Looking for sound: " + input_file;
        if (input_file === current_audio.name) {
            p.innerText = "File already selected";
            return;
        }
        console.log("Right beforeplaying: " + current_audio.file.toString());
        let audio_player = new Audio(current_audio.file);
        audio_player.play().then(() => {
            p.innerText = "Playing sound: " + input_file;
        })
    }
}

//TODO: remove console.logs


export default AudioComponent;

// TODO: place sources for .mp3 correctly.

// Dogs
// https://freesound.org/people/Princess6537/sounds/144885/
// https://freesound.org/people/arightwizard/sounds/253754/
// https://freesound.org/people/rhostik/sounds/220904/
// https://freesound.org/people/CGEffex/sounds/85664/

// Cats
// https://freesound.org/people/spacether/sounds/385892/
// https://freesound.org/people/josepharaoh99/sounds/362953/
// https://freesound.org/people/vlcikamen/sounds/362327/
// https://freesound.org/people/sonsdebarcelona/sounds/187815/

// Elephant
// http://soundbible.com/1140-Elephant.html
// http://soundbible.com/1136-Elephant-Trumpeting.html
