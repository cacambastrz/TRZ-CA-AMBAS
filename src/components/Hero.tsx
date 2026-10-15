import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Clock, Globe2 } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY_PHONE, COMPANY_CNPJ } from '../utils/whatsapp.ts';
import { TRZ_ASSETS } from '../utils/assets.ts';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#0D2340] text-white overflow-hidden">
      {/* Geometric Rhombus Accent Details */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 border-2 border-white transform rotate-45" />
        <div className="absolute top-1/2 -right-12 w-64 h-64 border border-[#DE722B] transform rotate-45" />
        <div className="absolute -bottom-24 left-1/3 w-80 h-80 border-2 border-white/40 transform rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
        {/*
          Mobile Rule: "Mobile: foto aparece logo abaixo do cabeçalho, antes do texto."
          Implementation:
          - Image container: order-1 lg:order-2
          - Text container: order-2 lg:order-1
        */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
          
          {/* MOBILE ORDER 1 / DESKTOP ORDER 2: HERO PHOTOGRAPHY */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative group">
              {/* Decorative Geometric Rhombus Accent Corners */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#DE722B] transform rotate-45 z-20 shadow-lg hidden sm:block" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-[#DE722B] transform rotate-45 z-20 shadow-lg hidden sm:block" />

              {/* Main Image Container with Truck */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-gradient-to-br from-slate-900/60 to-[#071526] p-2 sm:p-4 aspect-[16/11] sm:aspect-[16/10] lg:aspect-[4/3] flex items-center justify-center">
                <img
                  src={TRZ_ASSETS.caminhao}
                  alt="Caminhão TRZ Caçambas para transporte de entulho"
                  className="w-full h-full object-contain object-center transform group-hover:scale-103 transition-transform duration-500 drop-shadow-2xl"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Floating pill inside photo */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#0D2340]/90 backdrop-blur-md border border-white/15 px-4 py-2.5 rounded-lg text-xs flex items-center gap-3 shadow-lg">
                  <div className="w-3 h-3 bg-[#DE722B] transform rotate-45 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Atendimento em Todo o Brasil</span>
                    <span className="text-slate-300 text-[11px]">Filiais e empresas parceiras por cidade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE ORDER 2 / DESKTOP ORDER 1: HEADLINE & COPY */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center text-left">
            {/* Unboxed Kicker with Diamond separator */}
            <div className="flex items-center gap-2 text-xs font-bold text-[#DE722B] tracking-wider uppercase mb-4">
              <span>TRZ Caçambas</span>
              <span className="w-1.5 h-1.5 bg-[#DE722B] transform rotate-45 inline-block" />
              <span>Locação para Obras & Reformas</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.12] mb-6 text-balance">
              Obra em movimento.{' '}
              <span className="text-[#DE722B] inline-block">
                Entulho no lugar certo.
              </span>
            </h1>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-6 max-w-xl">
              Locação ágil de caçambas estacionárias para reformas, construções e demolições.
              Atendimento em todo o Brasil através de filiais e empresas parceiras, com disponibilidade confirmada por cidade diretamente no WhatsApp.
            </p>

            {/* National Coverage Strip */}
            <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Globe2 className="w-5 h-5 text-[#DE722B] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-200">
                  <strong className="text-white block font-semibold mb-0.5">
                    Atendimento em todo o Brasil — Consulte sua cidade no WhatsApp
                  </strong>
                  <span className="text-slate-300 text-xs">
                    Sede corporativa em São Paulo/SP com operação e entrega rápida via filiais e empresas parceiras em diversas regiões.
                  </span>
                </div>
              </div>
            </div>

            {/* Primary 1-Click WhatsApp Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
              <a
                href={getWhatsAppUrl('Olá, TRZ Caçambas! Gostaria de consultar a disponibilidade e solicitar orçamento para locação de caçamba na minha cidade.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#DE722B] hover:bg-[#C55E1C] active:scale-[0.98] rounded-lg shadow-lg hover:shadow-orange-500/20 transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Solicitar Orçamento no WhatsApp</span>
                <ArrowRight className="w-4 h-4 opacity-80" />
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/15 transition-colors whitespace-nowrap"
              >
                <span>Conhecer Serviços</span>
              </a>
            </div>

            {/* Unboxed Metadata Trust Strip */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#DE722B]" />
                <span>Entrega no prazo combinado</span>
              </div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#DE722B]" />
                <span>CNPJ: {COMPANY_CNPJ}</span>
              </div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[#DE722B] font-bold">Tel:</span>
                <span className="text-white font-medium">{WHATSAPP_DISPLAY_PHONE}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
