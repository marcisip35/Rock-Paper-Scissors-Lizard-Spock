function BotGame({ setScreen }) {
  return (
    <div>
      <p>Hello BotGame</p>
      <button onClick={() => setScreen("menu")}>Return</button>
    </div>
  );
}

export default BotGame;
