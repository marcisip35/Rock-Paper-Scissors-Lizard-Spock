function PickAMove({
  selectedSkin,
  setSelectedSkin,
  selectedSkins,
  setSelectedMove,
  timeLeft,
}) {
  return (
    <div id="pickAMove">
      <p>Time:</p>
      <p className="text-4xl">{timeLeft}</p>
      <p className="text-2xl text-white">Select A Move</p>
      <ul className="flex gap-1">
        {selectedSkins.map((skin, index) => (
          <li
            className={`text-2xl bg-black p-1 rounded-xl ${selectedSkin === skin ? "selectedMove" : ""}`}
            onClick={() => {
              setSelectedMove(index);
              setSelectedSkin(skin);
            }}
            key={skin}
          >
            {skin}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PickAMove;
