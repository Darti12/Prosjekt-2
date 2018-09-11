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
            diktID: null,
            hundeState: [],
            katteState: [],
            elefantState: []

        };

    }

    /**
     * Henter inn JSON filen med diktene våre og setter dikt arrayen til å holde på disse
     */
    componentDidMount() {
        axios.get('./media/TextJSON/HelloWorld.json')
            .then(res => {
                const poemData = res.data;
                this.setState({dikt: poemData});
            });
        this.elephantState();
        this.elephantState();
        this.elephantState();
        this.elephantState();
    }

    /**
     * catState er en hjelpefunksjon for å hente inn en tabell for rekkefølgen, uten gjenvalg på hvilket jsonText objekt som skal leses inn
     * i selve textComponenten
     */
    catState(){
        let index = Math.round(Math.random()*4+0.5);
        if (this.state.katteState.indexOf(index) === -1){
            this.setState({
                diktID: index,
                katteState: this.state.katteState.push(index)
            });
        }
        else{
            if (this.state.katteState.length === 4){
            }
            else{
                this.catState()
            }
        }
    }
    /**
     * dogState er en hjelpefunksjon for å hente inn en tabell for rekkefølgen, uten gjenvalg på hvilket jsonText objekt som skal leses inn
     * i selve textComponenten
     */
    dogState(){
        let index = Math.round(Math.random()*4 +4.5);
        if (this.state.hundeState.indexOf(index) === -1){
            this.setState({
                diktID: index,
                hundeState: this.state.hundeState.push(index)
            });
        }
        else{

            if (this.state.hundeState.length === 4){
            }
            else{
                this.dogState()
            }
        }
    }

    /**
     * elePhantState er en hjelpefunksjon for å hente inn en tabell for rekkefølgen, uten gjenvalg på hvilket jsonText objekt som skal leses inn
     * i selve textComponenten
     */
    elephantState(){
        let index = Math.round(Math.random()*4 +8.5);
        if (this.state.elefantState.indexOf(index) === -1){
            this.setState({
                diktID: index,
                elefantState: this.state.elefantState.push(index)
            });
        }
        else{
            if (this.state.elefantState.length === 4){
            }
            else{
                this.elephantState()
            }
        }
    }

    /**
     * Henter ut resultatet fra axios kallet og itererer gjennom alle alternativene helt til den som stemmer overens med diktId
     * er valgt. SÅ skriver den ut diktet.
     */
    render() {

        return (
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