import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, BookOpen, ArrowRight } from 'lucide-react';
import backgroundImageMobile from '../assets/images/bkg-cel.jpg';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#0099ff] max-w-md mx-auto">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImageMobile})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center min-h-screen">
        {/* Main Text Container */}
        <div className="w-full px-6 pt-8 text-center">
          <h1 className="text-white text-[32px] font-bold leading-tight mb-1">
            Descubra seu nível de
            <br />
            conexão com Deus
          </h1>
          <h2 className="text-white text-[22px] font-bold mb-2">
            E como fortalecê-la todos os dias
          </h2>
          <div className="w-24 h-0.5 bg-[#ff6600] mx-auto mb-4" />
          <p className="text-white text-lg italic mb-6">
            Responda algumas perguntas e receba
            <br />
            um plano especial e personalizado
            <br />
            para se aproximar mais de Deus
          </p>

          {/* Trust Indicators */}
          <div className="space-y-2.5 mb-8">
            <div className="bg-[#ff6600] rounded-full py-2 px-4 flex items-center justify-center space-x-2">
              <Users className="w-5 h-5 text-white" />
              <span className="text-white font-medium tracking-wide">+10.000 VIDAS TRANSFORMADAS</span>
            </div>
            <div className="bg-[#ff6600] rounded-full py-2 px-4 flex items-center justify-center space-x-2">
              <BookOpen className="w-5 h-5 text-white" />
              <span className="text-white font-medium tracking-wide">100% baseado na Bíblia</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="fixed bottom-8 w-full px-6 md:static md:px-0 md:mt-auto md:mb-8 md:w-auto">
          <button
            onClick={() => navigate('/quiz')}
            className="cssbuttons-io-button"
          >
            Começar teste grátis
            <div className="icon">
              <ArrowRight />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;