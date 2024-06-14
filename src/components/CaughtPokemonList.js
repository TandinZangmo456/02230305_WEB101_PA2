import React, { useState } from 'react';
import usePokemonStore from '../stores/pokemonStore';
import PokemonCard from './PokemonCard';

const CaughtPokemonList = ({ onBack }) => {
  const { caughtPokemon } = usePokemonStore();
  const pageSize = 20;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(caughtPokemon.length / pageSize);
  const startIdx = (currentPage - 1) * pageSize;
  const currentCaughtPokemon = caughtPokemon.slice(startIdx, startIdx + pageSize);

  return (
    <div>
      <button className="back-button" onClick={onBack}>Back</button>
      <h3>Caught Pokemon</h3>
      <div className="pokemon-list">
        {currentCaughtPokemon.map((name) => (
          <PokemonCard key={name} name={name} showRemoveButton />
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
  );
};

export default CaughtPokemonList;
