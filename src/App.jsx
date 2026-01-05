import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection'; //
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="wrapper"> {/* Твой привычный wrapper */}

      <header className="header">
        <Header /> {/* Внутри него будет твой <nav> */}
      </header>

      <main className="main-content">
        <HeroSection />
        {/* Другие БЭМ блоки/секции */}
        <section className="services">
           {/* Компонент услуг */}
        </section>
      </main>

      <footer className="footer">
        <Footer />
      </footer>

    </div>
  );
}

export default App;