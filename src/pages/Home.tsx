import { useState } from "react";
import type { HomeProps } from "../interface/generalInterfaces";
import type { PokemonRegionInfo } from "../interface/generalInterfaces";
import PokedexHeader from "../components/PokedexHeader";
import PokedexControls from "../components/PokedexControls";
import ImageCarousel from "../components/ImageCarousel";
import RegionMap from "../components/RegionMap";
import EmptyState from "../components/EmptyState";
import ErrorState from "../components/ErrorState";

interface HomePropsExtended extends HomeProps {
  regionInfo: PokemonRegionInfo | null;
}

function Home({ pokemon, error, regionInfo }: HomePropsExtended) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMap, setShowMap] = useState(false);

  const imageLabels = ["Artwork", "Frente", "Atrás", "Shiny"];

  const nextImage = () => {
    if (showMap) return;
    setCurrentIndex((prev) => (prev + 1) % 4);
  };

  const prevImage = () => {
    if (showMap) return;
    setCurrentIndex((prev) => (prev - 1 + 4) % 4);
  };

  const handleDotClick = (index: number) => {
    setShowMap(false);
    setCurrentIndex(index);
  };

  const toggleView = () => {
    setShowMap(!showMap);
  };

  // Si hay error, mostrarlo
  if (error) {
    return (
      <div className="pokedex-container">
        <PokedexHeader />
        <div className="pokedex-screen">
          <ErrorState message={error} />
        </div>
      </div>
    );
  }

  // Si no hay pokemon aún, mostrar mensaje
  if (!pokemon) {
    return (
      <div className="pokedex-container">
        <PokedexHeader />
        <div className="pokedex-screen">
          <EmptyState />
        </div>
        <PokedexControls 
          onPrevImage={prevImage}
          onNextImage={nextImage}
          onToggleView={toggleView}
          currentImageLabel="READY"
          showMap={showMap}
        />
      </div>
    );
  }

  // Cuando tenemos pokemon, definimos las imágenes
  const images = [
    pokemon.sprites.other["official-artwork"].front_default,
    pokemon.sprites.front_default,
    pokemon.sprites.back_default,
    pokemon.sprites.front_shiny,
  ];

  return (
    <div className="pokedex-container">
      <PokedexHeader />
      
      <div className="pokedex-screen">
        {showMap && regionInfo ? (
          <RegionMap regionInfo={regionInfo} pokemonName={pokemon.name} />
        ) : (
          <ImageCarousel 
            images={images}
            currentIndex={currentIndex}
            pokemonName={pokemon.name}
            onPrevImage={prevImage}
            onNextImage={nextImage}
            onDotClick={handleDotClick}
          />
        )}
      </div>

      <PokedexControls 
        onPrevImage={prevImage}
        onNextImage={nextImage}
        onToggleView={toggleView}
        currentImageLabel={showMap ? "MAP" : imageLabels[currentIndex]}
        showMap={showMap}
      />
    </div>
  );
}

export default Home;