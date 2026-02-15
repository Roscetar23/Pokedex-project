export interface AppProps {
    setPokemon: (pokemon: any) => void;
    setError: (error: string) => void;
     
}

export interface DetailsPokemonProps {
  setPokemon: (pokemon: any) => void;
  setError: (error: string) => void;
  pokemon: any;
}