import React from 'react';
import Header from './widgets/Header/';
import HeroSection from './widgets/HeroSection';
import ServicesSection from './widgets/ServicesSection';
import Footer from './widgets/Footer/';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <main className="main-content">
        <HeroSection />
        <ServicesSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;