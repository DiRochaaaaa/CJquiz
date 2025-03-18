import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Componente responsável por carregar os pixels de rastreamento
const Pixels = () => {
  const location = useLocation();

  // Função para adicionar scripts ao head
  const addScript = (id: string, content: string) => {
    const script = document.createElement('script');
    script.id = id;
    script.innerHTML = content;
    script.async = true;
    document.head.appendChild(script);
  };

  // Função para adicionar scripts externos
  const addExternalScript = (id: string, src: string) => {
    const script = document.createElement('script');
    script.id = id;
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  };

  // Função para recarregar os pixels quando a rota mudar
  const triggerPageView = () => {
    if (window.ttq) {
      window.ttq.page();
    }
    
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
    
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_location: window.location.href,
        page_path: location.pathname,
        page_title: document.title
      });
    }
  };

  // Carrega os pixels apenas uma vez
  useEffect(() => {
    // TikTok Pixel
    if (!document.getElementById('tiktok-pixel')) {
      addScript('tiktok-pixel', `
        !function (w, d, t) {
          w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
        var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
        ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};

        ttq.load('CVATNOJC77UC3LGT6QV0');
        ttq.page();
        }(window, document, 'ttq');
      `);
    }

    // Google Tag
    if (!document.getElementById('google-tag')) {
      addExternalScript('google-tag-manager', 'https://www.googletagmanager.com/gtag/js?id=AW-16886748311');
      addScript('google-tag', `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'AW-16886748311');
      `);
    }

    // Meta Pixel
    if (!document.getElementById('meta-pixel')) {
      addScript('meta-pixel', `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1351150655912314');
        fbq('track', 'PageView');
      `);

      // Meta Pixel NoScript (fallback)
      const noscript = document.createElement('noscript');
      const img = document.createElement('img');
      img.height = 1;
      img.width = 1;
      img.style.display = 'none';
      img.src = 'https://www.facebook.com/tr?id=1351150655912314&ev=PageView&noscript=1';
      noscript.appendChild(img);
      document.body.appendChild(noscript);
    }
  }, []);

  // Dispara eventos de pageview quando a rota muda
  useEffect(() => {
    triggerPageView();
  }, [location]);

  return null; // Componente não renderiza nada visualmente
};

// Adiciona a declaração de tipo para Window
declare global {
  interface Window {
    ttq: any;
    fbq: any;
    gtag: any;
    dataLayer: any;
  }
}

export default Pixels; 