import React from 'react';
import usePokemonStore from '../stores/pokemonStore';
import PokemonCard from './PokemonCard';

const CaughtPokemonList = ({ onBack }) => {
  const { caughtPokemon } = usePokemonStore();

  return (
    <div>
      <button className="back-button" onClick={onBack}>Back</button>
      <h3>Caught Pokemon</h3>
      <div className="pokemon-list">
        {caughtPokemon.map((name) => (
          <PokemonCard key={name} name={name} showRemoveButton />
        ))}
      </div>
    </div>
  );
};

export default CaughtPokemonList;
