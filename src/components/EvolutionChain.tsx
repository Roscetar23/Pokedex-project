import type { EvolutionChainItem } from "../interface/generalInterfaces";

interface EvolutionChainProps {
  evolutionChain: EvolutionChainItem[];
  onEvolutionClick: (name: string) => void;
}

function EvolutionChain({ evolutionChain, onEvolutionClick }: EvolutionChainProps) {
  if (evolutionChain.length === 0) {
    return <span> Cargando...</span>;
  }

  return (
    <div className="evolution-chain">
      {evolutionChain.map((evo, index) => (
        <div key={evo.name} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span 
            className="evolution-item"
            onClick={() => onEvolutionClick(evo.name)}
            title={`Click para ver ${evo.name}`}
          >
            {evo.name}
          </span>
          {index < evolutionChain.length - 1 && <span className="evolution-arrow">→</span>}
        </div>
      ))}
    </div>
  );
}

export default EvolutionChain;
