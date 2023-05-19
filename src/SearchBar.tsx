import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addSearchHistory, setCurrentPokemon } from "./redux/pokedexSlice";
import { Pokemon } from "./models/pokemon";

const SearchBar: React.FC = () => {
  console.log("axios", axios);

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const fetchData = async (pokemonName: string) => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      dispatch(setCurrentPokemon(res.data as Pokemon));
      dispatch(addSearchHistory(pokemonName));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData(input.toLowerCase());
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="searchBar">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for a Pokemon"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
