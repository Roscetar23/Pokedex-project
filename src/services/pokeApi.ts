const API_URL = import.meta.env.VITE_API_GENERAL;
//Funcion Para traer los datos del pokemon
export async function getPokemons(pokemon: string) {
  try {
    // Apartado que trae la informacion de la url
    const res = await fetch(`${API_URL}/pokemon/${pokemon}`);
    // Error por si no se encuentra el pokemon
    if (!res.ok) {
      throw new Error("No se encontro al pokemon");
    }
    //Devolucion de la data
    const data = await res.json();
    return data;
    //Error general
  } catch (err) {
    throw err;
  }
}

// funcion para obtener debilidades
export const getWeaknesses = async (types: any[]) => {
  const allWeaknesses = new Set<string>();

  for (const typeObj of types) {
    const typeUrl = typeObj.type.url;
    const response = await fetch(typeUrl);
    const typeData = await response.json();

    // Obtener los tipos contra los que es débil (double damage from)
    typeData.damage_relations.double_damage_from.forEach((type: any) => {
      allWeaknesses.add(type.name);
    });
  }

  return Array.from(allWeaknesses);
};

// Función para obtener la cadena evolutiva
export const getEvolutionChain = async (speciesUrl: string) => {
  try {
    // 1. Obtener species data
    const speciesResponse = await fetch(speciesUrl);
    const speciesData = await speciesResponse.json();

    // 2. Obtener evolution chain
    const evolutionResponse = await fetch(speciesData.evolution_chain.url);
    const evolutionData = await evolutionResponse.json();

    // 3. Procesar la cadena evolutiva
    const chain: any[] = [];
    let current = evolutionData.chain;

    // Función recursiva para procesar toda la cadena
    const processChain = (chainLink: any) => {
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

    processChain(current);
    return chain;
  } catch (error) {
    console.error("Error obteniendo evoluciones:", error);
    return [];
  }
};
