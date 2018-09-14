import React from 'react';

import axios from 'axios';



export default class TextComponent extends React.Component {

    /**
     * Setter start staten av textComponent til å ha en tom dikttabell og en null diktId, samt arrayene som skal holde kategoriene og dere dikt.
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            dikt: [],
            selecetionNumber: 1,
            kategoriDikt: "hund"
        };

    }

    /**
     * Henter inn JSON filen med diktene våre og setter dikt arrayen til å holde på det ene dikten som blir valgt
     */
    componentDidMount() {

        axios.get('./media/TextJSON/'+this.state.kategoriDikt
        +'Dikt.json')
            .then(res => {
                const poemData = res.data.slice(this.state.selecetionNumber-1, this.state.selecetionNumber);
                this.setState({dikt: poemData});
            });

    }

    render() {

        return (
                <React.Fragment>
                {this.state.dikt.map(poem => {
                        return poem.id === this.state.selecetionNumber ?
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