import { useState } from "react";

function GameCorner({ id, name }) {
  return (
    <div className="gameCorners" id={id}>
      <p>{name}</p>
      <span>👊</span>
      <ul className="flex gap-5">
        <li>W</li>
        <li>L</li>
        <li>W</li>
      </ul>
    </div>
  );
}

export default GameCorner;
