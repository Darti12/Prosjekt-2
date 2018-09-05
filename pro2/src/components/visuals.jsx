import React, { Component } from 'react';

class Visuals extends Component {
    state = {
        kattebilde: '../media/images/Cat2.svg',
        hundebilde: '../images/Dog1.svg',
        elefantBilde: '../images/Elephant1.svg'

    };


    constructor() {
        super();
    }

    imageStyle = {
        width: 200,
        height: 200
    };

    render() {
        return (
            <div style={this.imageStyle}>
                <img src={this.state.kattebilde} />
            </div>
        );
    }

};

export default Visuals;