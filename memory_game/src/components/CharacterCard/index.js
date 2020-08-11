import React from 'react';
import './style.css';

function CharacterCard(props) {
    return (
        <div className='card' onClick={() => props.chooseCharacter(props.id)}>
            <div className="img-container">
                <img alt={props.name} src={props.image} id={props.id}/>
            </div>
        </div>
    )
}

export default CharacterCard;