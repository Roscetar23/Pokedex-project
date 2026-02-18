import { useState } from "react";
import { getPokemons, getWeaknesses, getEvolutionChain, getRegionInfo } from "../services/pokeApi";
import SearchBar from "../components/SearchBar";
import PokemonInfo from "../components/PokemonInfo";
import type { DetailsPokemonProps, EvolutionChainItem } from "../interface/generalInterfaces";

function DetailsPokemon({
  setPokemon,
  setError,
  pokemon,
  setRegionInfo,
}: DetailsPokemonProps) {
  const [weaknesses, setWeaknesses] = useState<string[]>([]);
  const [evolutionChain, setEvolutionChain] = useState<EvolutionChainItem[]>([]);

  const handleSearchPokemon = async (name: string) => {
    try {
      const data = await getPokemons(name);
      setPokemon(data);
      setError("");

      // Obtener debilidades
      const weak = await getWeaknesses(data.types);
      setWeaknesses(weak);
      
      // Obtener evoluciones
      const evolutions = await getEvolutionChain(data.species.url);
      setEvolutionChain(evolutions);

      // Obtener información de región
      const region = await getRegionInfo(data.species.url);
      setRegionInfo(region);
      
    } catch {
      setPokemon(null);
      setError("No se encontró el pokemon");
      setRegionInfo(null);
    }
  };

  // Función para manejar click en evolución
  const handleEvolutionClick = (evolutionName: string) => {
    handleSearchPokemon(evolutionName);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearchPokemon} />
      {pokemon && (
        <PokemonInfo 
          pokemon={pokemon}
          weaknesses={weaknesses}
          evolutionChain={evolutionChain}
          onEvolutionClick={handleEvolutionClick}
        />
      )}
    </div>
  );
}

export default DetailsPokemon;