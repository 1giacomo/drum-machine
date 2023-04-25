import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import DrumMachine from "./DrumMachine.js";
import PreferencesContext from "./PreferencesContext.js";
import VolumeSlider from "./VolumeSlider.js";
import { useState } from "react";

function App() {
  const [volume, setVolume] = useState(1);

  return (
    <div>
      <PreferencesContext.Provider value={{ volume, setVolume }}>
        <DrumMachine />
        <VolumeSlider />
      </PreferencesContext.Provider>
    </div>
  );
}

export default App;
