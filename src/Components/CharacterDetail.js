import React from 'react';

const CharacterDetail = (props) => {
  if(!props.character) {
    return null;
  }
  return (
  <div className="character-detail">
    <h3>Character Name: {props.character.name}</h3>
    <h4>House Name: {props.character.house}</h4>
    <h4>Portrayed by the Actor: {props.character.actor}</h4>
    <img src={props.character.image}></img>
  </div>
  )
}

export default CharacterDetail;