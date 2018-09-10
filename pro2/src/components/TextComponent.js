import React from 'react';

import axios from 'axios';

export default class TextComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dikt: [],
            diktID: null
        };

    }


    componentDidMount() {
        axios.get('./Media/TextJSON/HelloWorld.json')
            .then(res => {
                const poemData = res.data;
                this.setState({dikt: poemData});
            })
    }
    catState(){
        this.setState({
            diktID: Math.round(Math.random()*4)
        });
    }

    dogState(){
        this.setState({
            diktID: Math.round(Math.random()*4+4)
        });
    }
    elephantState(){
        this.setState({
            diktID: Math.round(Math.random()*4+8)
        });
    }
    render() {

        return (
            /*<div className={"diktTekst"}>
                <p className={"diktTittel"}> {this.state.dikt[0]["id"]}
                </p>
            </div>*/
                <React.Fragment>
                {this.state.dikt.map(poem => {
                        return poem.id === this.state.diktID ?
                            <div key={poem.id} className={"diktTekst"}>
                            <p className={"diktTittel"} >{poem.tittel}</p>
                            <p>{poem.firstLine}</p>
                            <p>{poem.secondLine}</p>
                            <p>{poem.thirdLine}</p>
                            </div>
                            :
                            null
                    }
                )
                }
                </React.Fragment>
        )
    }
}