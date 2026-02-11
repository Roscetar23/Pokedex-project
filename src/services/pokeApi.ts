const API_URL = import.meta.env.VITE_API_GENERAL
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
