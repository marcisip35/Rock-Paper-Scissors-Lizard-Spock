/*
[] Menu selection
[] Display icons/emojis as options
[] Player needs to be able to select one option
[] Bot needs to be able to make a selection
[] Determine the winner => Display the winner
[] Be able to queue up and play with players online
*/

import "./App.css";
import { useState } from "react";
import Menu from "./Menu";
import SelectedSkins from "./SelectedSkins";
import PrivacyPolicy from "./PrivacyPolicy";

const skinOptions = [
  {
    name: "Default",
    skins: ["🖐️", "✌️", "👊", "🦎", "🖖"],
  },
  {
    name: "Light Skin",
    skins: ["✋🏻", "✌🏻", "👊🏻", "🦖", "🖖🏻"],
  },
  {
    name: "Medium Skin",
    skins: ["✋🏼", "✌🏼", "👊🏼", "🦕", "🖖🏼"],
  },
  {
    name: "Dark Skin",
    skins: ["✋🏾", "✌🏾", "👊🏾", "🐊", "🖖🏾"],
  },
];

function App() {
  /* state for selected skins */
  const [selectedSkins, setSelectedSkins] = useState(skinOptions[0].skins);

  return (
    <div className="flex flex-col justify-center align-center h-full">
      <Menu
        skinOptions={skinOptions}
        selectedSkins={selectedSkins}
        setSelectedSkins={setSelectedSkins}
      />
      <SelectedSkins selectedSkins={selectedSkins} />
      <PrivacyPolicy />
    </div>
  );
}

export default App;
