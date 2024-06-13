import { useState, useEffect } from 'react';

const usePokemon = (name) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (name) {
      setLoading(true);
      setError(null);
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

  return { pokemon, loading, error };
};

export default usePokemon;
