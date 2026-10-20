import React, { useState, useEffect, useRef } from 'react';
import { Zap, MapPin, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { TRZ_ASSETS } from '../utils/assets.ts';
import { COMPANY_CNPJ, COMPANY_NAME, WHATSAPP_RAW_NUMBER } from '../utils/whatsapp.ts';
import { WhatsAppIcon } from '../components/WhatsAppIcon.tsx';

export const ContatoBioPage: React.FC = () => {
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);
  const redirectedRef = useRef<boolean>(false);
  const mainButtonRef = useRef<HTMLAnchorElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Opens WhatsApp directly in the mobile app without stopping at the browser api page
  const openDirectWhatsApp = (customMessage?: string) => {
    if (redirectedRef.current) return;
    redirectedRef.current = true;
    setIsRedirecting(true);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    const defaultMsg = 'Olá! Gostaria de solicitar um orçamento rápido de caçamba com a TRZ Caçambas.';
    const msg = encodeURIComponent(customMessage || defaultMsg);
    const nativeAppUrl = `whatsapp://send?phone=${WHATSAPP_RAW_NUMBER}&text=${msg}`;
    const webFallbackUrl = `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${msg}`;

    // Brief animation duration (600ms) to display the feedback message clearly, then dispatch direct link
    setTimeout(() => {
      try {
        window.location.href = nativeAppUrl;
      } catch {
        window.location.href = webFallbackUrl;
      }

      // Safety fallback to web url if native protocol is unhandled
      setTimeout(() => {
        window.location.href = webFallbackUrl;
      }, 1500);
    }, 600);
  };

  // Dispatches conversion events across all tag managers and pixel standards
  const triggerConversionTracking = (origin: string = 'contato_bio') => {
    try {
      if (typeof window !== 'undefined') {
        const win = window as unknown as {
          dataLayer?: Array<Record<string, unknown>>;
          gtag?: (...args: unknown[]) => void;
          fbq?: (...args: unknown[]) => void;
        };

        // 1. Google Tag Manager (GTM DataLayer)
        if (win.dataLayer) {
          win.dataLayer.push({
            event: 'conversion',
            event_category: 'whatsapp',
            event_action: 'click',
            event_label: origin,
            value: 1,
          });
          win.dataLayer.push({
            event: 'whatsapp_click',
            origin: origin,
          });
        }

        // 2. Google Ads & Google Analytics 4 (gtag)
        if (typeof win.gtag === 'function') {
          win.gtag('event', 'conversion', {
            send_to: 'whatsapp_click',
            event_category: 'lead',
            event_label: origin,
          });
          win.gtag('event', 'generate_lead', {
            currency: 'BRL',
            value: 1,
            lead_type: 'whatsapp',
          });
          win.gtag('event', 'contact', {
            method: 'whatsapp',
          });
        }

        // 3. Meta Pixel (Facebook Ads)
        if (typeof win.fbq === 'function') {
          win.fbq('track', 'Contact');
          win.fbq('track', 'Lead');
        }

        // 4. Standard DOM Custom Events for custom trackers
        const eventDetail = { detail: { origin, timestamp: Date.now() } };
        window.dispatchEvent(new CustomEvent('conversion', eventDetail));
        window.dispatchEvent(new CustomEvent('whatsapp_click', eventDetail));
        document.dispatchEvent(new CustomEvent('conversion', eventDetail));
      }
    } catch {
      // Ignored
    }
  };

  // 5-second automatic trigger that executes a REAL synthetic DOM click on the button element
  // This guarantees Google Ads, Meta Pixel, GTM and analytics record it identical to a manual finger tap
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      if (!redirectedRef.current && mainButtonRef.current) {
        // Dispatch bubbling MouseEvent so DOM-level click listeners and GTM auto-event listeners capture it
        const clickEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window,
        });
        mainButtonRef.current.dispatchEvent(clickEvent);
      }
    }, 5000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleMainClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    triggerConversionTracking('btn_principal');
    openDirectWhatsApp();
  };

  const handleCategoryClick = (e: React.MouseEvent<HTMLAnchorElement>, msg: string) => {
    e.preventDefault();
    triggerConversionTracking('btn_categoria');
    openDirectWhatsApp(msg);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071526] via-[#0D2340] to-[#081628] text-white flex flex-col items-center justify-between px-4 py-6 sm:py-10 select-none">
      
      {/* Container vertical estilo link-in-bio, sem menu e sem saída */}
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        
        {/* 1. Logo Oficial TRZ sem distorção */}
        <div className="bg-white/95 px-5 py-3 rounded-2xl shadow-xl border border-white/20 mb-5 flex items-center justify-center">
          <img
            src={TRZ_ASSETS.logo}
            alt={COMPANY_NAME}
            className="h-11 sm:h-12 w-auto object-contain"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* 2. Badge de Agilidade: Entrega em até 1h */}
        <div className="inline-flex items-center gap-2 bg-[#DE722B] text-white px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-lg mb-3 animate-pulse">
          <Zap className="w-4 h-4 fill-white" />
          <span>Entrega em até 1h</span>
        </div>

        {/* 3. Título de Conversão */}
        <h1 className="text-2xl sm:text-3xl font-black text-center text-white tracking-tight leading-tight mb-2">
          Solicitar Orçamento
        </h1>

        {/* 4. Chamada de Localidade: Atendemos sua cidade */}
        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-200 mb-5 text-center">
          <MapPin className="w-4 h-4 text-[#DE722B] shrink-0" />
          <span className="font-semibold text-white">Atendemos sua cidade</span>
          <span className="text-slate-400">·</span>
          <span className="text-slate-300">Consulta imediata</span>
        </div>

        {/* 5. Foto do Caminhão no Topo - Enquadramento perfeito sem cortes */}
        <div className="w-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl mb-4 bg-slate-900">
          <img
            src={TRZ_ASSETS.caminhao}
            alt="Caminhão TRZ Caçambas"
            className="w-full h-auto aspect-[4/3] object-cover block"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* 6. BOTÃO PRINCIPAL DE ALTA CONVERSÃO NO WHATSAPP COM DISPARO REAL DE CLIQUE E ANIMAÇÃO */}
        <a
          ref={mainButtonRef}
          id="btn-whatsapp-principal"
          data-conversion="whatsapp"
          data-gtm="whatsapp-conversion"
          data-track="lead"
          role="button"
          href={`whatsapp://send?phone=${WHATSAPP_RAW_NUMBER}&text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento rápido de caçamba com a TRZ Caçambas.')}`}
          onClick={handleMainClick}
          aria-live="polite"
          className={`w-full py-4 px-5 rounded-2xl text-white font-black text-center uppercase tracking-wider shadow-2xl flex items-center justify-center gap-3 transition-all duration-300 mb-4 ring-4 cursor-pointer ${
            isRedirecting
              ? 'bg-emerald-600 ring-emerald-400 scale-[1.02] shadow-emerald-500/40 animate-pulse'
              : 'bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.98] ring-[#25D366]/20'
          }`}
        >
          {isRedirecting ? (
            <>
              <div className="relative flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-6 h-6 text-white animate-bounce" />
                <Loader2 className="w-8 h-8 text-white absolute -inset-1 animate-spin opacity-70" />
              </div>
              <span className="text-xs sm:text-sm font-bold normal-case tracking-normal text-white leading-tight">
                Você está sendo redirecionado para um de nossos atendentes, aguarde...
              </span>
            </>
          ) : (
            <>
              <WhatsAppIcon className="w-6 h-6 text-white shrink-0" />
              <span className="text-sm sm:text-base">Falar no WhatsApp Agora</span>
              <ArrowRight className="w-5 h-5 ml-1 shrink-0" />
            </>
          )}
        </a>

        {/* 7. Foto das Caçambas TRZ - Enquadramento alinhado sem espaços */}
        <div className="w-full rounded-2xl overflow-hidden border border-white/15 shadow-xl mb-5 bg-slate-900">
          <img
            src={TRZ_ASSETS.cacambas}
            alt="Caçambas TRZ para entulho"
            className="w-full h-auto aspect-[4/3] object-cover object-center block"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* 8. Botões de Escolha Rápida por Perfil (1 Clique Direto com Logo WhatsApp) */}
        <div className="w-full space-y-2.5 mb-6">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block text-center mb-1">
            Ou selecione diretamente o tipo de obra:
          </span>

          <a
            href={`whatsapp://send?phone=${WHATSAPP_RAW_NUMBER}&text=${encodeURIComponent('Olá! Preciso de um orçamento de caçamba para uma Reforma.')}`}
            onClick={(e) => handleCategoryClick(e, 'Olá! Preciso de um orçamento de caçamba para uma Reforma.')}
            className="w-full p-3.5 rounded-xl bg-white/10 hover:bg-[#DE722B] border border-white/15 text-white font-bold text-xs uppercase tracking-wide flex items-center justify-between transition-colors shadow-sm cursor-pointer"
          >
            <span className="flex items-center gap-2.5">
              <span className="w-2 h-2 bg-[#DE722B] transform rotate-45" />
              <span>Caçamba para Reforma</span>
            </span>
            <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
          </a>

          <a
            href={`whatsapp://send?phone=${WHATSAPP_RAW_NUMBER}&text=${encodeURIComponent('Olá! Gostaria de um orçamento de caçamba para Construção Civil.')}`}
            onClick={(e) => handleCategoryClick(e, 'Olá! Gostaria de um orçamento de caçamba para Construção Civil.')}
            className="w-full p-3.5 rounded-xl bg-white/10 hover:bg-[#DE722B] border border-white/15 text-white font-bold text-xs uppercase tracking-wide flex items-center justify-between transition-colors shadow-sm cursor-pointer"
          >
            <span className="flex items-center gap-2.5">
              <span className="w-2 h-2 bg-[#DE722B] transform rotate-45" />
              <span>Caçamba para Construção</span>
            </span>
            <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
          </a>

          <a
            href={`whatsapp://send?phone=${WHATSAPP_RAW_NUMBER}&text=${encodeURIComponent('Olá! Preciso de caçamba para Demolição / Retirada de Entulho.')}`}
            onClick={(e) => handleCategoryClick(e, 'Olá! Preciso de caçamba para Demolição / Retirada de Entulho.')}
            className="w-full p-3.5 rounded-xl bg-white/10 hover:bg-[#DE722B] border border-white/15 text-white font-bold text-xs uppercase tracking-wide flex items-center justify-between transition-colors shadow-sm cursor-pointer"
          >
            <span className="flex items-center gap-2.5">
              <span className="w-2 h-2 bg-[#DE722B] transform rotate-45" />
              <span>Caçamba para Demolição</span>
            </span>
            <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
          </a>

          <a
            href={`whatsapp://send?phone=${WHATSAPP_RAW_NUMBER}&text=${encodeURIComponent('Olá! Preciso de uma caçamba com urgência (entrega em até 1h). Vocês têm disponibilidade para minha cidade?')}`}
            onClick={(e) => handleCategoryClick(e, 'Olá! Preciso de uma caçamba com urgência (entrega em até 1h). Vocês têm disponibilidade para minha cidade?')}
            className="w-full p-3.5 rounded-xl bg-[#DE722B]/20 hover:bg-[#DE722B] border border-[#DE722B]/40 text-white font-bold text-xs uppercase tracking-wide flex items-center justify-between transition-colors shadow-sm cursor-pointer"
          >
            <span className="flex items-center gap-2.5">
              <Zap className="w-4 h-4 text-amber-300" />
              <span>Preciso com Urgência (Até 1h)</span>
            </span>
            <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
          </a>
        </div>

        {/* 9. Benefícios Rápidos em Lista Limpa */}
        <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 text-xs text-slate-300 space-y-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#DE722B] shrink-0" />
            <span>Sem burocracia ou cadastros demorados</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#DE722B] shrink-0" />
            <span>Colocação e retirada programadas</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#DE722B] shrink-0" />
            <span>Descarte ambientalmente responsável</span>
          </div>
        </div>

        {/* 10. Botão Flutuante de Fixação Inferior (Mobile Sticky) com Logo WhatsApp */}
        <div className="fixed bottom-3 left-4 right-4 max-w-md mx-auto z-50 sm:hidden">
          <a
            href={`whatsapp://send?phone=${WHATSAPP_RAW_NUMBER}&text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento rápido de caçamba com a TRZ Caçambas.')}`}
            onClick={handleMainClick}
            className="w-full py-3.5 px-5 rounded-xl bg-[#25D366] text-white font-black text-sm uppercase tracking-wider shadow-2xl flex items-center justify-center gap-2.5 border border-white/20 active:scale-95 transition-transform"
          >
            <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
            <span>{isRedirecting ? 'Conectando...' : 'Pedir no WhatsApp'}</span>
          </a>
        </div>

      </div>

      {/* 11. Rodapé Minimalista: Mostra APENAS CNPJ */}
      <footer className="w-full max-w-md mx-auto text-center pt-6 pb-12 sm:pb-4 border-t border-white/10 text-[11px] text-slate-400 space-y-1">
        <div className="font-bold text-slate-300 tracking-wide">
          {COMPANY_NAME}
        </div>
        <div className="font-mono text-slate-400">
          CNPJ: {COMPANY_CNPJ}
        </div>
        <div className="text-[10px] text-slate-500 pt-1">
          Atendimento e orçamentos exclusivos via WhatsApp.
        </div>
      </footer>

    </div>
  );
};
