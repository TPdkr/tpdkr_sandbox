import React from "react";
import ReactDOM from "react-dom/client";
import RetroButton from "./components/RetroButton";
import FlatRetroButton from "./components/FlatRetroButton";
import Window from "./components/Window";
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RetroButton content={"button text"}></RetroButton>
    <FlatRetroButton content={"another button"} />
    <button>not included button</button>
    <Window content={<h1>Hello this is a window</h1>} />
  </React.StrictMode>
);
