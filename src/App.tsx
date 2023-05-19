import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import SearchBar from "./SearchBar";
import SearchHistory from "./SearchHistory";
import PokemonDisplay from "./PokemonDisplay";
import PokemonDetails from "./PokemonDetails";
import "./App.scss";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <SearchHistory data-testid="SearchHistory" />
        <SearchBar data-testid="SearchBar" />
        <PokemonDisplay data-testid="PokemonDisplay" />
        <PokemonDetails data-testid="PokemonDetails" />
      </div>
    </Provider>
  );
};

export default App;
