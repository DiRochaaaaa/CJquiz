import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ParamLink from '../components/UtmLink';
import useParamTracking from '../hooks/useUtmTracking';

function FreeTrial() {
  // Estado para o contador de pessoas testando
  const [testerCount, setTesterCount] = useState(34);
  const { processUrl } = useParamTracking();
  
  // Link base do WhatsApp
  const whatsappBaseLink = "https://wa.me/5511967973944?text=Oi%2C%20quero%20testar%20gratuitamente.";
  
  // Processa o link do WhatsApp com os parâmetros
  const whatsappLink = processUrl(whatsappBaseLink);
  
  // Efeito para incrementar o contador aleatoriamente
  useEffect(() => {
    const interval = setInterval(() => {
      // Aumenta de 1 a 3 pessoas aleatoriamente (20% de chance)
      if (Math.random() < 0.2) {
        const increment = Math.floor(Math.random() * 3) + 1;
        setTesterCount(prev => prev + increment);
      }
    }, 5000); // A cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0099ff] bg-fixed">
      <div className="max-w-md mx-auto p-5">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg relative overflow-hidden p-6 border border-blue-200">
          {/* Detalhe do design no topo */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0066cc] via-[#0099ff] to-[#ff6600]"></div>
          
          {/* Cabeçalho */}
          <div className="text-center mb-6 relative">
            <h1 className="text-2xl font-bold text-[#0066cc] mb-3 leading-tight">
              Ainda em dúvida? Experimente gratuitamente e sinta a transformação!
            </h1>
            <p className="text-base text-gray-700 mb-4">
              Sabemos que dar o primeiro passo pode ser difícil. Por isso, preparamos <span className="font-semibold text-[#0066cc]">7 Mensagens Gratuitas</span> para você experimentar como o Converse com Jesus pode transformar sua vida espiritual.
            </p>
            <div className="after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-[2px] after:bg-gradient-to-r after:from-[#0066cc] after:to-[#ff6600] after:rounded-md"></div>
          </div>
          
          {/* Imagem ilustrativa */}
          <div className="rounded-xl overflow-hidden mb-6 shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=500&auto=format&fit=crop" 
              alt="Bíblia com luz" 
              className="w-full h-48 object-cover"
            />
          </div>
          
          {/* Benefícios do teste grátis */}
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 mb-6 shadow-sm">
            <h2 className="text-lg font-bold text-center text-[#0066cc] mb-4">
              O que você recebe no teste grátis:
            </h2>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-2 bg-blue-50 rounded-lg">
                <div className="text-[#00cc66] text-lg mt-0.5">✅</div>
                <div className="text-sm text-gray-700">
                  <span className="font-semibold">7 Mensagens Gratuitas</span> para transformar sua conexão espiritual
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-2 bg-blue-50 rounded-lg">
                <div className="text-[#00cc66] text-lg mt-0.5">✅</div>
                <div className="text-sm text-gray-700">
                  <span className="font-semibold">Conteúdo personalizado</span> baseado nas suas respostas do quiz
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-2 bg-blue-50 rounded-lg">
                <div className="text-[#00cc66] text-lg mt-0.5">✅</div>
                <div className="text-sm text-gray-700">
                  <span className="font-semibold">Reflexões e versículos bíblicos</span> enviados diretamente no seu WhatsApp
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-2 bg-blue-50 rounded-lg">
                <div className="text-[#00cc66] text-lg mt-0.5">✅</div>
                <div className="text-sm text-gray-700">
                  <span className="font-semibold">Sem compromisso!</span> Se não gostar, basta ignorar
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA WhatsApp */}
          <div className="relative py-3 mb-6">
            <ParamLink 
              to={whatsappLink}
              external={true}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full relative overflow-hidden bg-gradient-to-r from-[#00cc66] to-[#00aa55] hover:from-[#00aa55] hover:to-[#00cc66] text-white rounded-xl py-4 px-4 text-base font-bold cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 transform flex items-center justify-center gap-3"
            >
              {/* Efeito de brilho */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer"></span>
              
              <div className="flex items-center justify-center w-full">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                  <path d="M20.5 3.5L3.5 10L10 12L12 18.5L20.5 3.5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span>Quero Testar Grátis Agora no WhatsApp!</span>
              </div>
            </ParamLink>
            
            {/* Badge de pessoas testando */}
            <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 bg-[#00cc66] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap flex items-center justify-center">
              <span className="animate-pulse mr-1 inline-block">●</span> 
              <span>{testerCount} pessoas testando agora</span>
            </div>
          </div>
          
          {/* Depoimentos */}
          <div className="mb-6">
            <h3 className="text-center text-[#0066cc] font-bold text-base mb-4">
              O que dizem quem já testou?
            </h3>
            
            <div className="bg-blue-50 rounded-lg p-3 mb-3">
              <p className="text-xs text-gray-600 italic">
                "Eu fiz o teste grátis e, no segundo dia, já senti que precisava continuar! As mensagens sempre chegavam no momento certo."
              </p>
              <div className="text-xs font-semibold text-[#0066cc] mt-2 text-right">
                – Ana S.
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-xs text-gray-600 italic">
                "Pensei que seria só um chatbot, mas foi diferente. Me senti realmente conectada e com mensagens que tocaram meu coração."
              </p>
              <div className="text-xs font-semibold text-[#0066cc] mt-2 text-right">
                – João R.
              </div>
            </div>
          </div>
          
          {/* Segurança */}
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 mb-4 border border-[#00cc66]/30">
            <div className="flex items-center gap-2">
              <div className="text-lg">🔒</div>
              <p className="text-xs text-gray-700">
                <span className="font-semibold">100% seguro e sem compromisso.</span> Seus dados estão protegidos e você pode cancelar quando quiser.
              </p>
            </div>
          </div>
          
          {/* Voltar para a oferta */}
          <div className="text-center mt-4">
            <Link 
              to="/offer" 
              className="text-[#0066cc] text-sm font-medium hover:underline transition-all"
            >
              Voltar para os planos pagos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreeTrial; 