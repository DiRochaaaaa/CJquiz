import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import ThankYou from './pages/ThankYou';
import Offer from './pages/Offer';
import FreeTrial from './pages/FreeTrial';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
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