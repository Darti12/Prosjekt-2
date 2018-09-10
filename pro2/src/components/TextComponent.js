import React from 'react';

import axios from 'axios';

export default class TextComponent extends React.Component {
    state = {
        persons: []
    }


    componentDidMount() {
        axios.get('./Media/TextJSON/HelloWorld.json')
            .then(res => {
                const persons = res.data;
                console.log(persons);
                this.setState({persons});
            })
    }


    render() {
        return (
            <ul>
                { this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
            </ul>
        )
    }
}



