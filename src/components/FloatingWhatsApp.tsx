import React from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp.ts';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom Right) */}
      <aside
        aria-label="Atendimento rápido pelo WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center group focus-within:ring-2 focus-within:ring-[#25D366] rounded-full"
      >
        <a
          href={getWhatsAppUrl('Olá, TRZ Caçambas! Gostaria de consultar um orçamento para locação de caçamba.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105"
          aria-label="Abrir conversa no WhatsApp com a TRZ Caçambas"
        >
          <div className="relative">
            <WhatsAppIcon className="w-6 h-6 text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full" />
          </div>
          <div className="flex flex-col text-left pr-1 leading-tight">
            <span className="text-[11px] font-medium text-white/90 uppercase tracking-wide">
              Orçamento Rápido
            </span>
            <span className="text-xs font-bold text-white">
              WhatsApp TRZ
            </span>
          </div>
        </a>
      </aside>

      {/* Discreet Mobile Bottom Action Bar (Fixed, $\le$ 15% viewport height cap) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0D2340]/95 backdrop-blur-md border-t border-slate-700/80 px-4 py-2.5 shadow-2xl flex items-center justify-between gap-3">
        <div className="flex flex-col leading-tight min-w-0">
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#DE722B] truncate">
            TRZ Caçambas
          </span>
          <span className="text-xs font-semibold text-slate-200 truncate">
            Orçamento Online
          </span>
        </div>

        <a
          href={getWhatsAppUrl('Olá! Gostaria de solicitar um orçamento para caçamba.')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20BD5A] active:scale-95 text-white text-xs font-bold rounded-lg shadow-md shrink-0 whitespace-nowrap"
        >
          <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
          <span>Pedir no WhatsApp</span>
        </a>
      </div>
    </>
  );
};
