import { useState } from "react";

// Este apartado maneja los tipos para typeScript
interface searchProps {
  onSearch: (name: string) => void;
}

//Funcion que se va a llamar, donde envio el tipo de dato
function SearchBar({ onSearch }: searchProps) {
  //Me permite guardar la informacion de busqueda y cambiarla segun el usuario
  const [search, setSearch] = useState("");
  //Funcion de busqueda y cambio a solo minusculas
  const handleSubmit = () => {
    if (!search.trim()) return;
    onSearch(search.toLowerCase());
  };
  // Funcion de retorno
  return (
    //contenedor general
    <div className="containerSearchBar">
      {/* Titulo */}
      <h1 >Barra de busqueda</h1>
      {/* Contenedor de busqueda */}
      <div className="search">
        <input
          type="text"
          placeholder="Busca tu pokemon"
          //   Aqui llamo al primer estado search
          value={search}
          // Aqui si existe algun cambio se llama al segundo estado
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* Boton que envia la busqueda */}
        <button onClick={handleSubmit} className="search-button">
          Busca
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
