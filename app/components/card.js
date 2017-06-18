import React, { Component } from 'react';
import CardBack from './images/card-back.png';


class Card extends Component {



    render () {
        return (
            <div className="card">
                <div className="front">
                    <img src={require(`./images/${this.props.src}.png`)} alt="" />
                </div>
                <div className="back">
                    <img src={CardBack} alt="" />
                </div>
            </div>
        )
    }
}

export default Card;
