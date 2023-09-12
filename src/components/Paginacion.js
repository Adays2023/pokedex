import React from "react";

function Paginacion({ limit, totalPokemons, updatePage }) {
  const totalButtons = Math.ceil(totalPokemons / limit);
  const buttons = [];
  function createButtons() {
    for (let i = 0; i < totalButtons; i++) {
      buttons.push(
        <button key={i} value={i} className="next" onClick={updatePage}>
          {i + 1}
        </button>
      );
    }
    return buttons
  }
  return <div>{createButtons()}</div>;
}

export default Paginacion;
