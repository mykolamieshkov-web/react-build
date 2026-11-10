// HeroSection.jsx

import { useEffect, useRef, useState } from 'react';
import { initHeroVideo } from '../../scripts/hero';
import './HeroSection.scss';

const REVEAL_FALLBACK_MS = 8.5000;

function HeroSection() {
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const reveal = () => setIsRevealed(true);

  useEffect(() => {
    const cleanup = initHeroVideo(videoRef, overlayRef);
    const timer = setTimeout(reveal, REVEAL_FALLBACK_MS);

    return () => {
      cleanup?.();
      clearTimeout(timer);
    };
  }, []);

  const scrollToNext = () => {
    const next = document.getElementById('heroSection')?.nextElementSibling;
    next?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className={`hero${isRevealed ? ' hero--revealed' : ''}`}
      id="heroSection"
    >
      <video
        ref={videoRef}
        className="hero__video"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={reveal}
      >
        <source src="/video/Desktop-frame.webm" type="video/webm" media="(min-width: 768px)" />
        <source src="/video/mobile-frame.webm" type="video/webm" media="(max-width: 767px)" />
      </video>

      <div className="hero__overlay" ref={overlayRef}>
        <div className="hero__content-wrapper">
          <div className="hero__title-wrapper">
            <h1>
              Professional Nails, Hair & Lashes in Erbil — Private Rooms, Expert Care
            </h1>
          </div>

          <div className="hero__subtitle-wrapper">
            <p>
              Expert nails, hair, lashes, and makeup for brides, professionals, and everyday beauty in Kurdistan.
            </p>
          </div>

          <div className="hero__ctas-wrapper">
            <div className="hero__cta-primary-wrapper">
              <a
                href="https://wa.me/9647500241000?text=Hello%20Jade%20Touch"
                aria-label="Book appointment on WhatsApp"
                className="hero__cta hero__cta--primary"
              >
                Book on WhatsApp
              </a>
            </div>

            <div className="hero__cta-secondary-wrapper">
              <a
                href="#services"
                aria-label="View our services"
                className="hero__cta hero__cta--secondary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="hero__nav" aria-label="Page navigation">
        <button
          type="button"
          className="hero__nav-next"
          aria-label="Scroll to next section"
          onClick={scrollToNext}
        >
          <span aria-hidden="true">↓</span>
        </button>
      </nav>
    </section>
  );
}

export default HeroSection;