// Interfaces para los datos de PokeAPI
export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonSprites {
  front_default: string;
  back_default: string;
  front_shiny: string;
  back_shiny: string;
  other: {
    "official-artwork": {
      front_default: string;
    };
  };
}

export interface PokemonSpecies {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
  species: PokemonSpecies;
}

export interface EvolutionChainItem {
  name: string;
  url: string;
}

export interface PokemonRegionInfo {
  generation: string;
  region: string;
  habitat: string;
}

// Interfaces para los componentes
export interface AppProps {
  setPokemon: (pokemon: Pokemon | null) => void;
  setError: (error: string) => void;
  setRegionInfo: (regionInfo: PokemonRegionInfo | null) => void;
  pokemon: Pokemon | null;
}

export interface DetailsPokemonProps {
  setPokemon: (pokemon: Pokemon | null) => void;
  setError: (error: string) => void;
  setRegionInfo: (regionInfo: PokemonRegionInfo | null) => void;
  pokemon: Pokemon | null;
}

export interface HomeProps {
  pokemon: Pokemon | null;
  error: string;
}

export interface SearchBarProps {
  onSearch: (name: string) => void;
}