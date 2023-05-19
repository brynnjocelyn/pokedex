import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import Modal from "./Modal";

const PokemonDisplay: React.FC = () => {
  const [selectedAbilityUrl, setSelectedAbilityUrl] = useState<string | null>(
    null
  );

  const currentPokemon = useSelector(
    (state: RootState) => state.pokedex.currentPokemon
  );

  // if there's no current Pokemon, don't render the component
  if (!currentPokemon) {
    return null;
  }

  const handleClick = (url: string) => {
    setSelectedAbilityUrl(url);
  };

  const handleClose = () => {
    setSelectedAbilityUrl(null);
  };

  return (
    <div className="pokemonDisplay">
      <h2>{currentPokemon.name}</h2>
      <img
        src={currentPokemon.sprites.front_default}
        alt={currentPokemon.name}
      />
      <h3>Abilities</h3>
      <ul className="pokeAbilities">
        {currentPokemon.abilities.map(
          (
            ability: any,
            index: number // Replace `any` with actual type in real app
          ) => (
            <li key={index} onClick={() => handleClick(ability.ability.url)}>
              {ability.ability.name}
            </li>
          )
        )}
        {selectedAbilityUrl && (
          <Modal url={selectedAbilityUrl} onClose={handleClose} />
        )}
      </ul>
      {/* Similarly you can add more details like types, weight, etc. */}
    </div>
  );
};

export default PokemonDisplay;
