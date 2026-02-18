interface ImageCarouselProps {
  images: string[];
  currentIndex: number;
  pokemonName: string;
  onPrevImage: () => void;
  onNextImage: () => void;
  onDotClick: (index: number) => void;
}

function ImageCarousel({ 
  images, 
  currentIndex, 
  pokemonName, 
  onPrevImage, 
  onNextImage, 
  onDotClick 
}: ImageCarouselProps) {
  return (
    <div className="carousel-container">
      <img
        src={images[currentIndex]}
        alt={pokemonName}
        className="carousel-image"
      />
      <div className="carousel-controls">
        <button onClick={onPrevImage} className="carousel-button">
          ◀
        </button>
        <button onClick={onNextImage} className="carousel-button">
          ▶
        </button>
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => onDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
