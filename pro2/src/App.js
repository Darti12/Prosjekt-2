import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Authentication from './components/Authentication.js';
import WorkoutLog from './components/WorkoutLog.js';
import AudioComponent from './components/AudioComponent.js';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false
        }
        this._onAuthComplete = this._onAuthComplete.bind(this);
    }

    render() {
        return (
            <div>
                {this.state.signedIn ?
                    <WorkoutLog onLogout={this._onLogout}/> :
                    <Authentication onAuthComplete={this._onAuthComplete}/>}
                    <AudioComponent/>
            </div>
        );
      }

      _onAuthComplete(result) {
            // let the child auth component control behavior here
            if (result) {
                this.setState({
                    signedIn: true
                    }
                )
            }
      }

      _onLogout() {
        this.setState({
            signedIn: false
        });
      }
}

export default App;
