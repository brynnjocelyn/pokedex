// Modal.tsx

import React, { useState, useEffect } from "react";
import { Ability } from "./models/ability";
import "./Modal.scss";
import { AbilityEffectEntry } from "./models/ability";
import { Move } from "./models/move";

interface Props {
  url: string;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ url, onClose }) => {
  const [ability, setAbility] = useState<Ability | Move | null>(null);

  console.log("ability", ability);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAbility(data));
  }, [url]);

  const handleClose = () => {
    onClose();
    setAbility(null);
  };

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <h2>{ability?.name}</h2>
          {/* Display additional information about ability here */}
          {ability?.effect_entries
            .filter((entry) => entry.language.name === "en")
            .map((entry: AbilityEffectEntry, index: number) => (
              <p key={index}>{entry.effect}</p>
            ))}

          <div className="moveInfo">
            <span>
              {(ability as Move) && (ability as Move).accuracy
                ? `Accuracy: ${(ability as Move).accuracy}`
                : ""}
            </span>
            <span>
              {(ability as Move) && (ability as Move).power
                ? `Power: ${(ability as Move).power}`
                : ""}
            </span>
            <span>
              {(ability as Move) && (ability as Move).pp
                ? `Power Points: ${(ability as Move).pp}`
                : ""}
            </span>
          </div>
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
