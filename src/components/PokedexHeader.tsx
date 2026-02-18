function PokedexHeader() {
  return (
    <div className="pokedex-header">
      <div className="pokedex-lights">
        <div className="big-light"></div>
        <div className="small-lights">
          <div className="small-light red"></div>
          <div className="small-light yellow"></div>
          <div className="small-light green"></div>
        </div>
      </div>
      <div className="pokeball-icon"></div>
    </div>
  );
}

export default PokedexHeader;
