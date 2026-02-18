import { useState } from "react";
import App from "../App";
import Home from "../pages/Home";
import type { Pokemon, PokemonRegionInfo } from "../interface/generalInterfaces";

function PokemonState() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [error, setError] = useState("");
  const [regionInfo, setRegionInfo] = useState<PokemonRegionInfo | null>(null);

  return (
    <div className="split-screen">
      <div className="left-side">
        <App setPokemon={setPokemon} setError={setError} pokemon={pokemon} setRegionInfo={setRegionInfo} />
      </div>
      <div className="right-side">
        <Home pokemon={pokemon} error={error} regionInfo={regionInfo} />
      </div>
    </div>
  );
}

export default PokemonState;
