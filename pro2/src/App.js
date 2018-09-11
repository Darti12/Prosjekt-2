import React, { Component } from 'react';
import './App.css';

// components
import Tab from './components/Tab.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false
        };
        this._onAuthComplete = this._onAuthComplete.bind(this);
    }

    render() {
        return (
            <div>
                <Tab/>
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
