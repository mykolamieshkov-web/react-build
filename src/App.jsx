// 1. Импортируем наш компонент HeroSection
// Путь должен вести в папку components
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  return (
    <div className="App">
      <HeroSection />
    </div>
  );
}

// 2. САМОЕ ВАЖНОЕ: Экспорт по умолчанию
// Именно эту строку ищет main.jsx
export default App;