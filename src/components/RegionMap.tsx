import { useState } from "react";
import type { PokemonRegionInfo } from "../interface/generalInterfaces";

interface RegionMapProps {
  regionInfo: PokemonRegionInfo;
  pokemonName: string;
}

function RegionMap({ regionInfo, pokemonName }: RegionMapProps) {
  const [imageError, setImageError] = useState(false);

  // Mapeo de regiones a URLs de mapas
  const getRegionMapUrl = (region: string): string => {
    const maps: { [key: string]: string } = {
      kanto: 'https://archives.bulbagarden.net/media/upload/2/21/Kanto_HGSS.png',
      johto: 'https://archives.bulbagarden.net/media/upload/f/f3/Johto_HGSS.png',
      hoenn: 'https://archives.bulbagarden.net/media/upload/e/e3/Hoenn_ORAS.png',
      sinnoh: 'https://archives.bulbagarden.net/media/upload/5/5b/Sinnoh_Pt.png',
      unova: 'https://archives.bulbagarden.net/media/upload/0/08/Unova_B2W2.png',
      kalos: 'https://archives.bulbagarden.net/media/upload/a/ae/Kalos_XY.png',
      alola: 'https://archives.bulbagarden.net/media/upload/6/6f/Alola_USUM.png',
      galar: 'https://archives.bulbagarden.net/media/upload/6/68/Galar_SwSh.png',
      paldea: 'https://archives.bulbagarden.net/media/upload/5/5f/Paldea_SV.png',
    };
    return maps[region.toLowerCase()] || maps.kanto;
  };

  // Colores por región
  const getRegionColor = (region: string): string => {
    const colors: { [key: string]: string } = {
      kanto: '#FF6B6B',
      johto: '#4ECDC4',
      hoenn: '#45B7D1',
      sinnoh: '#96CEB4',
      unova: '#FFEAA7',
      kalos: '#DFE6E9',
      alola: '#FD79A8',
      galar: '#A29BFE',
      paldea: '#FF7675',
    };
    return colors[region.toLowerCase()] || '#95A5A6';
  };

  // Formas simplificadas de cada región
  const getRegionShape = (region: string) => {
    const shapes: { [key: string]: JSX.Element } = {
      kanto: (
        <svg viewBox="0 0 200 200" className="region-shape">
          <path d="M 50 50 L 150 50 L 150 120 L 120 150 L 50 150 Z" fill={getRegionColor(region)} stroke="#1a1a2e" strokeWidth="3"/>
          <circle cx="100" cy="80" r="8" fill="#1a1a2e"/>
          <circle cx="80" cy="110" r="6" fill="#1a1a2e"/>
          <circle cx="120" cy="110" r="6" fill="#1a1a2e"/>
        </svg>
      ),
      johto: (
        <svg viewBox="0 0 200 200" className="region-shape">
          <path d="M 60 40 L 140 40 L 160 80 L 140 140 L 60 140 L 40 80 Z" fill={getRegionColor(region)} stroke="#1a1a2e" strokeWidth="3"/>
          <circle cx="100" cy="70" r="8" fill="#1a1a2e"/>
          <circle cx="70" cy="100" r="6" fill="#1a1a2e"/>
          <circle cx="130" cy="100" r="6" fill="#1a1a2e"/>
        </svg>
      ),
      hoenn: (
        <svg viewBox="0 0 200 200" className="region-shape">
          <ellipse cx="100" cy="100" rx="70" ry="60" fill={getRegionColor(region)} stroke="#1a1a2e" strokeWidth="3"/>
          <circle cx="100" cy="80" r="8" fill="#1a1a2e"/>
          <circle cx="70" cy="110" r="6" fill="#1a1a2e"/>
          <circle cx="130" cy="110" r="6" fill="#1a1a2e"/>
          <circle cx="100" cy="130" r="5" fill="#1a1a2e"/>
        </svg>
      ),
      sinnoh: (
        <svg viewBox="0 0 200 200" className="region-shape">
          <path d="M 100 30 L 160 80 L 150 140 L 50 140 L 40 80 Z" fill={getRegionColor(region)} stroke="#1a1a2e" strokeWidth="3"/>
          <circle cx="100" cy="70" r="8" fill="#1a1a2e"/>
          <circle cx="80" cy="100" r="6" fill="#1a1a2e"/>
          <circle cx="120" cy="100" r="6" fill="#1a1a2e"/>
        </svg>
      ),
      unova: (
        <svg viewBox="0 0 200 200" className="region-shape">
          <rect x="40" y="50" width="120" height="100" rx="10" fill={getRegionColor(region)} stroke="#1a1a2e" strokeWidth="3"/>
          <circle cx="100" cy="80" r="8" fill="#1a1a2e"/>
          <circle cx="70" cy="110" r="6" fill="#1a1a2e"/>
          <circle cx="130" cy="110" r="6" fill="#1a1a2e"/>
        </svg>
      ),
    };
    return shapes[region.toLowerCase()] || shapes.kanto;
  };

  return (
    <div className="region-map-container">
      <div className="region-map-header">
        <h2>{regionInfo.region.toUpperCase()} MAP</h2>
      </div>
      
      <div className="region-map-content">
        {/* Mapa de la región */}
        <div className="map-visual-real">
          {!imageError ? (
            <>
              <img 
                src={getRegionMapUrl(regionInfo.region)} 
                alt={`${regionInfo.region} map`}
                className="region-map-image"
                onError={() => setImageError(true)}
                crossOrigin="anonymous"
              />
              <div className="map-overlay">
                <div className="map-marker">
                  <div className="marker-pulse"></div>
                  <span className="marker-icon">📍</span>
                </div>
              </div>
            </>
          ) : (
            <div className="map-fallback">
              {getRegionShape(regionInfo.region)}
              <div className="map-marker">
                <div className="marker-pulse"></div>
                <span className="marker-icon">📍</span>
              </div>
            </div>
          )}
        </div>

        {/* Información de región */}
        <div className="region-info-box">
          <div className="info-row">
            <span className="info-label">GENERATION</span>
            <span className="info-value">{regionInfo.generation}</span>
          </div>
          
          <div className="info-divider"></div>
          
          <div className="info-row">
            <span className="info-label">REGION</span>
            <span className="info-value">{regionInfo.region.toUpperCase()}</span>
          </div>
          
          <div className="info-divider"></div>
          
          <div className="info-row">
            <span className="info-label">HABITAT</span>
            <span className="info-value">{regionInfo.habitat.toUpperCase()}</span>
          </div>
        </div>

        {/* Mensaje estilo juego */}
        <div className="region-description">
          <p>
            {pokemonName.toUpperCase()} was discovered in the {regionInfo.region.toUpperCase()} region.
            This Pokemon typically inhabits {regionInfo.habitat} areas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegionMap;
