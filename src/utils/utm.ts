/**
 * Utilitário para gerenciar parâmetros de URL e cookies
 */

/**
 * Obtém todos os parâmetros da URL atual
 */
export const getUrlParams = (): Record<string, string> => {
  const urlParams = new URLSearchParams(window.location.search);
  const params: Record<string, string> = {};
  
  // Capturar todos os parâmetros da URL
  urlParams.forEach((value, key) => {
    params[key] = value;
  });
  
  return params;
};

/**
 * Salva os parâmetros em cookies para uso futuro
 */
export const saveParamsToCookies = (params: Record<string, string>): void => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30); // Cookie válido por 30 dias
  
  Object.entries(params).forEach(([key, value]) => {
    document.cookie = `${key}=${value}; expires=${expirationDate.toUTCString()}; path=/; SameSite=Lax`;
  });
};

/**
 * Recupera os parâmetros dos cookies
 */
export const getParamsFromCookies = (): Record<string, string> => {
  const cookies = document.cookie.split('; ');
  const params: Record<string, string> = {};
  
  cookies.forEach(cookie => {
    if (cookie && cookie.includes('=')) {
      const [name, value] = cookie.split('=');
      params[name] = value;
    }
  });
  
  return params;
};

/**
 * Combina os parâmetros da URL e dos cookies
 */
export const getAllParams = (): Record<string, string> => {
  const urlParams = getUrlParams();
  const cookieParams = getParamsFromCookies();
  
  // Prioriza os parâmetros da URL sobre os cookies
  return { ...cookieParams, ...urlParams };
};

/**
 * Adiciona parâmetros a uma URL
 */
export const addParamsToUrl = (url: string, params: Record<string, string>): string => {
  if (Object.keys(params).length === 0) {
    return url;
  }
  
  const urlObj = new URL(url, window.location.origin);
  
  // Adicionar parâmetros à URL
  Object.entries(params).forEach(([key, value]) => {
    urlObj.searchParams.set(key, value);
  });
  
  return urlObj.toString();
};

/**
 * Inicializa a captura de parâmetros e salva em cookies
 * Deve ser chamado ao carregar a aplicação
 */
export const initParamsCapture = (): void => {
  const params = getUrlParams();
  if (Object.keys(params).length > 0) {
    saveParamsToCookies(params);
  }
};

/**
 * Processa link para adicionar parâmetros
 */
export const processLink = (originalUrl: string): string => {
  // Não processar URLs vazias ou ancoras (#)
  if (!originalUrl || originalUrl.startsWith('#')) {
    return originalUrl;
  }
  
  // Se for uma URL relativa, não precisa de processamento especial para domínio
  if (originalUrl.startsWith('/')) {
    const params = getAllParams();
    const urlWithParams = addParamsToUrl(originalUrl, params);
    
    // Retornar apenas o path com os query params, sem o domínio
    try {
      const urlObj = new URL(urlWithParams, window.location.origin);
      return urlObj.pathname + urlObj.search + urlObj.hash;
    } catch (e) {
      return urlWithParams;
    }
  }
  
  try {
    // Para URLs externas ou completas, adiciona todos os parâmetros
    const allParams = getAllParams();
    return addParamsToUrl(originalUrl, allParams);
  } catch (e) {
    // Se não for uma URL válida, retorna sem modificação
    return originalUrl;
  }
}; 