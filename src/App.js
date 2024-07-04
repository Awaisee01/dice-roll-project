import "./App.css";
import "@fontsource/poppins";
import GamePage from "./components/GamePage";
import StartGame from "./components/StartGame";
import { useState } from "react";

function App() {
  const [isGameStart, setIsGameStart] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStart((pev) => !pev);
  };

  return (
    <>
      {isGameStart ? <GamePage /> : <StartGame toggle={toggleGamePlay} />}

      {/* <StartGame/>
    <GamePage/> */}
    </>
  );
}

export default App;
