// HeroSection.jsx

import { useEffect, useRef } from 'react';
import { initHeroVideo } from '../../scripts/hero';
import './HeroSection.scss';

function HeroSection() {
  const videoRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    initHeroVideo(videoRef, overlayRef);
  }, []);

  return (
    <section className="hero" id="heroSection">
      <video
        ref={videoRef}
        className="hero__video"
        autoPlay
        muted
        playsInline
        replay 
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
              >
                Book  on WhatsApp
              </a>
            </div>

            <div className="hero__cta-secondary-wrapper">
              <a
                aria-label="View our services"
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View  Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;