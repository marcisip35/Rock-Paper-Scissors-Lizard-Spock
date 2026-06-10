function OnlineGame({ setScreen }) {
  return (
    <div>
      <p>Hello OnlineGame</p>
      <button onClick={() => setScreen("menu")}>Return</button>
    </div>
  );
}

export default OnlineGame;
