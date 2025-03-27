import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ParamLink from '../components/UtmLink';
import useParamTracking from '../hooks/useUtmTracking';

function Offer() {
  const location = useLocation();
  const answers = location.state?.answers || [];
  const [selectedPlan, setSelectedPlan] = useState('1-month');
  const [hours, setHours] = useState(5);
  const [minutes, setMinutes] = useState(32);
  const [seconds, setSeconds] = useState(14);
  const [buyerCount, setBuyerCount] = useState(16);
  const { redirect, processUrl } = useParamTracking();

  // Links de pagamento da Kirvano
  const paymentLinks = {
    '7-day': 'https://pay.kirvano.com/0c89d0e8-4abd-4220-b569-4fa880ec5d17',
    '1-month': 'https://pay.kirvano.com/86b17786-d39a-4362-aad9-1d37c8c42484',
    '1-year': 'https://pay.kirvano.com/3f972ccc-7dd1-4a89-b321-cefbde609762'
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds === 0) {
          setMinutes(prevMinutes => {
            if (prevMinutes === 0) {
              setHours(prevHours => {
                if (prevHours === 0) {
                  return 5;
                }
                return prevHours - 1;
              });
              return 59;
            }
            return prevMinutes - 1;
          });
          return 59;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const buyerTimer = setInterval(() => {
      setBuyerCount(prevCount => {
        if (prevCount >= 36) {
          clearInterval(buyerTimer);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, Math.floor(Math.random() * (12000 - 5000) + 5000));

    return () => clearInterval(buyerTimer);
  }, []);

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
  };

  const handleGetPlan = () => {
    // Redirecionar para o link de pagamento com todos os parâmetros de URL preservados
    const paymentUrl = paymentLinks[selectedPlan as keyof typeof paymentLinks];
    redirect(paymentUrl);
  };

  return (
    <div className="min-h-screen bg-[#0099ff] bg-fixed">
      <div className="max-w-md mx-auto p-5">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg relative overflow-hidden p-6 border border-blue-200">
          {/* Detalhe do design no topo */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0066cc] via-[#0099ff] to-[#ff6600]"></div>
          
          {/* Cabeçalho */}
          <div className="text-center mb-6 relative">
            <h1 className="text-xl font-bold text-[#0066cc] mb-3 leading-tight">
              Converse diariamente com Jesus e transforme sua vida!
            </h1>
            <p className="text-base text-gray-700 mb-4">
              Baseado nas suas respostas, preparamos uma jornada espiritual personalizada para você.
            </p>
            <div className="after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-[2px] after:bg-gradient-to-r after:from-[#0066cc] after:to-[#ff6600] after:rounded-md"></div>
          </div>
          
          {/* Gráfico de evolução espiritual */}
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 mb-4 shadow-sm">
            <h2 className="text-lg font-bold text-center text-[#0066cc] mb-2">
              Sua evolução espiritual com nossas mensagens
            </h2>
            
            <div className="relative pt-4 pb-2">
              {/* Eixo Y */}
              <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between items-center">
                <span className="text-[10px] text-gray-600">Alto</span>
                <span className="text-[8px] text-gray-400">Conexão</span>
                <span className="text-[10px] text-gray-600">Baixo</span>
              </div>
              
              {/* Gráfico */}
              <div className="ml-8 h-36 relative">
                {/* Linhas de grade horizontais */}
                <div className="absolute w-full h-px bg-gray-200 top-0"></div>
                <div className="absolute w-full h-px bg-gray-200 top-1/3"></div>
                <div className="absolute w-full h-px bg-gray-200 top-2/3"></div>
                <div className="absolute w-full h-px bg-gray-200 bottom-0"></div>
                
                {/* Curva de evolução */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 150" preserveAspectRatio="none">
                  {/* Área sob a curva */}
                  <defs>
                    <linearGradient id="gradientArea" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0066cc" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#0066cc" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M0,130 C30,120 60,100 90,80 C120,60 150,50 180,30 C210,15 240,10 300,5 L300,150 L0,150 Z" 
                    fill="url(#gradientArea)" 
                  />
                  
                  {/* Linha da curva */}
                  <path 
                    d="M0,130 C30,120 60,100 90,80 C120,60 150,50 180,30 C210,15 240,10 300,5" 
                    fill="none" 
                    stroke="#0066cc" 
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  
                  {/* Pontos na curva */}
                  <circle cx="30" cy="125" r="4" fill="#0066cc" stroke="white" strokeWidth="2" />
                  <circle cx="120" cy="60" r="4" fill="#0066cc" stroke="white" strokeWidth="2" />
                  <circle cx="210" cy="15" r="4" fill="#0066cc" stroke="white" strokeWidth="2" />
                  <circle cx="285" cy="5" r="5" fill="#ff6600" stroke="white" strokeWidth="2">
                    <animate attributeName="r" values="5;6;5" dur="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                </svg>
                
                {/* Rótulos dos pontos de dados */}
                <div className="absolute top-[82%] left-[10%] text-center">
                  <div className="text-[8px] font-medium text-gray-600 mt-1">Início</div>
                </div>
                
                <div className="absolute top-[38%] left-[40%] text-center">
                  <div className="text-[8px] font-medium text-gray-600 mt-1">1 semana</div>
                </div>
                
                <div className="absolute top-[10%] left-[70%] text-center">
                  <div className="text-[8px] font-medium text-gray-600 mt-1">1 mês</div>
                </div>
                
                <div className="absolute top-[5%] left-[95%] text-center -translate-x-1/2">
                  <div className="text-[8px] font-bold text-[#ff6600] mt-1">Máxima conexão</div>
                </div>
              </div>
              
              {/* Eixo X */}
              <div className="ml-8 flex justify-between mt-1">
                <span className="text-[10px] text-gray-600">Dia 1</span>
                <span className="text-[10px] text-gray-600">Tempo</span>
                <span className="text-[10px] text-gray-600">1 ano</span>
              </div>
            </div>
          </div>
          
          {/* Benefícios */}
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 mb-4 shadow-sm">
            <h2 className="text-lg font-bold text-center text-[#0066cc] mb-2">
              Benefícios da sua conexão diária
            </h2>
            <div className="flex items-center gap-2 mb-2 p-2 bg-blue-50 rounded-lg hover:translate-x-1 transition-transform">
              <div className="text-xl">💬</div>
              <div className="text-sm text-gray-700">Mensagens pessoais de Jesus no seu WhatsApp</div>
            </div>
            <div className="flex items-center gap-2 mb-2 p-2 bg-blue-50 rounded-lg hover:translate-x-1 transition-transform">
              <div className="text-xl">🛡️</div>
              <div className="text-sm text-gray-700">Proteção espiritual e orientação divina</div>
            </div>
            <div className="flex items-center gap-2 mb-2 p-2 bg-blue-50 rounded-lg hover:translate-x-1 transition-transform">
              <div className="text-xl">❤️</div>
              <div className="text-sm text-gray-700">Fortalecimento da fé e proximidade com Deus</div>
            </div>
            <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg hover:translate-x-1 transition-transform">
              <div className="text-xl">🔄</div>
              <div className="text-sm text-gray-700">Renovação espiritual diária</div>
            </div>
          </div>
          
          {/* Banner de urgência */}
          <div className="bg-gradient-to-r from-[#0066cc] to-[#004080] p-3 rounded-xl text-white text-center mb-4 relative overflow-hidden border border-blue-300/30 shadow-md">
            <p className="text-sm font-bold mb-2">Tempo limitado: Garanta sua vaga para receber mensagens divinas</p>
            <div className="flex justify-center gap-2 mt-1 text-sm font-bold">
              <div className="bg-white/10 px-2 py-1 rounded-lg min-w-[24px] text-center">{hours.toString().padStart(2, '0')}</div>:
              <div className="bg-white/10 px-2 py-1 rounded-lg min-w-[24px] text-center">{minutes.toString().padStart(2, '0')}</div>:
              <div className="bg-white/10 px-2 py-1 rounded-lg min-w-[24px] text-center">{seconds.toString().padStart(2, '0')}</div>
            </div>
          </div>
          
          {/* Depoimentos */}
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 mb-4 shadow-sm">
            <h2 className="text-lg font-bold text-center text-[#0066cc] mb-2">
              O que dizem nossos assinantes
            </h2>
            <div className="bg-blue-50 rounded-lg p-3 mb-2">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-cover bg-center mr-2 border-2 border-[#0066cc] shadow-md" 
                     style={{backgroundImage: "url('https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop')"}}></div>
                <div className="text-xs font-semibold text-[#0066cc]">
                  Maria S., 42 anos
                </div>
              </div>
              <p className="text-xs text-gray-600 italic">
                "As mensagens diárias de Jesus mudaram completamente a minha vida. Sinto uma paz e conexão espiritual que nunca tinha experimentado antes."
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-cover bg-center mr-2 border-2 border-[#0066cc] shadow-md" 
                     style={{backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop')"}}></div>
                <div className="text-xs font-semibold text-[#0066cc]">
                  João P., 38 anos
                </div>
              </div>
              <p className="text-xs text-gray-600 italic">
                "Cada mensagem parece chegar exatamente quando preciso. É como se Jesus estivesse realmente falando diretamente comigo nos momentos mais necessários."
              </p>
            </div>
          </div>
          
          {/* Garantia */}
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 mb-4 shadow-sm border-2 border-[#00cc66] relative">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-[#00cc66] text-white px-3 py-0.5 rounded-full text-xs font-bold whitespace-nowrap">
              SATISFAÇÃO GARANTIDA
            </div>
            <div className="pt-4 sm:pt-2 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
              <div className="text-4xl text-[#00cc66] mb-2 sm:mb-0 sm:mr-3">✓</div>
              <div>
                <h3 className="font-bold text-[#0066cc] text-sm mb-1">Experimente sem risco por 30 dias!</h3>
                <p className="text-xs text-gray-600">
                  Se, por qualquer motivo, você sentir que essa experiência não ajudou a transformar sua fé e sua conexão com Deus, devolvemos 100% do seu investimento, sem perguntas.
                </p>
              </div>
            </div>
          </div>
          
          {/* Oferta limitada */}
          <div className="bg-gradient-to-r from-[#ff6600] to-[#ff8533] text-white text-center font-bold text-sm p-2 rounded-xl mb-4 border border-orange-300/30 shadow-md">
            Seu caminho para uma conexão mais profunda com Deus começa aqui!
          </div>
          
          {/* Planos */}
          <div className="mb-4">
            <p className="text-sm text-gray-700 text-center mb-4">
              Com base nas suas respostas, preparamos um plano exclusivo para ajudar você a fortalecer sua fé todos os dias. Escolha a melhor opção para iniciar sua jornada agora!
            </p>
            
            <h2 className="text-lg font-bold text-center text-[#0066cc] mb-3">
              Escolha seu plano de conexão
            </h2>
            
            {/* Plano 1 ano (mais barato) */}
            <div 
              className={`relative rounded-xl mb-3 overflow-hidden cursor-pointer shadow-sm bg-white flex items-center p-4 pt-6 border-2 ${selectedPlan === '1-year' ? 'border-[#0066cc]' : 'border-[#ff6600]'} hover:-translate-y-1 hover:shadow-md transition-all h-[72px]`}
              onClick={() => handlePlanSelect('1-year')}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#ff6600] text-white text-[10px] font-bold py-0.5 px-3 rounded-b-md shadow-sm">MAIS BARATO</div>
              
              <div className="relative flex items-center justify-center mr-3">
                <input 
                  type="radio" 
                  name="plan" 
                  className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full cursor-pointer checked:border-[#0066cc]"
                  checked={selectedPlan === '1-year'}
                  onChange={() => handlePlanSelect('1-year')}
                />
                {selectedPlan === '1-year' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0066cc]"></div>
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <div className="text-sm font-bold text-[#0066cc] uppercase">1 ANO</div>
                <div className="text-xs text-gray-600">
                  <span className="line-through bg-black/5 px-1 rounded mr-1">R$420</span>
                  <span className="font-semibold text-[#0066cc]">R$197</span>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-2 text-center min-w-[70px]">
                <div className="flex items-start justify-center">
                  <span className="text-[10px] font-bold text-[#0066cc]">R$</span>
                  <span className="text-xl font-bold text-[#0066cc] leading-none">0</span>
                  <span className="text-[10px] font-bold text-[#0066cc]">54</span>
                </div>
                <div className="text-[10px] text-[#0066cc] font-semibold mt-0.5">por dia</div>
              </div>
            </div>
            
            {/* Plano 1 mês (popular) */}
            <div 
              className={`relative rounded-xl mb-3 overflow-hidden cursor-pointer shadow-sm bg-white flex items-center p-4 pt-6 border-2 ${selectedPlan === '1-month' ? 'border-[#0066cc]' : 'border-[#00cc66]'} hover:-translate-y-1 hover:shadow-md transition-all h-[72px]`}
              onClick={() => handlePlanSelect('1-month')}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#00cc66] text-white text-[10px] font-bold py-0.5 px-3 rounded-b-md shadow-sm">MAIS POPULAR</div>
              
              <div className="relative flex items-center justify-center mr-3">
                <input 
                  type="radio" 
                  name="plan" 
                  className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full cursor-pointer checked:border-[#0066cc]"
                  checked={selectedPlan === '1-month'}
                  onChange={() => handlePlanSelect('1-month')}
                />
                {selectedPlan === '1-month' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0066cc]"></div>
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <div className="text-sm font-bold text-[#0066cc] uppercase">1 MÊS</div>
                <div className="text-xs text-gray-600">
                  <span className="line-through bg-black/5 px-1 rounded mr-1">R$35</span>
                  <span className="font-semibold text-[#0066cc]">R$20</span>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-2 text-center min-w-[70px]">
                <div className="flex items-start justify-center">
                  <span className="text-[10px] font-bold text-[#0066cc]">R$</span>
                  <span className="text-xl font-bold text-[#0066cc] leading-none">0</span>
                  <span className="text-[10px] font-bold text-[#0066cc]">67</span>
                </div>
                <div className="text-[10px] text-[#0066cc] font-semibold mt-0.5">por dia</div>
              </div>
            </div>
            
            {/* Plano 7 dias */}
            <div 
              className={`relative rounded-xl mb-3 overflow-hidden cursor-pointer shadow-sm bg-white flex items-center p-4 border-2 ${selectedPlan === '7-day' ? 'border-[#0066cc]' : 'border-[#0066cc]/30'} hover:-translate-y-1 hover:shadow-md transition-all h-[72px]`}
              onClick={() => handlePlanSelect('7-day')}
            >
              <div className="relative flex items-center justify-center mr-3">
                <input 
                  type="radio" 
                  name="plan" 
                  className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full cursor-pointer checked:border-[#0066cc]"
                  checked={selectedPlan === '7-day'}
                  onChange={() => handlePlanSelect('7-day')}
                />
                {selectedPlan === '7-day' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0066cc]"></div>
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <div className="text-sm font-bold text-[#0066cc] uppercase">7 DIAS</div>
                <div className="text-xs text-gray-600">
                  <span className="line-through bg-black/5 px-1 rounded mr-1">R$12</span>
                  <span className="font-semibold text-[#0066cc]">R$7</span>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-2 text-center min-w-[70px]">
                <div className="flex items-start justify-center">
                  <span className="text-[10px] font-bold text-[#0066cc]">R$</span>
                  <span className="text-xl font-bold text-[#0066cc] leading-none">1</span>
                  <span className="text-[10px] font-bold text-[#0066cc]">00</span>
                </div>
                <div className="text-[10px] text-[#0066cc] font-semibold mt-0.5">por dia</div>
              </div>
            </div>
          </div>
          
          {/* Botão de compra melhorado */}
          <div className="relative py-3">
            {/* Setas apontando para o botão */}
            <div className="absolute -top-2 left-6 text-lg text-[#ff6600] transform -rotate-45 animate-bounce">⤵</div>
            <div className="absolute -top-2 right-6 text-lg text-[#ff6600] transform rotate-45 animate-bounce">⤵</div>
            
            <button 
              onClick={handleGetPlan}
              className="w-full relative overflow-hidden bg-gradient-to-r from-[#ff6600] to-[#ff8533] hover:from-[#ff8533] hover:to-[#ff6600] text-white rounded-full py-4 px-4 text-base font-bold cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 transform"
            >
              {/* Efeito de brilho */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer"></span>
              
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">🙏</span>
                <span className="leading-tight">QUERO RECEBER<br/>MENSAGENS DE JESUS</span>
                <span className="text-2xl">➡️</span>
              </div>
            </button>
            
            {/* Badge de pessoas comprando */}
            <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 bg-[#00cc66] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap flex items-center justify-center">
              <span className="animate-pulse mr-1 inline-block">●</span> 
              <span>{buyerCount} pessoas comprando agora</span>
            </div>
          </div>
          
          {/* Garantia e segurança */}
          <div className="text-center mt-6">
            <div className="flex items-center justify-center mb-2">
              <div className="text-base mr-1">🔒</div>
              <p className="text-xs text-gray-700">Pagamento 100% seguro e criptografado</p>
            </div>
            
            {/* Botão de teste grátis */}
            <div className="mt-8 mb-2">
              <ParamLink 
                to="/free-trial" 
                className="text-[#0066cc] text-sm font-medium border border-[#0066cc]/30 px-4 py-2 rounded-full hover:bg-blue-50 transition-all inline-block"
              >
                Ainda não tenho certeza se vou querer
              </ParamLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer; 