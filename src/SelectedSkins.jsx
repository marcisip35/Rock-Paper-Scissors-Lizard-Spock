import { useState } from "react";

function SelectedSkins({ selectedSkins }) {
  return (
    <div className="flex flex-col mx-auto mt-auto">
      <p className="mx-auto">Rules:</p>
      <ul className="flex gap-5 mb-1">
        {selectedSkins.map((selectedSkin) => (
          <li
            key={selectedSkin}
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
