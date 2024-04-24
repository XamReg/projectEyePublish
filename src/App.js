import "./App.css";
import { MaintTitle } from "./components/MaintTitle";
import { CheckMaind } from "./components/CheckMaind";
import { EyeStructure } from "./components/EyeStructure";
import { Graphics } from "./components/Graphics";
// import { EyeStructure } from "./EyeStructure";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <MaintTitle />
      <CheckMaind />
      <EyeStructure />
      <Graphics />
    </>
  );
}

export default App;
