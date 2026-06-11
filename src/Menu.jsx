import { useState } from "react";
import BotGame from "./BotGame";
import OnlineGame from "./OnlineGame";

function Menu({ skinOptions, selectedSkins, setSelectedSkins }) {
  const [screen, setScreen] = useState("menu"); /* state for menu selection */

  /* Skins Selection Screen */
  if (screen === "skins") {
    return (
      <div className="w-xl flex flex-col gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed">
        <p className="text-4xl text-white mx-auto">Select Your Skin Tone</p>
        <ul className="flex flex-col gap-5">
          {/* displays skin names*/}
          {skinOptions.map((option) => (
            <li
              key={option.name}
              onClick={() => setSelectedSkins(option.skins)}
              className={`selectSkin flex justify-between text-2xl cursor-pointer p-3 rounded-xl 
                ${selectedSkins === option.skins ? "bg-white/20" : ""}`}
            >
              {/* conditional styling - checks if the selectedSkins array is the same as the selected options skins array */}
              <span>{option.name}</span>

              {/* display skin options*/}
              <ul className="flex gap-5">
                {option.skins.map((skin) => (
                  <li key={skin} className="bg-black p-1 rounded-xl">
                    {skin}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        {/* return to menu */}
        <button
          onClick={() => setScreen("menu")}
          className="bg-black p-3 text-white rounded-xl"
        >
          ⬅️ Return
        </button>
      </div>
    );

    /* Play Against A Bot */
  } else if (screen === "bot") {
    return <BotGame setScreen={setScreen} selectedSkins={selectedSkins} />;

    /* Play Against A Real Player */
  } else if (screen === "online") {
    return <OnlineGame setScreen={setScreen} />;

    /* Menu Screen */
  } else {
    return (
      <div className="menu top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed flex flex-col gap-10 items-center justify-center">
        <h1 className="text-7xl font-bold text-center">
          Rock Paper Scissors Lizard Spock
        </h1>
        <button onClick={() => setScreen("bot")}>🤖 Play Against A Bot</button>
        <button onClick={() => setScreen("online")}>
          👤 Play Against A Real Player
        </button>
        <button onClick={() => setScreen("skins")}>👊🏽 Select Your Skins</button>
      </div>
    );
  }
}

export default Menu;
