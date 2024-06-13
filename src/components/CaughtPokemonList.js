import React from 'react';
import usePokemonStore from '../stores/pokemonStore';

const CaughtPokemonList = () => {
  const { caughtPokemon } = usePokemonStore();

  return (
    <div>
      <h3>Caught Pokemon</h3>
      <ul>
        {caughtPokemon.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};

export default CaughtPokemonList;
