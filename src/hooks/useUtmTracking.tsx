import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { initParamsCapture, getAllParams, addParamsToUrl, processLink } from '../utils/utm';

/**
 * Hook personalizado para adicionar rastreamento de parâmetros em toda a aplicação
 */
const useParamTracking = () => {
  const location = useLocation();
  
  // Inicializar a captura de parâmetros quando a página carregar ou a URL mudar
  useEffect(() => {
    initParamsCapture();
  }, [location.search]);
  
  // Função para redirecionar preservando parâmetros
  const redirect = useCallback((url: string) => {
    const processedUrl = processLink(url);
    window.location.href = processedUrl;
  }, []);
  
  return {
    processUrl: processLink,
    redirect,
    urlParams: getAllParams()
  };
};

export default useParamTracking; 