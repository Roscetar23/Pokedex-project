import type { Pokemon, EvolutionChainItem } from "../interface/generalInterfaces";
import TypeBadge from "./TypeBadge";
import AbilityBadge from "./AbilityBadge";
import EvolutionChain from "./EvolutionChain";

interface PokemonInfoProps {
  pokemon: Pokemon;
  weaknesses: string[];
  evolutionChain: EvolutionChainItem[];
  onEvolutionClick: (name: string) => void;
}

function PokemonInfo({ pokemon, weaknesses, evolutionChain, onEvolutionClick }: PokemonInfoProps) {
  return (
    <div className="pokemon-details-container">
      {/* Header Card - Estilo juego retro */}
      <div className="pokemon-header-card">
        <div className="pokemon-header-icon">⚪</div>
        <div className="pokemon-header-info">
          <span className="pokemon-name-display">{pokemon.name}</span>
          <span className="pokemon-number-display">#{pokemon.id.toString().padStart(3, '0')}</span>
        </div>
      </div>

      {/* Stats Card - Estilo pantalla de juego */}
      <div className="pokemon-stats-card">
        <div className="pokemon-stats-grid">
          <div className="stat-item">
            <span className="stat-label">HT</span>
            <span className="stat-value">{(pokemon.height / 10).toFixed(1)}"</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">WT</span>
            <span className="stat-value">{(pokemon.weight / 10).toFixed(1)} lbs</span>
          </div>
        </div>

        <div className="stat-divider"></div>

        {/* Tipos */}
        <div className="pokemon-section">
          <div className="section-title">Tipos</div>
          <div className="pokemon-types">
            {pokemon.types.map((t) => (
              <TypeBadge key={t.type.name} typeName={t.type.name} />
            ))}
          </div>
        </div>

        <div className="stat-divider"></div>

        {/* Debilidades */}
        <div className="pokemon-section">
          <div className="section-title">Debilidades</div>
          <div className="pokemon-weaknesses">
            {weaknesses.length > 0 ? (
              weaknesses.map((w) => (
                <TypeBadge key={w} typeName={w} />
              ))
            ) : (
              <span>Cargando...</span>
            )}
          </div>
        </div>

        <div className="stat-divider"></div>

        {/* Habilidades */}
        <div className="pokemon-section">
          <div className="section-title">Habilidades</div>
          <div className="pokemon-abilities">
            {pokemon.abilities.map((a) => (
              <AbilityBadge key={a.ability.name} abilityName={a.ability.name} />
            ))}
          </div>
        </div>
      </div>

      {/* Evolution Chain - Estilo caja de texto del juego */}
      <div className="pokemon-description-box">
        <div className="pokemon-section">
          <div className="section-title">Cadena Evolutiva</div>
          <EvolutionChain 
            evolutionChain={evolutionChain} 
            onEvolutionClick={onEvolutionClick}
          />
        </div>
      </div>
    </div>
  );
}

export default PokemonInfo;
