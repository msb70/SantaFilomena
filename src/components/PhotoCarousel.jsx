import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './PhotoCarousel.css';

const AUTOPLAY_DELAY = 5500;

const formatIndex = (index) => String(index + 1).padStart(2, '0');

const PhotoCarousel = ({ photos, title = 'Galería Santa Filomena' }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalPhotos = photos.length;
  const activePhoto = photos[activeIndex];

  const goToPhoto = (nextIndex) => {
    setActiveIndex((nextIndex + totalPhotos) % totalPhotos);
  };

  const showPrevious = () => goToPhoto(activeIndex - 1);
  const showNext = () => goToPhoto(activeIndex + 1);

  useEffect(() => {
    if (isPaused || totalPhotos <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % totalPhotos);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(timer);
  }, [isPaused, totalPhotos]);

  if (!totalPhotos) return null;

  return (
    <section
      className="photo-gallery section-padding"
      aria-labelledby="photo-gallery-title"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="container">
        <div className="gallery-heading">
          <span className="gallery-kicker">Imágenes reales</span>
          <h2 id="photo-gallery-title" className="section-title">{title}</h2>
          <p>
            Un recorrido visual por la montaña, la casona, el café y la vida rural que
            dan carácter a la hacienda.
          </p>
        </div>

        <div className="carousel-shell">
          <div className="carousel-frame" aria-live="polite">
            <img src={activePhoto.src} alt={activePhoto.alt} />
          </div>

          <div className="carousel-panel">
            <span className="carousel-count">
              {formatIndex(activeIndex)} / {formatIndex(totalPhotos - 1)}
            </span>
            <h3>{activePhoto.title}</h3>
            <p>{activePhoto.caption}</p>

            <div className="carousel-controls">
              <button
                type="button"
                className="carousel-arrow"
                onClick={showPrevious}
                aria-label="Ver foto anterior"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="carousel-arrow"
                onClick={showNext}
                aria-label="Ver foto siguiente"
              >
                <ChevronRight size={22} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="carousel-dots" role="tablist" aria-label="Seleccionar foto">
            {photos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => goToPhoto(index)}
                aria-label={`Ver foto ${index + 1}: ${photo.title}`}
                aria-selected={index === activeIndex}
                role="tab"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
