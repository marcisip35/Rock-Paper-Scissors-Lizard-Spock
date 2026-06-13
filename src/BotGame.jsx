import { useState } from "react";
import GameCorner from "./GameCorner";
import PickAMove from "./PickAMove";
import ForfeitButton from "./ForfeitButton";
import ForfeitModal from "./ForfeitModal";

function BotGame({ setScreen, selectedSkins }) {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }

  return (
    <>
      <div
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed flex flex-col gap-10 items-center justify-center"
        id="botGame"
      >
        <p className="text-white text-2xl">Rock Paper Scissors Lizard Spock</p>
        <div></div>

        {/* Bot Corner */}
        <GameCorner id="botCorner" name="Bot Player" />

        {/* Player Corner */}
        <GameCorner id="playerCorner" name="Player One" />

        {/* Pick A Move */}
        <PickAMove selectedSkins={selectedSkins} />

        {/* Forfeit Button */}
        <ForfeitButton setModal={setModal} toggleModal={toggleModal} />
      </div>

      {/* Forfeit Modal */}
      <ForfeitModal
        setScreen={setScreen}
        modal={modal}
        toggleModal={toggleModal}
      />
    </>
  );
}

export default BotGame;
