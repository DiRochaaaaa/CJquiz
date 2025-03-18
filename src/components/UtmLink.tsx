import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { getAllParams, processLink } from '../utils/utm';

// Props para links internos (usando react-router-dom)
interface ParamLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
  external?: boolean;
}

// Props para links externos (usando tag <a>)
interface ParamExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external: true;
}

/**
 * Componente de Link personalizado que preserva todos os parâmetros da URL
 * Pode ser usado para navegação interna (via react-router) ou externa (via <a>)
 */
const ParamLink = (props: ParamLinkProps | ParamExternalLinkProps) => {
  // Se for um link externo, usamos a tag <a>
  if ('external' in props && props.external === true && 'href' in props) {
    const { href, external, ...restProps } = props;
    const processedHref = processLink(href);
    
    return <a href={processedHref} {...restProps} />;
  }
  
  // Se for um link interno, usamos o Link do react-router
  const { to, external, ...restProps } = props as ParamLinkProps;
  
  // Para links internos que são URLs completas (não caminhos relativos)
  if (typeof to === 'string' && !to.startsWith('/') && !to.startsWith('#')) {
    const processedTo = processLink(to);
    return <a href={processedTo} {...restProps} />;
  }
  
  // Para links internos que são caminhos relativos
  if (typeof to === 'string') {
    const processedTo = processLink(to);
    
    // Para manter compatibilidade com o formato esperado pelo react-router
    const linkState = {
      ...((restProps as any).state || {}),
      urlParams: getAllParams()
    };
    
    return <Link to={processedTo} state={linkState} {...restProps} />;
  }
  
  // Caso seja um objeto de location, passa direto
  return <Link to={to} {...restProps} />;
};

export default ParamLink; 