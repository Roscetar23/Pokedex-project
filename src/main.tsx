import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import PokemonState from "./components/PokemonState";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PokemonState/> 
  </StrictMode>
);
