import "./App.css";
import DetailsPokemon from "./pages/PokemonDetails";
import type { AppProps } from "./interface/generalInterfaces";

function App({ setPokemon, setError, pokemon, setRegionInfo }: AppProps) {
  return <DetailsPokemon setPokemon={setPokemon} setError={setError} pokemon={pokemon} setRegionInfo={setRegionInfo} />;
}

export default App;