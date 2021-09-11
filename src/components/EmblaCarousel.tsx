import React, { useEffect } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';

type SlideType = {
  slides: Array<string>;
};

const EmblaCarousel = ({ slides }: SlideType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
  });

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((el) => (
          <div className="embla__slide">
            <img src={el} alt="" className="card-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
