import React, { Component } from 'react';
import Card from './card';
import CardFront1 from './images/card-front-01.png';
import CardFront2 from './images/card-front-02.png';
import CardFront3 from './images/card-front-03.png';
import CardFront4 from './images/card-front-04.png';
import CardFront5 from './images/card-front-05.png';
import CardFront6 from './images/card-front-06.png';
import CardFront7 from './images/card-front-07.png';
import CardFront8 from './images/card-front-08.png';
import CardFront9 from './images/card-front-09.png';

let cardNames = [
    'card-front-01',
    'card-front-02',
    'card-front-03',
    'card-front-04',
    'card-front-05',
    'card-front-06',
    'card-front-07',
    'card-front-08',
    'card-front-09',

    'card-front-01',
    'card-front-02',
    'card-front-03',
    'card-front-04',
    'card-front-05',
    'card-front-06',
    'card-front-07',
    'card-front-08',
    'card-front-09'
];

class GameArea extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cardArray: [
                // { image: 'CardFront1', out_of_gameplay: false },
                // { image: 'CardFront2', out_of_gameplay: false },
                // { image: 'CardFront3', out_of_gameplay: false },
                // { image: 'CardFront4', out_of_gameplay: false },
                // { image: 'CardFront5', out_of_gameplay: false },
                // { image: 'CardFront6', out_of_gameplay: false },
                // { image: 'CardFront7', out_of_gameplay: false },
                // { image: 'CardFront8', out_of_gameplay: false },
                // { image: 'CardFront9', out_of_gameplay: false },
                //
                // { image: 'CardFront1', out_of_gameplay: false },
                // { image: 'CardFront2', out_of_gameplay: false },
                // { image: 'CardFront3', out_of_gameplay: false },
                // { image: 'CardFront4', out_of_gameplay: false },
                // { image: 'CardFront5', out_of_gameplay: false },
                // { image: 'CardFront6', out_of_gameplay: false },
                // { image: 'CardFront7', out_of_gameplay: false },
                // { image: 'CardFront8', out_of_gameplay: false },
                // { image: 'CardFront9', out_of_gameplay: false }
            ]
        };
    }

    randomizeCardArray () {

        let randomizedCardNames = [];

        console.log('cardNames:', cardNames);

        // randomize the card names
        for (let i = 0; i < 18; i++) {
            let random_position = Math.floor(Math.random() * (cardNames.length));
            randomizedCardNames.push(cardNames.splice(random_position, 1)[0]);
        }

        cardNames = randomizedCardNames;
    }

    render () {

        // take the randomized array of 18 cards and build out an array of react/dom elements
        this.randomizeCardArray();

        const card = cardNames.map((item, index)=>{
            return (
                <Card src={item} />
            )
        });


        return (
            <section id="game-area">

                { card }

            </section>
        )
    }
}

export default GameArea;