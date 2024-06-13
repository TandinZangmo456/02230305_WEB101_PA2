import React, { useState, useEffect, useRef, useCallback } from 'react';
import SearchBar from '../components/SearchBar';
import PokemonCard from '../components/PokemonCard';
import CaughtPokemonList from '../components/CaughtPokemonList';
import usePokemonStore from '../stores/pokemonStore';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pokemonList, setPokemonList] = useState([]);
  const [nextUrl, setNextUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
  const [loading, setLoading] = useState(false);
  const [showCaught, setShowCaught] = useState(false);
  const { catchPokemon } = usePokemonStore();
  const observer = useRef();

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

  const loadMorePokemon = useCallback(() => {
    if (!nextUrl) return;
    setLoading(true);
    fetch(nextUrl)
      .then((response) => response.json())
      .then((data) => {
        setPokemonList((prevList) => [...prevList, ...data.results]);
        setNextUrl(data.next);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching Pokémon list:', error);
        setLoading(false);
      });
  }, [nextUrl]);

  useEffect(() => {
    loadMorePokemon();
  }, [loadMorePokemon]);

  const lastPokemonElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMorePokemon();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, loadMorePokemon]
  );

  return (
    <div className="app-container">
      <h1>Pokedex</h1>
      <SearchBar onSearch={handleSearch} onShowCaught={handleShowCaught} />
      {showCaught ? (
        <CaughtPokemonList onBack={handleBack} />
      ) : searchQuery ? (
        <PokemonCard name={searchQuery} onCatch={catchPokemon} />
      ) : (
        <div className="pokemon-list">
          {pokemonList.map((pokemon, index) => {
            if (index === pokemonList.length - 1) {
              return (
                <PokemonCard
                  key={pokemon.name}
                  name={pokemon.name}
                  onCatch={catchPokemon}
                  ref={lastPokemonElementRef}
                />
              );
            } else {
              return <PokemonCard key={pokemon.name} name={pokemon.name} onCatch={catchPokemon} />;
            }
          })}
        </div>
      )}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default HomePage;
