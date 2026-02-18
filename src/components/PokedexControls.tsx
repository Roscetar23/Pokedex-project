interface PokedexControlsProps {
  onPrevImage: () => void;
  onNextImage: () => void;
  onToggleView: () => void;
  currentImageLabel: string;
  showMap: boolean;
}

function PokedexControls({ onPrevImage, onNextImage, onToggleView, currentImageLabel, showMap }: PokedexControlsProps) {
  return (
    <div className="pokedex-controls">
      <div className="pokedex-dpad">
        <div className="dpad-button dpad-up" onClick={onToggleView} title={showMap ? "Ver imágenes" : "Ver mapa"}>▲</div>
        <div className="dpad-button dpad-left">◀</div>
        <div className="dpad-button dpad-center"></div>
        <div className="dpad-button dpad-right">▶</div>
        <div className="dpad-button dpad-down" onClick={onNextImage}>▼</div>
      </div>
      <div className="pokedex-screen-small">
        {currentImageLabel}
      </div>
      <div className="pokedex-action-buttons">
        <div className="action-button red" onClick={onPrevImage}></div>
        <div className="action-button green" onClick={onNextImage}></div>
      </div>
    </div>
  );
}

export default PokedexControls;
