import { useState } from "react";

function BotGame({ setScreen }) {
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

        <button
          onClick={toggleModal}
          className="bg-black p-2 rounded-2xl text-xl border-2 border-black text-red-500"
          id="forfeit-button"
        >
          Forfeit
        </button>
      </div>

      {/* Modal */}
      <div className={`overlay ${modal === false ? "hidden" : ""}`}>
        <div className="modal-content">
          <p>Are you sure you want to quit?</p>
          <div className="flex justify-center gap-30">
            <button onClick={() => setScreen("menu")}>Yes</button>
            <button onClick={toggleModal}>No</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BotGame;
