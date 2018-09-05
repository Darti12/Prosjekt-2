import React, {Component} from 'react';

/**
 * Component that plays chosen audio when one
 * presses the button on this component.
 */
class Audio extends Component {
    constructor(props) {
        super(props);
        this._playSound = this._playSound.bind(this);
    }

    render() {
        return (
            <div>
                <button onClick={this._playSound()}>
                    Play Sounds
                </button>
            </div>
        )
    }

    _playSound() {

    }

}


export default Audio;