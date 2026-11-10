// ServicesSection.jsx

import { useState, useEffect, useRef, useCallback } from 'react';
import { SERVICES_DATA } from './services.data';
import './services-section.scss';
import './services-section-theme.scss';

const AUTOPLAY_INTERVAL_MS = 5000;

function ServicesSection() {
  const [activeSlides, setActiveSlides] = useState(() => {
    const initial = {};
    SERVICES_DATA.forEach((service) => {
      initial[service.id] = 0;
    });
    return initial;
  });

  const [pausedBlocks, setPausedBlocks] = useState({});
  const touchPositions = useRef({});

  const nextSlide = useCallback((serviceId, totalSlides) => {
    setActiveSlides((prev) => ({
      ...prev,
      [serviceId]: ((prev[serviceId] ?? 0) + 1) % totalSlides,
    }));
  }, []);

  const prevSlide = useCallback((serviceId, totalSlides) => {
    setActiveSlides((prev) => ({
      ...prev,
      [serviceId]: ((prev[serviceId] ?? 0) - 1 + totalSlides) % totalSlides,
    }));
  }, []);

  const goToSlide = useCallback((serviceId, targetIndex) => {
    setActiveSlides((prev) => ({
      ...prev,
      [serviceId]: targetIndex,
    }));
  }, []);

  const setBlockPaused = useCallback((serviceId, isPaused) => {
    setPausedBlocks((prev) => ({
      ...prev,
      [serviceId]: isPaused,
    }));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      SERVICES_DATA.forEach((service) => {
        if (!pausedBlocks[service.id]) {
          nextSlide(service.id, service.slides.length);
        }
      });
    }, AUTOPLAY_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [pausedBlocks, nextSlide]);

  const handleTouchStart = (serviceId, e) => {
    touchPositions.current[serviceId] = {
      startX: e.touches[0].clientX,
      endX: e.touches[0].clientX,
    };
    setBlockPaused(serviceId, true);
  };

  const handleTouchMove = (serviceId, e) => {
    if (touchPositions.current[serviceId]) {
      touchPositions.current[serviceId].endX = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = (serviceId, totalSlides) => {
    const pos = touchPositions.current[serviceId];
    if (pos) {
      const diff = pos.startX - pos.endX;
      const minSwipeDistance = 45;
      if (diff > minSwipeDistance) {
        nextSlide(serviceId, totalSlides);
      } else if (diff < -minSwipeDistance) {
        prevSlide(serviceId, totalSlides);
      }
    }
    delete touchPositions.current[serviceId];
    setBlockPaused(serviceId, false);
  };

  return (
    <section
      className="services-section"
      id="services"
      aria-labelledby="services-section-title"
    >
      <div className="services-section__container">
        <header className="services-section__intro">
          <span className="services-section__eyebrow">Luxury Beauty Suites</span>
          <h2 id="services-section-title" className="services-section__heading">
            Our Signature Services
          </h2>
          <p className="services-section__lead">
            Curated beauty rituals tailored to elevate your natural elegance. Private suites, European master artists, and premium materials in Erbil.
          </p>
        </header>

        <div className="services-section__list">
          {SERVICES_DATA.map((service) => {
            const currentIndex = activeSlides[service.id] ?? 0;
            const totalSlides = service.slides.length;

            return (
              <article
                key={service.id}
                className="services-section__block"
                aria-label={service.title}
              >
                <div className="services-section__block-header">
                  <div className="services-section__block-meta">
                    <span className="services-section__block-number">
                      {service.serviceNumber} / {service.category}
                    </span>
                    <h3 className="services-section__block-title">
                      {service.title}
                    </h3>
                    <p className="services-section__block-desc">
                      {service.description}
                    </p>
                  </div>

                  <div className="services-section__controls">
                    <button
                      type="button"
                      className="services-section__control services-section__control--prev"
                      aria-label={`Previous ${service.category} slide`}
                      onClick={() => prevSlide(service.id, totalSlides)}
                    >
                      <svg
                        className="services-section__control-icon"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>

                    <button
                      type="button"
                      className="services-section__control services-section__control--next"
                      aria-label={`Next ${service.category} slide`}
                      onClick={() => nextSlide(service.id, totalSlides)}
                    >
                      <svg
                        className="services-section__control-icon"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div
                  className="services-section__indicators"
                  role="tablist"
                  aria-label={`${service.category} slides`}
                >
                  {service.slides.map((slide, idx) => {
                    const isActive = idx === currentIndex;
                    return (
                      <button
                        key={slide.id}
                        type="button"
                        role="tab"
                        className={`services-section__indicator${isActive ? ' services-section__indicator--active' : ''}`}
                        aria-label={`Slide ${idx + 1}: ${slide.title}`}
                        aria-selected={isActive}
                        onClick={() => goToSlide(service.id, idx)}
                      >
                        <span className="services-section__indicator-fill" />
                      </button>
                    );
                  })}
                </div>

                <div
                  className="services-section__viewport"
                  onMouseEnter={() => setBlockPaused(service.id, true)}
                  onMouseLeave={() => setBlockPaused(service.id, false)}
                  onTouchStart={(e) => handleTouchStart(service.id, e)}
                  onTouchMove={(e) => handleTouchMove(service.id, e)}
                  onTouchEnd={() => handleTouchEnd(service.id, totalSlides)}
                >
                  <div
                    className="services-section__track"
                    style={{
                      '--active-index': currentIndex,
                    }}
                  >
                    {service.slides.map((slide, idx) => {
                      const isActive = idx === currentIndex;
                      const bookingUrl = `https://wa.me/9647500241000?text=${encodeURIComponent(`Hello Jade Touch, I would like to book: ${slide.title} (${service.title})`)}`;

                      return (
                        <div
                          key={slide.id}
                          className={`services-section__card${isActive ? ' services-section__card--active' : ''}`}
                          aria-hidden={!isActive}
                        >
                          <div className="services-section__card-inner">
                            <div className="services-section__card-cover">
                              <picture className="services-section__picture">
                                <source
                                  srcSet={slide.imageWebp}
                                  type="image/webp"
                                />
                                <img
                                  src={slide.imageFallback}
                                  alt={slide.alt}
                                  className="services-section__img"
                                  loading="lazy"
                                  width="960"
                                  height="540"
                                />
                              </picture>
                            </div>

                            <div className="services-section__card-overlay" />

                            <div className="services-section__card-content">
                              <span className="services-section__card-badge">
                                {slide.badge}
                              </span>

                              <h4 className="services-section__card-title">
                                {slide.title}
                              </h4>

                              <p className="services-section__card-desc">
                                {slide.description}
                              </p>

                              <div className="services-section__card-footer">
                                <div className="services-section__card-meta">
                                  <span className="services-section__card-duration">
                                    {slide.duration}
                                  </span>
                                  <span className="services-section__card-sub">
                                    {slide.subtitle}
                                  </span>
                                </div>

                                <a
                                  href={bookingUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="services-section__card-btn"
                                  aria-label={`Book ${slide.title} on WhatsApp`}
                                >
                                  Book on WhatsApp
                                  <span aria-hidden="true"> →</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
