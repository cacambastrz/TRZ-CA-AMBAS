import React from 'react';
import { Zap, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { TRZ_ASSETS } from '../utils/assets.ts';
import { getWhatsAppUrl, COMPANY_CNPJ, COMPANY_NAME } from '../utils/whatsapp.ts';
import { WhatsAppIcon } from '../components/WhatsAppIcon.tsx';

export const ContatoBioPage: React.FC = () => {
  // Direct contextual URLs
  const ctaPrincipal = getWhatsAppUrl(
    'Olá! Gostaria de solicitar um orçamento rápido de caçamba com a TRZ Caçambas.'
  );
  const ctaReforma = getWhatsAppUrl(
    'Olá! Preciso de um orçamento de caçamba para uma Reforma.'
  );
  const ctaConstrucao = getWhatsAppUrl(
    'Olá! Gostaria de um orçamento de caçamba para Construção Civil.'
  );
  const ctaDemolicao = getWhatsAppUrl(
    'Olá! Preciso de caçamba para Demolição / Retirada de Entulho.'
  );
  const ctaUrgente = getWhatsAppUrl(
    'Olá! Preciso de uma caçamba com urgência (entrega em até 1h). Vocês têm disponibilidade para minha cidade?'
  );

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
            className="w-full h-auto aspect-[16/9] object-cover block"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* 6. BOTÃO PRINCIPAL DE ALTA CONVERSÃO NO WHATSAPP COM LOGO OFICIAL */}
        <a
          href={ctaPrincipal}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.98] text-white font-black text-base uppercase tracking-wider shadow-2xl flex items-center justify-center gap-3 transition-all duration-200 mb-4 ring-4 ring-[#25D366]/20"
        >
          <WhatsAppIcon className="w-6 h-6 text-white shrink-0" />
          <span>Falar no WhatsApp Agora</span>
          <ArrowRight className="w-5 h-5 ml-1" />
        </a>

        {/* 7. Foto das Caçambas TRZ - Enquadramento alinhado sem espaços */}
        <div className="w-full rounded-2xl overflow-hidden border border-white/15 shadow-xl mb-5 bg-slate-900">
          <img
            src={TRZ_ASSETS.cacambas}
            alt="Caçambas TRZ para entulho"
            className="w-full h-auto aspect-[16/9] sm:aspect-[2/1] object-cover block"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* 8. Botões de Escolha Rápida por Perfil (1 Clique Direto com Logo WhatsApp) */}
        <div className="w-full space-y-2.5 mb-6">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block text-center mb-1">
            Escolha seu tipo de obra:
          </span>

          <a
            href={ctaReforma}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-3.5 rounded-xl bg-white/10 hover:bg-[#DE722B] border border-white/15 text-white font-bold text-xs uppercase tracking-wide flex items-center justify-between transition-colors shadow-sm"
          >
            <span className="flex items-center gap-2.5">
              <span className="w-2 h-2 bg-[#DE722B] transform rotate-45" />
              <span>Caçamba para Reforma</span>
            </span>
            <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
          </a>

          <a
            href={ctaConstrucao}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-3.5 rounded-xl bg-white/10 hover:bg-[#DE722B] border border-white/15 text-white font-bold text-xs uppercase tracking-wide flex items-center justify-between transition-colors shadow-sm"
          >
            <span className="flex items-center gap-2.5">
              <span className="w-2 h-2 bg-[#DE722B] transform rotate-45" />
              <span>Caçamba para Construção</span>
            </span>
            <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
          </a>

          <a
            href={ctaDemolicao}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-3.5 rounded-xl bg-white/10 hover:bg-[#DE722B] border border-white/15 text-white font-bold text-xs uppercase tracking-wide flex items-center justify-between transition-colors shadow-sm"
          >
            <span className="flex items-center gap-2.5">
              <span className="w-2 h-2 bg-[#DE722B] transform rotate-45" />
              <span>Caçamba para Demolição</span>
            </span>
            <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
          </a>

          <a
            href={ctaUrgente}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-3.5 rounded-xl bg-[#DE722B]/20 hover:bg-[#DE722B] border border-[#DE722B]/40 text-white font-bold text-xs uppercase tracking-wide flex items-center justify-between transition-colors shadow-sm"
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
            href={ctaPrincipal}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-5 rounded-xl bg-[#25D366] text-white font-black text-sm uppercase tracking-wider shadow-2xl flex items-center justify-center gap-2.5 border border-white/20 active:scale-95 transition-transform"
          >
            <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
            <span>Pedir no WhatsApp</span>
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
