interface AbilityBadgeProps {
  abilityName: string;
}

function AbilityBadge({ abilityName }: AbilityBadgeProps) {
  return (
    <span 
      className="ability-badge"
    >
      {abilityName}
    </span>
  );
}

export default AbilityBadge;
