import { getPokemons } from "../services/pokeApi";
import SearchBar from "../components/SearchBar";

interface DetailsPokemonProps {
  setPokemon: (pokemon: any) => void;
  setError: (error: string) => void;
  pokemon: any;
}

// Funcion general de detalles pokemon
function DetailsPokemon({
  setPokemon,
  setError,
  pokemon,
}: DetailsPokemonProps) {
  //Funciond e busqueda pokemon, envio el name en forma de cadena
  const handleSearchPokemon = async (name: string) => {
    try {
      // aqui espero la data que trae la funcion getPokemon, enviando el nombre que escribi
      const data = await getPokemons(name);
      setPokemon(data);
      setError("");
    } catch {
      setPokemon(null);
      setError("No se encontro el pokemon");
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearchPokemon} />
      {pokemon && (
        <div>
          <h1>{pokemon.name.toUpperCase()}</h1>
          <p>
            <strong>Altura:</strong> {pokemon.height / 10} m
          </p>
          <p>
            <strong>Peso:</strong> {pokemon.weight / 10} kg
          </p>
          <p>
            <strong>Tipos:</strong>{" "}
            {pokemon.types.map((t: any) => t.type.name).join(", ")}
          </p>
          <p>
            <strong>Habilidades:</strong>{" "}
            {pokemon.abilities.map((a: any) => a.ability.name).join(", ")}
          </p>
          <pre>{JSON.stringify(pokemon, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
export default DetailsPokemon;
