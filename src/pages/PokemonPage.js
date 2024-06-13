import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard';

const PokemonPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <button className="back-button" onClick={() => navigate('/')}>Back to Homepage</button>
      <PokemonCard name={name} />
    </div>
  );
};

export default PokemonPage;
