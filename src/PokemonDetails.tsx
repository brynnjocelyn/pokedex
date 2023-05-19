import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import Modal from "./Modal";
import { PokemonMove } from "./models/pokemon";

const PokemonDetails: React.FC = () => {
  const [selectedMoveUrl, setSelectedMoveUrl] = useState<string | null>(null);
  const currentPokemon = useSelector(
    (state: RootState) => state.pokedex.currentPokemon
  );

  // If there's no current Pokemon, don't render the component
  if (!currentPokemon) {
    return null;
  }

  const handleClick = (url: string) => {
    setSelectedMoveUrl(url);
  };

  const handleClose = () => {
    setSelectedMoveUrl(null);
  };

  return (
    <div className="pokemonDetailsWrapper">
      <h2>Details for {currentPokemon.name}</h2>
      <div className="pokeDetails">
        <div className="pokeMovesWrapper">
          <h3>Moves</h3>
          <ul className="pokeMoves">
            {currentPokemon.moves.map((move: PokemonMove, index: number) => (
              <li key={index} onClick={() => handleClick(move.move.url)}>
                {move.move.name}
              </li>
            ))}
            {selectedMoveUrl && (
              <Modal url={selectedMoveUrl} onClose={handleClose} />
            )}
          </ul>
        </div>
        <div className="pokeStats">
          <h3>Stats</h3>
          <table className="table-stats">
            <thead>
              <tr>
                <th>Stat</th>
                <th>Base Stat</th>
              </tr>
            </thead>
            <tbody>
              {currentPokemon.stats.map(
                (
                  stat: any, // Replace `any` with actual type in real app
                  index: number
                ) => (
                  <tr key={index}>
                    <td>{stat.stat.name}</td>
                    <td>{stat.base_stat}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Similarly you can add more details like species, forms, etc. */}
    </div>
  );
};

export default PokemonDetails;
