import React from "react";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">Разрабатывай будущее с <span>React</span></h1>
          <p className="hero__subtitle">
            Твой первый проект на современном стеке. Быстро, стильно и эффективно.
          </p>
          <div className="hero__actions">
            <a href="#explore" className="hero__btn hero__btn--primary">Начать работу</a>
            <a href="#docs" className="hero__btn hero__btn--secondary">Документация</a>
          </div>
        </div>
        <div className="hero__image">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
            alt="Рабочее пространство программиста"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;