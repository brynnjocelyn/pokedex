import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../models/pokemon";

// Define a type for the slice state
interface PokedexState {
  searchHistory: string[];
  currentPokemon: Pokemon | null;
  pokemonHistory: Pokemon[];
}

// Define the initial state
const initialState: PokedexState = {
  searchHistory: [],
  currentPokemon: null,
  pokemonHistory: [],
};

export const pokedexSlice = createSlice({
  name: "pokedex",
  initialState,
  reducers: {
    // Use the PayloadAction type to automatically infer the type of `action.payload`
    addSearchHistory: (state, action: PayloadAction<string>) => {
      // We use unshift here to add the item to the beginning of the array, but you could also push to add to the end
      state.searchHistory.unshift(action.payload);
      // To limit history to recent 10 items, you can use slice
      state.searchHistory = state.searchHistory.slice(0, 10);
    },
    setCurrentPokemon: (state, action: PayloadAction<Pokemon>) => {
      state.currentPokemon = action.payload;
      // Add the current pokemon to the history if it's not already there
      if (
        !state.pokemonHistory.some(
          (pokemon) => pokemon.id === action.payload.id
        )
      ) {
        state.pokemonHistory.unshift(action.payload);
      }
      // To limit history to recent 10 items, you can use slice
      state.pokemonHistory = state.pokemonHistory.slice(0, 10);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSearchHistory, setCurrentPokemon } = pokedexSlice.actions;

export default pokedexSlice.reducer;
