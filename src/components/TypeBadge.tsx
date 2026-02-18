interface TypeBadgeProps {
  typeName: string;
}

function TypeBadge({ typeName }: TypeBadgeProps) {
  return (
    <span 
      className="type-badge" 
      style={{
        background: `linear-gradient(135deg, ${getTypeColor(typeName)} 0%, ${getTypeColorDark(typeName)} 100%)`
      }}
    >
      {typeName}
    </span>
  );
}

// Función auxiliar para colores de tipos
function getTypeColor(type: string): string {
  const colors: { [key: string]: string } = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC',
  };
  return colors[type] || '#777';
}

function getTypeColorDark(type: string): string {
  const colors: { [key: string]: string } = {
    normal: '#8A8A59',
    fire: '#C85A08',
    water: '#4870C8',
    electric: '#D0A808',
    grass: '#50A028',
    ice: '#70B0B0',
    fighting: '#981810',
    poison: '#782878',
    ground: '#B89840',
    flying: '#8068C8',
    psychic: '#C83060',
    bug: '#808810',
    rock: '#907820',
    ghost: '#483070',
    dragon: '#4820C0',
    dark: '#483028',
    steel: '#9090A8',
    fairy: '#C66784',
  };
  return colors[type] || '#555';
}

export default TypeBadge;
