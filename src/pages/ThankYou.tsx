import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-8">
            <MessageCircle className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Parabéns! Sua jornada espiritual começa agora
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Em breve você receberá um WhatsApp com as instruções para começar sua conexão com Jesus
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Próximos passos:
            </h2>
            <ol className="text-left space-y-4">
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  1
                </span>
                <span>Aguarde nossa mensagem no WhatsApp</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  2
                </span>
                <span>Salve nosso número em seus contatos</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  3
                </span>
                <span>Comece sua jornada de transformação espiritual</span>
              </li>
            </ol>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ThankYou;