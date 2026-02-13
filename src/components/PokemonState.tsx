import { useState } from "react";
import App from "../App";
import Home from "../pages/Home";

function PokemonState() {
  const [pokemon, setPokemon] = useState<any>(null);
  const [error, setError] = useState("");

  return (
    <div className="split-screen">
      <div className="left-side">
        <App setPokemon={setPokemon} setError={setError} pokemon={pokemon}/>
      </div>
      <div className="right-side">
        <Home pokemon={pokemon} error={error}/>
      </div>
    </div>
  );
}

export default PokemonState;
