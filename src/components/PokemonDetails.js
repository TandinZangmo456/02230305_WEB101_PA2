import React, { useState, useEffect } from 'react';

const PokemonDetails = ({ name }) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (name) {
      setLoading(true);
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => response.json())
        .then((data) => {
          setPokemon(data);
          setLoading(false);
        })
        .catch((error) => {
          setError('Pokemon not found');
          setLoading(false);
        });
    }
  }, [name]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!pokemon) return null;

  return (
    <div>
      <h2>{pokemon.name}</h2>
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
    </div>
  );
};

export default PokemonDetails;
