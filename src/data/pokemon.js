const Url = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemons = () => {
    return fetch(Url).then((Response)=>Response.json());
};