import create from 'zustand';

const usePokemonStore = create((set) => ({
  caughtPokemon: [],
  catchPokemon: (pokemon) =>
    set((state) => ({
      caughtPokemon: [...state.caughtPokemon, pokemon],
    })),
}));

export default usePokemonStore;
