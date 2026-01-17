import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="wrapper">
      {/* Комментарий в JSX пишется ТАК, и он не должен «съедать» тег */}
      <Header />

      <main className="main-content">
        <HeroSection />


      </main>

      {/* Если Footer — это отдельный компонент,
          то тег <footer> обычно уже лежит внутри него */}

    </div>
  );
}

export default App;