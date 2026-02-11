import "./App.css";
import { getPokemons } from "./services/pokeApi";
import { useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState<any>(null);

  const [error, setError] = useState("");

  const handleSearchPokemon = async (name: string) => {
    try {
      const data = await getPokemons(name);
      setPokemon(data);
      setError("");
    } catch {
      setError("No se encontro el pokemon");
    }
  };

  return (
    <div>
      <button onClick={() => handleSearchPokemon("ditto")}>
        {" "}
        Buscando ditto
      </button>
      {error && <p> {error}</p>}
      {pokemon && <pre>{JSON.stringify(pokemon, null, 2)}</pre>}
    </div>
  );
}

export default App;
