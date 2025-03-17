import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function FreeTrial() {
  // Estado para o contador de pessoas testando
  const [testerCount, setTesterCount] = useState(34);
  
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

  // Link para WhatsApp
  const whatsappLink = "https://wa.me/5511967973944?text=Oi%2C%20quero%20testar%20gratuitamente.";

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
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full relative overflow-hidden bg-gradient-to-r from-[#00cc66] to-[#00aa55] hover:from-[#00aa55] hover:to-[#00cc66] text-white rounded-xl py-4 px-4 text-base font-bold cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 transform flex items-center justify-center gap-3"
            >
              {/* Efeito de brilho */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer"></span>
              
              <div className="flex items-center justify-center w-full">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                  <g id="SVGRepo_iconCarrier">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z" fill="#ffffff"></path>
                  </g>
                </svg>
                <span>Quero Testar Grátis Agora no WhatsApp!</span>
              </div>
            </a>
            
            {/* Badge de pessoas testando */}
            <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 bg-[#00cc66] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md">
              <span className="animate-pulse mr-1">●</span> {testerCount} pessoas testando agora
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