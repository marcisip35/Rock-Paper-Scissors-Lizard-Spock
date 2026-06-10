function BotGame({ setScreen }) {
  return (
    <div className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed flex flex-col gap-10 items-center justify-center">
      <p>Rock Paper Scissors Lizard Spock</p>
      <button
        onClick={() => setScreen("menu")}
        className="bg-red-400 p-4 rounded-2xl text-2xl"
      >
        Forfeit
      </button>
    </div>
  );
}

export default BotGame;
