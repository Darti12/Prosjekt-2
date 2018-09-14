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
            audio: {
                name: "",
                file: {}
            },
            visual: "",
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
                <h1>
                    {this.props.name}
                </h1>
                <AudioComponent audio={this.state.audio} getAudioFile={this._getAudioFile}/>
                <TextComponent />
            </div>
        )
    }

  _getAudioFile(file_name) {
        if (file_name === this.state.audio.name){
            console.log("Name equal");
            return;
        }
        let file_path = './media/audio/' + file_name;
        let myInit = {
            method: 'GET',
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
                let a = new Audio(obj);
                this.setState({
                    audio: {
                        name: file_name,
                        file: a
                    }
                });

                console.log("Changed state audio to: " + obj.toString());
                return true;
            })
            .catch(error => {
                console.log(error);
                return false;
            })
    }
}
export default Tab;
