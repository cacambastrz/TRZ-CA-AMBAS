import React from 'react';
import { MessageCircle, Phone, MapPin, ArrowRight, Building2, Globe2 } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY_PHONE, COMPANY_CNPJ, COMPANY_ADDRESS } from '../utils/whatsapp.ts';

export const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-[#0D2340] text-white relative overflow-hidden">
      {/* Decorative Geometric Rhombus Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 border-2 border-white/5 transform rotate-45 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border border-[#DE722B]/20 transform rotate-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DE722B] mb-3">
            <span className="w-2 h-2 bg-[#DE722B] transform rotate-45 inline-block" />
            <span>Atendimento Rápido e Direto</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
            Pronto para colocar o entulho no lugar certo?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Fale conosco agora mesmo para consultar a disponibilidade de caçambas,
            prazos de entrega e valores para a sua cidade. Atendimento direto pelo WhatsApp!
          </p>

          {/* Central Contact Box */}
          <div className="bg-white/5 border border-white/15 rounded-2xl p-6 sm:p-10 backdrop-blur-md mb-8 max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#DE722B] font-bold block mb-2">
              WhatsApp Oficial de Atendimento
            </span>
            <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight mb-4">
              {WHATSAPP_DISPLAY_PHONE}
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-300 mb-6">
              <Globe2 className="w-4 h-4 text-[#DE722B] shrink-0" />
              <span>Atendimento em todo o Brasil — Consulte disponibilidade para sua cidade</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={getWhatsAppUrl('Olá, TRZ Caçambas! Gostaria de consultar valores e disponibilidade de caçamba para minha obra.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#DE722B] hover:bg-[#C55E1C] active:scale-[0.98] rounded-xl shadow-lg transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Conversar no WhatsApp</span>
                <ArrowRight className="w-4 h-4 opacity-80" />
              </a>

              <a
                href={`tel:${WHATSAPP_DISPLAY_PHONE.replace(/[^0-9+]/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 rounded-xl border border-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Ligar Agora</span>
              </a>
            </div>

            {/* Corporate Summary Inside Contact Card */}
            <div className="pt-6 border-t border-white/10 text-left text-xs text-slate-300 space-y-1.5">
              <div className="flex items-start gap-2">
                <Building2 className="w-3.5 h-3.5 text-[#DE722B] shrink-0 mt-0.5" />
                <span>CNPJ: <strong className="font-mono text-white">{COMPANY_CNPJ}</strong></span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#DE722B] shrink-0 mt-0.5" />
                <span>Sede: {COMPANY_ADDRESS.full}</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Orçamento informado com transparência conforme a cidade, tipo de material, volume estimado e período de locação.
          </p>

        </div>
      </div>
    </section>
  );
};
