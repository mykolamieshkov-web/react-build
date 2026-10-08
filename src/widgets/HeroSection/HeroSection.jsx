// HeroSection.jsx

import { useEffect, useRef } from 'react';
import { initHeroVideo } from './script';
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
        preload="metadata"
      >
        <source src="/videos/Desktop-frame.webm" type="video/webm" media="(min-width: 768px)" />
        <source src="/videos/mobile-frame.webm" type="video/webm" media="(max-width: 767px)" />
      </video>

      <div className="hero__overlay" ref={overlayRef}>
        <div className="hero__content">
          <h1 className="hero__title">
            Professional Nail Salon & Beauty Services in Erbil — Women-Only Private Rooms, Medical-Grade Sterilization
          </h1>

          <p className="hero__subtitle">
            Expert nails, hair, lashes, and makeup for brides, professionals, and everyday beauty in Kurdistan.
          </p>

          <div className="hero__ctas">
            <a
              href="https://wa.me/9647500241000?text=Hello%20Jade%20Touch"
              className="hero__cta hero__cta--primary"
              aria-label="Book appointment on WhatsApp"
            >
              Book Now on WhatsApp
            </a>

            <button
              className="hero__cta hero__cta--secondary"
              aria-label="View our services"
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;