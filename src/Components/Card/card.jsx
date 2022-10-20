import React from 'react';
import './card.scss';

function Card(props) {
    return (
        <div className='card'>
            {/* <img src={props.image} alt={props.imageAlt}></img> */}
            <h2>{props.title}</h2>
        </div>
    )
}

export default Card;