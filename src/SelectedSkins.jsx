import { useState } from "react";

function SelectedSkins({ selectedSkins, moveRules }) {
  return (
    <div className="flex flex-col mx-auto mt-auto">
      <p className="mx-auto text-white">Hover over moves</p>
      <ul className="flex gap-5 mb-1">
        {selectedSkins.map((selectedSkin, move) => (
          <li
            key={selectedSkin}
            title={moveRules[move]}
            className="bg-black p-1 opacity-90 rounded-xl text-1xl"
          >
            {selectedSkin}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectedSkins;
