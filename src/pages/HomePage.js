import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import PokemonCard from '../components/PokemonCard';
import CaughtPokemonList from '../components/CaughtPokemonList';
import usePokemonStore from '../stores/pokemonStore';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pokemonList, setPokemonList] = useState([]);
  const { catchPokemon } = usePokemonStore();

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
      })
      .catch((error) => console.error('Error fetching Pokémon list:', error));
  }, []);

  return (
    <div>
      <h1>Pokedex</h1>
      <SearchBar onSearch={handleSearch} />
      {searchQuery ? (
        <PokemonCard name={searchQuery} onCatch={catchPokemon} />
      ) : (
        <div className="pokemon-list">
          {pokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.name} name={pokemon.name} onCatch={catchPokemon} />
          ))}
        </div>
      )}
      <CaughtPokemonList />
    </div>
  );
};

export default HomePage;
