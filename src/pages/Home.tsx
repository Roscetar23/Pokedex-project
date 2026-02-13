import { useState } from "react";

interface HomeProps {
  pokemon: any;
  error: string;
}

function Home({ pokemon, error }: HomeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    pokemon.sprites.other["official-artwork"].front_default,
    pokemon.sprites.front_default,
    pokemon.sprites.back_default,
    pokemon.sprites.front_shiny,
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {error && <p>{error}</p>}
      <div className="carousel-container">
        <button onClick={prevImage} className="carousel-button">
          ←
        </button>
        <img
          src={images[currentIndex]}
          alt={pokemon.name}
          width={300}
          className="carousel-image"
        />
        <button onClick={nextImage} className="carousel-button">
          →
        </button>
        <div className="carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;