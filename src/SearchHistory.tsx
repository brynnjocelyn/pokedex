import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import axios from "axios";
import { setCurrentPokemon } from "./redux/pokedexSlice";

const SearchHistory: React.FC = () => {
  const dispatch = useDispatch();
  const searchHistory = useSelector(
    (state: RootState) => state.pokedex.searchHistory
  );
  const pokemonHistory = useSelector(
    (state: RootState) => state.pokedex.pokemonHistory
  );

  const fetchPokemon = async (pokemonName: string) => {
    const pokemonFromHistory = pokemonHistory.find(
      (pokemon) => pokemon.name === pokemonName
    );
    if (pokemonFromHistory) {
      dispatch(setCurrentPokemon(pokemonFromHistory));
      return;
    }

    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      dispatch(setCurrentPokemon(res.data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="searchHistory">
      <h3>Search History</h3>
      <ul className="searchHistoryList">
        {searchHistory.map((pokemon, index) => (
          <li key={index} onClick={() => fetchPokemon(pokemon)}>
            {pokemon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
