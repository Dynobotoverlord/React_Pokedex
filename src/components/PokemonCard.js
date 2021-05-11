
import React from 'react';

const PokemonCard = (props) => {
  console.log(props.id);
  return (
    <div className = 'card'>
      <h3 className = 'card_name'>{props.name}</h3>
      <img
      className='card_img'
        src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`}
      />
    </div>
  );
};

export default PokemonCard;