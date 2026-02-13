import "./App.css";
import DetailsPokemon from "./pages/PokemonDetails";
interface AppProps {
  setPokemon: (pokemon: any) => void;
  setError: (error: string) => void;
  pokemon: any;
}

function App({ setPokemon, setError, pokemon }: AppProps) {
  return <DetailsPokemon setPokemon={setPokemon} setError={setError} pokemon={pokemon}/>;
}

export default App;