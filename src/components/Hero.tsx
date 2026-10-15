import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY_PHONE } from '../utils/whatsapp.ts';

// Main image asset with fallback
import heroImageTruck from '../assets/images/hero_dumpster_truck_1792080195909.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#0D2340] text-white overflow-hidden">
      {/* Subtle Geometric Rhombus Accent Graphics in the Navy Field */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 border-2 border-white transform rotate-45" />
        <div className="absolute top-1/2 -right-12 w-64 h-64 border border-[#DE722B] transform rotate-45" />
        <div className="absolute -bottom-24 left-1/3 w-80 h-80 border-2 border-white/40 transform rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
        {/*
          Mobile Rule: "Mobile: foto aparece logo abaixo do cabeçalho, antes do texto."
          Implementation:
          On mobile (< lg), we use flex-col-reverse with the image placed first in visual order:
          Using flex-col lg:flex-row with ordering:
          - Image container has order-1 lg:order-2
          - Text container has order-2 lg:order-1
        */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
          
          {/* MOBILE ORDER 1 / DESKTOP ORDER 2: HERO PHOTOGRAPHY */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative group">
              {/* Decorative Geometric Orange Rhombus Corner Accent */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#DE722B] transform rotate-45 z-20 shadow-lg hidden sm:block" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-[#DE722B] transform rotate-45 z-20 shadow-lg hidden sm:block" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900/40 aspect-[16/10] sm:aspect-[16/10] lg:aspect-[4/3]">
                <img
                  src={heroImageTruck}
                  alt="Caminhão poliguindaste e caçamba estacionária para entulho de obra"
                  className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to public asset if needed
                    const target = e.currentTarget;
                    if (target.src !== '/assets/hero-caminhao.jpg') {
                      target.src = '/assets/hero-caminhao.jpg';
                    }
                  }}
                />
                {/* Subtle gradient overlay to merge with navy background */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2340]/80 via-transparent to-transparent pointer-events-none" />

                {/* Quiet live floating card inside photo */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#0D2340]/90 backdrop-blur-md border border-white/15 px-4 py-3 rounded-lg text-xs flex items-center gap-3 shadow-lg">
                  <div className="w-3 h-3 bg-[#DE722B] transform rotate-45 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Atendimento Ágil</span>
                    <span className="text-slate-300 text-[11px]">Entrega e coleta programadas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE ORDER 2 / DESKTOP ORDER 1: HEADLINE & COPY */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center text-left">
            {/* Unboxed Kicker with Diamond separator */}
            <div className="flex items-center gap-2 text-xs font-bold text-[#DE722B] tracking-wider uppercase mb-4">
              <span>Locação de Caçambas</span>
              <span className="w-1.5 h-1.5 bg-[#DE722B] transform rotate-45 inline-block" />
              <span>Obras & Reformas</span>
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
              Mantenha sua obra limpa, segura e dentro das normas com transporte e descarte responsável.
            </p>

            {/* Clear Regional Availability & Pricing Rule */}
            <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#DE722B] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-200">
                  <strong className="text-white block font-semibold mb-0.5">
                    Consulte disponibilidade para sua cidade no WhatsApp
                  </strong>
                  <span className="text-slate-300 text-xs">
                    Orçamento calculado sob medida conforme cidade, tipo de material, volume e período de locação.
                  </span>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
              <a
                href={getWhatsAppUrl('Olá, TRZ Caçambas! Gostaria de consultar um orçamento para locação de caçamba na minha cidade.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#DE722B] hover:bg-[#C55E1C] active:scale-[0.98] rounded-lg shadow-lg hover:shadow-orange-500/20 transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Solicitar Orçamento no WhatsApp</span>
                <ArrowRight className="w-4 h-4 opacity-80" />
              </a>

              <a
                href="#guia"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/15 transition-colors whitespace-nowrap"
              >
                <span>Ver Guia de Obra</span>
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
                <span>Descarte responsável</span>
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
