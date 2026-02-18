import type { Pokemon, EvolutionChainItem, PokemonRegionInfo } from "../interface/generalInterfaces";

const API_URL = import.meta.env.VITE_API_GENERAL;

//Funcion Para traer los datos del pokemon
export async function getPokemons(pokemon: string): Promise<Pokemon> {
  try {
    // Apartado que trae la informacion de la url
    const res = await fetch(`${API_URL}/pokemon/${pokemon}`);
    // Error por si no se encuentra el pokemon
    if (!res.ok) {
      throw new Error("No se encontro al pokemon");
    }
    //Devolucion de la data
    const data: Pokemon = await res.json();
    return data;
    //Error general
  } catch (err) {
    console.error('Error fetching pokemon:', err);
    throw err;
  }
}

// funcion para obtener debilidades
export const getWeaknesses = async (types: { type: { name: string; url: string } }[]): Promise<string[]> => {
  const allWeaknesses = new Set<string>();

  for (const typeObj of types) {
    const typeUrl = typeObj.type.url;
    const response = await fetch(typeUrl);
    const typeData = await response.json();

    // Obtener los tipos contra los que es débil (double damage from)
    typeData.damage_relations.double_damage_from.forEach((type: { name: string }) => {
      allWeaknesses.add(type.name);
    });
  }

  return Array.from(allWeaknesses);
};

// Función para obtener la cadena evolutiva
export const getEvolutionChain = async (speciesUrl: string): Promise<EvolutionChainItem[]> => {
  try {
    // 1. Obtener species data
    const speciesResponse = await fetch(speciesUrl);
    const speciesData = await speciesResponse.json();

    // 2. Obtener evolution chain
    const evolutionResponse = await fetch(speciesData.evolution_chain.url);
    const evolutionData = await evolutionResponse.json();

    // 3. Procesar la cadena evolutiva
    const chain: EvolutionChainItem[] = [];

    // Función recursiva para procesar toda la cadena
    const processChain = (chainLink: { species: { name: string; url: string }; evolves_to: any[] }) => {
      chain.push({
        name: chainLink.species.name,
        url: chainLink.species.url,
      });

      if (chainLink.evolves_to.length > 0) {
        chainLink.evolves_to.forEach((evolution: any) => {
          processChain(evolution);
        });
      }
    };

    processChain(evolutionData.chain);
    return chain;
  } catch (error) {
    console.error("Error obteniendo evoluciones:", error);
    return [];
  }
};

// Función para obtener información de región y generación
export const getRegionInfo = async (speciesUrl: string): Promise<PokemonRegionInfo> => {
  try {
    const speciesResponse = await fetch(speciesUrl);
    const speciesData = await speciesResponse.json();

    // Obtener generación
    const generationResponse = await fetch(speciesData.generation.url);
    const generationData = await generationResponse.json();

    return {
      generation: generationData.name.replace('generation-', 'Gen ').toUpperCase(),
      region: generationData.main_region?.name || 'Unknown',
      habitat: speciesData.habitat?.name || 'Unknown'
    };
  } catch (error) {
    console.error("Error obteniendo región:", error);
    return {
      generation: 'Unknown',
      region: 'Unknown',
      habitat: 'Unknown'
    };
  }
};
