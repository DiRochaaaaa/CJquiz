import React, { useState, useEffect } from 'react';
import { questions, proofs } from '../data/quizData';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showingProof, setShowingProof] = useState(false);
  const [currentProofIndex, setCurrentProofIndex] = useState(-1);
  const [showLoading, setShowLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState('');
  const navigate = useNavigate();

  // Atualiza o estado quando as respostas mudam
  useEffect(() => {
    // Verifica se acabamos de responder a 3ª, 6ª ou 9ª pergunta
    if (answers.length > 0 && answers.length % 3 === 0) {
      const proofIndex = Math.floor(answers.length / 3) - 1;
      setCurrentProofIndex(proofIndex);
      setShowingProof(true);
    }
  }, [answers]);

  // Gerencia o progresso da tela de carregamento
  useEffect(() => {
    if (showLoading) {
      const messages = [
        "Analisando suas respostas...",
        "Identificando seu perfil espiritual...",
        "Calculando sua afinidade com os guias...",
        "Preparando sua jornada personalizada...",
        "Finalizando sua análise espiritual..."
      ];
      
      // Duração total: 5000ms (5 segundos)
      const totalDuration = 5000;
      const interval = 50; // 50ms por incremento
      const incrementPerStep = 100 / (totalDuration / interval);
      
      let progress = 0;
      const timer = setInterval(() => {
        progress += incrementPerStep;
        const roundedProgress = Math.min(Math.round(progress), 100);
        setLoadingProgress(roundedProgress);
        
        // Atualiza a mensagem em momentos específicos
        if (roundedProgress >= 20 && roundedProgress < 40) setLoadingMessage(messages[1]);
        if (roundedProgress >= 40 && roundedProgress < 60) setLoadingMessage(messages[2]);
        if (roundedProgress >= 60 && roundedProgress < 80) setLoadingMessage(messages[3]);
        if (roundedProgress >= 80 && roundedProgress < 100) setLoadingMessage(messages[4]);
        
        if (roundedProgress >= 100) {
          clearInterval(timer);
          // Navega para a oferta após o carregamento completo
          navigate('/offer', { state: { answers } });
        }
      }, interval);
      
      // Mensagem inicial
      setLoadingMessage(messages[0]);
      
      return () => clearInterval(timer);
    }
  }, [showLoading, navigate, answers]);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    // Se for a última pergunta, mostra a tela de carregamento
    if (currentQuestionIndex + 1 >= questions.length) {
      setShowLoading(true);
      return;
    }

    // Se não for múltiplo de 3, avança para a próxima pergunta
    if (newAnswers.length % 3 !== 0) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    // Se for múltiplo de 3, a prova social será mostrada pelo useEffect
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      // Se estiver mostrando uma prova, volta para a pergunta
      if (showingProof) {
        setShowingProof(false);
      } else {
        // Remove a última resposta e volta para a pergunta anterior
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        setAnswers(prev => prev.slice(0, -1));
      }
    }
  };

  const handleContinue = () => {
    // Esconde a prova e avança para a próxima pergunta
    setShowingProof(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  // Renderiza a tela de carregamento
  if (showLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0066cc] to-[#004080] flex flex-col items-center justify-center p-6">
        <div className="loading-container bg-white/90 backdrop-blur-md rounded-2xl p-8 max-w-md w-full shadow-lg text-center">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6">
              <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-[#ff6600]"></div>
            </div>
            <h2 className="text-2xl font-bold text-[#0066cc] mb-4">
              Sua Análise Espiritual Está Sendo Preparada
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {loadingMessage}
            </p>
            <div className="h-3 w-full bg-gray-200 rounded-full mb-2">
              <div 
                className="h-3 bg-[#ff6600] rounded-full transition-all duration-300 ease-out"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500">{loadingProgress}%</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-sm text-gray-600 italic">
              "Estamos analisando suas respostas para criar uma experiência totalmente personalizada para sua jornada espiritual."
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Renderiza a prova social
  if (showingProof && currentProofIndex >= 0 && currentProofIndex < proofs.length) {
    const proof = proofs[currentProofIndex];
    
    return (
      <div className="min-h-screen bg-[#0099ff] flex flex-col items-center justify-center p-6">
        <div className="proof-container bg-white/80 backdrop-blur-md rounded-2xl p-6 max-w-md w-full shadow-lg">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#0066cc] mb-2">
              ✨ Descubra como outras pessoas transformaram sua vida espiritual
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {proof.message}
            </p>
            <div className="bg-[#f5f5f5] rounded-lg p-4">
              <div className="flex items-center mb-3">
                {currentProofIndex === 0 && (
                  <div className="w-10 h-10 rounded-full bg-cover bg-center mr-3 border-2 border-[#0066cc] shadow-md" 
                       style={{backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop')"}}></div>
                )}
                {currentProofIndex === 1 && (
                  <div className="w-10 h-10 rounded-full bg-cover bg-center mr-3 border-2 border-[#0066cc] shadow-md" 
                       style={{backgroundImage: "url('https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop')"}}></div>
                )}
                {currentProofIndex === 2 && (
                  <div className="w-10 h-10 rounded-full bg-cover bg-center mr-3 border-2 border-[#0066cc] shadow-md" 
                       style={{backgroundImage: "url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop')"}}></div>
                )}
                <div className="text-sm font-semibold text-[#0066cc]">
                  {proof.testimonial.author}, {proof.testimonial.age} anos
                </div>
              </div>
              <p className="text-gray-600 italic">
                "{proof.testimonial.text}"
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleBack}
              className="w-1/3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-full transition-colors duration-200"
            >
              Voltar
            </button>
            <button
              onClick={handleContinue}
              className="w-2/3 bg-[#ff6600] hover:bg-[#ff8533] text-white font-bold py-3 px-6 rounded-full transition-colors duration-200"
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Renderiza a pergunta atual
  return (
    <div className="min-h-screen bg-[#0099ff] flex flex-col items-center justify-center p-6">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 max-w-md w-full shadow-lg">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-[#0066cc]">
              Pergunta {currentQuestionIndex + 1} de {questions.length}
            </h2>
            <div className="h-1 flex-1 bg-gray-200 rounded-full ml-4">
              <div
                className="h-1 bg-[#ff6600] rounded-full progress-bar"
                style={{
                  width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                }}
              />
            </div>
          </div>
          <p className="text-xl text-gray-700 mb-6">{questions[currentQuestionIndex].text}</p>
          <div className="space-y-3">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="quiz-option w-full bg-white hover:bg-gray-50 border-2 border-gray-200 rounded-xl p-4 flex items-center transition-colors duration-200"
              >
                <span className="text-2xl mr-3">{option.emoji}</span>
                <span className="text-left text-gray-700">{option.text}</span>
              </button>
            ))}
          </div>
          {currentQuestionIndex > 0 && (
            <button
              onClick={handleBack}
              className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-full transition-colors duration-200"
            >
              Voltar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;