import React from 'react';
import { useParams } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard';
import usePokemonStore from '../stores/pokemonStore';

const PokemonPage = () => {
  const { name } = useParams();
  const { catchPokemon } = usePokemonStore();

  return (
    <div>
      <PokemonCard name={name} onCatch={catchPokemon} />
    </div>
  );
};

export default PokemonPage;
