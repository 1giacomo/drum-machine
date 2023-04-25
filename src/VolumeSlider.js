import { useState } from "react";
import PreferencesContext from "./PreferencesContext.js";
import { useContext } from "react";

function VolumeSlider() {
  const settingsInfo = useContext(PreferencesContext);

  return (
    <div>
      <input
        className="w-50"
        type="range"
        step="0.01"
        onChange={(e) => settingsInfo.setVolume(e.target.value)}
        value={settingsInfo.volume}
        max="1"
        min="0"
      />
    </div>
  );
}

export default VolumeSlider;
