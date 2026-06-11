function PickAMove({ selectedSkins }) {
  return (
    <div id="pickAMove">
      <p className="text-2xl text-white">Select A Move</p>
      <ul className="flex gap-1">
        {selectedSkins.map((skin) => (
          <li className="text-2xl bg-black p-1 rounded-xl" key={skin}>
            {skin}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PickAMove;
