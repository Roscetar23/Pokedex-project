import { useState } from "react";
import { getPokemons } from "../services/pokeApi";
import SearchBar from "../components/SearchBar";
import type { DetailsPokemonProps } from "../interface/generalInterfaces";
import { getWeaknesses } from "../services/pokeApi";
import { getEvolutionChain } from "../services/pokeApi";

function DetailsPokemon({
  setPokemon,
  setError,
  pokemon,
}: DetailsPokemonProps) {
  const [weaknesses, setWeaknesses] = useState<string[]>([]);
  const [evolutionChain, setEvolutionChain] = useState<any[]>([]);

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
      
    } catch {
      setPokemon(null);
      setError("No se encontró el pokemon");
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
            <strong>Debilidades:</strong>{" "}
            {weaknesses.length > 0 ? weaknesses.join(", ") : "Cargando..."}
          </p>
          
          <p>
            <strong>Habilidades:</strong>{" "}
            {pokemon.abilities.map((a: any) => a.ability.name).join(", ")}
          </p>
          
          <p>
            <strong>Número en pokédex:</strong> {pokemon.id}
          </p>
          
          <div>
            <strong>Cadena evolutiva:</strong>
            {evolutionChain.length > 0 ? (
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                {evolutionChain.map((evo, index) => (
                  <span key={evo.name}>
                    {evo.name}
                    {index < evolutionChain.length - 1 && " → "}
                  </span>
                ))}
              </div>
            ) : (
              <span> Cargando...</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailsPokemon;