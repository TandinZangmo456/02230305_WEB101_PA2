import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import PokemonCard from '../components/PokemonCard';
import CaughtPokemonList from '../components/CaughtPokemonList';
import usePokemonStore from '../stores/pokemonStore';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [showCaught, setShowCaught] = useState(false);
  const { catchPokemon } = usePokemonStore();
  const pageSize = 20;

  const handleSearch = (query) => {
    setSearchQuery(query);
    setShowCaught(false);
  };

  const handleShowCaught = () => {
    setShowCaught(true);
  };

  const handleBack = () => {
    setShowCaught(false);
    setSearchQuery('');
  };

  const fetchPokemon = (page) => {
    const offset = (page - 1) * pageSize;
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${offset}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
        setTotalPages(Math.ceil(data.count / pageSize));
      })
      .catch((error) => console.error('Error fetching Pokémon list:', error));
  };

  useEffect(() => {
    fetchPokemon(currentPage);
  }, [currentPage]);

  return (
    <div className="app-container">
      <h1>Pokedex</h1>
      <SearchBar onSearch={handleSearch} onShowCaught={handleShowCaught} />
      {showCaught ? (
        <CaughtPokemonList onBack={handleBack} />
      ) : searchQuery ? (
        <PokemonCard name={searchQuery} />
      ) : (
        <div>
          <div className="pokemon-list">
            {pokemonList.map((pokemon) => (
              <PokemonCard key={pokemon.name} name={pokemon.name} onCatch={catchPokemon} />
            ))}
          </div>
          <div className="pagination">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
