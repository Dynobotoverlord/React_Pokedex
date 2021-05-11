import React, {useState,useEffect, Component } from 'react';
import {getPokemons} from '../data/pokemon'
import PokemonCard from './PokemonCard'


const PokemonData = () => {
const [pokemons, setPokemons] = useState([]);

useEffect(() => {
  getPokemons().then((data) => {
    setPokemons(data);
  });
}, []);

return (
  <div>
    <div className='cards'>
      {Object.entries(pokemons)[3] &&
        Object.entries(pokemons)[3][1].map((pokemon, index) => {
          return <PokemonCard key={index} {...pokemon} id={index + 1} />;
        })}
    </div>
  </div>
);
};

  
  export default PokemonData;