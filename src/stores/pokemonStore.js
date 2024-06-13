import create from 'zustand';

const usePokemonStore = create((set) => ({
  caughtPokemon: [],
  catchPokemon: (pokemon) =>
    set((state) => ({
      caughtPokemon: [...state.caughtPokemon, pokemon],
    })),
  removePokemon: (pokemon) =>
    set((state) => ({
      caughtPokemon: state.caughtPokemon.filter((p) => p !== pokemon),
    })),
}));

export default usePokemonStore;
