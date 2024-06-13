import React, { useEffect, useState } from 'react';
import usePokemon from '../hooks/usePokemon';

const PokemonCard = ({ name, onCatch }) => {
  const { pokemon, loading, error } = usePokemon(name);
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    setPokemonData(pokemon);
  }, [pokemon]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!pokemonData) return null;

  return (
    <div className="pokemon-card">
      <h3>{pokemonData.name}</h3>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <p>Type: {pokemonData.types.map((type) => type.type.name).join(', ')}</p>
      <p>Abilities: {pokemonData.abilities.map((ability) => ability.ability.name).join(', ')}</p>
      <p>Stats:</p>
      <ul>
        {pokemonData.stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
      <button onClick={() => onCatch(pokemonData.name)}>Catch</button>
    </div>
  );
};

export default PokemonCard;
