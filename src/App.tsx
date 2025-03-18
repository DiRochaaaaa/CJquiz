import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import ThankYou from './pages/ThankYou';
import Offer from './pages/Offer';
import FreeTrial from './pages/FreeTrial';
import { initParamsCapture } from './utils/utm';
import Pixels from './components/Pixels';

// Componente de inicialização de parâmetros
const ParamInitializer = () => {
  useEffect(() => {
    // Captura os parâmetros da URL e salva em cookies na primeira carga
    initParamsCapture();
  }, []);
  
  return null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Inicializa o rastreamento de parâmetros */}
        <ParamInitializer />
        
        {/* Inicializa os pixels de rastreamento */}
        <Pixels />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          {/* Página de agradecimento acessível após redirecionamento da plataforma de pagamento */}
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/free-trial" element={<FreeTrial />} />
          {/* Rota de fallback para evitar 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;