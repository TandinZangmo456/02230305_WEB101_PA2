import React, { useEffect, useState, forwardRef } from 'react';
import usePokemon from '../hooks/usePokemon';
import usePokemonStore from '../stores/pokemonStore';

const PokemonCard = forwardRef(({ name, showRemoveButton = false }, ref) => {
  const { pokemon, loading, error } = usePokemon(name);
  const { caughtPokemon, catchPokemon, removePokemon } = usePokemonStore();
  const [isCaught, setIsCaught] = useState(false);

  useEffect(() => {
    setIsCaught(caughtPokemon.includes(name));
  }, [caughtPokemon, name]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!pokemon) return null;

  return (
    <div className={`pokemon-card ${isCaught ? 'caught' : ''}`} ref={ref}>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Type: {pokemon.types.map((type) => type.type.name).join(', ')}</p>
      <p>Abilities: {pokemon.abilities.map((ability) => ability.ability.name).join(', ')}</p>
      <p>Stats:</p>
      <ul>
        {pokemon.stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
      {isCaught ? (
        <>
          <p className="caught-status">Caught</p>
          {showRemoveButton && <button onClick={() => removePokemon(name)} className="remove-button">Remove</button>}
        </>
      ) : (
        <button onClick={() => catchPokemon(name)}>Catch</button>
      )}
    </div>
  );
});

export default PokemonCard;
