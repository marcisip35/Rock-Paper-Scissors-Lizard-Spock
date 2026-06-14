import { useState, useEffect } from "react";
import GameCorner from "./GameCorner";
import PickAMove from "./PickAMove";
import ForfeitButton from "./ForfeitButton";
import ForfeitModal from "./ForfeitModal";
import ResultMessage from "./ResultMessage";

function BotGame({ setScreen, selectedSkins }) {
  const [modal, setModal] = useState(false);
  /* Display the selected skin */
  const [selectedSkin, setSelectedSkin] = useState(selectedSkins[0]);
  /* Saves the selected move */
  const [selectedMove, setSelectedMove] = useState(0);
  /* Timer */
  const [timeLeft, setTimeLeft] = useState(4);
  useEffect(() => {
    if (timeLeft === 0) {
      console.log(`The player has played ${selectedMove}.`);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

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
        {/* Result Message */}
        <ResultMessage outcome={"You Won"} />

        {/* Bot Corner */}
        <GameCorner id="botCorner" name="Bot Player" />

        {/* Player Corner */}
        <GameCorner id="playerCorner" name="Player One" />

        {/* Pick A Move */}
        <PickAMove
          selectedSkin={selectedSkin}
          setSelectedSkin={setSelectedSkin}
          selectedSkins={selectedSkins}
          setSelectedMove={setSelectedMove}
          timeLeft={timeLeft}
        />

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
