import React, { useState } from 'react';
import { MessageCircle, ArrowRight, HelpCircle } from 'lucide-react';
import { getContextualWhatsAppUrl, WHATSAPP_DISPLAY_PHONE } from '../utils/whatsapp.ts';

export const WhatsAppBudgetHelper: React.FC = () => {
  const [needType, setNeedType] = useState('Pequena Reforma');
  const [materialType, setMaterialType] = useState('Alvenaria e Concreto');
  const [city, setCity] = useState('');
  const [duration, setDuration] = useState('Período padrão de obra');

  const needs = [
    { id: 'Pequena Reforma', label: 'Pequena Reforma' },
    { id: 'Obra Residencial', label: 'Obra Residencial' },
    { id: 'Maior Volume / Demolição', label: 'Demolição / Maior Volume' },
  ];

  const materials = [
    { id: 'Alvenaria e Concreto', label: 'Alvenaria / Concreto / Tijolo' },
    { id: 'Cerâmica e Argamassa', label: 'Pisos e Cerâmica' },
    { id: 'Madeira ou Gesso (necessita triagem)', label: 'Madeira / Gesso (triagem)' },
    { id: 'Entulho misto de reforma', label: 'Misto de Reforma' },
  ];

  const durations = [
    'Período padrão de obra',
    'Uso rápido (1 a 3 dias)',
    'Obra contínua (troca frequente)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getContextualWhatsAppUrl({
      service: 'Locação de Caçamba',
      volume: needType,
      material: materialType,
      city: city.trim(),
      duration: duration,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xl p-6 sm:p-8 relative -mt-8 sm:-mt-12 max-w-5xl mx-auto z-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DE722B]">
            <span className="w-2 h-2 bg-[#DE722B] transform rotate-45 inline-block" />
            <span>Atendimento Personalizado</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-[#0D2340] mt-1">
            Planeje seu pedido em segundos
          </h2>
          <p className="text-sm text-slate-500 mt-0.5">
            Sem formulários longos: monte as informações da sua obra e fale diretamente com a gente no WhatsApp.
          </p>
        </div>

        <div className="text-left md:text-right shrink-0">
          <span className="text-xs text-slate-400 block font-medium">WhatsApp direto</span>
          <span className="text-base font-bold text-[#0D2340]">{WHATSAPP_DISPLAY_PHONE}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1: Need Scale */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">
              1. Tipo de Necessidade
            </label>
            <div className="space-y-2">
              {needs.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setNeedType(item.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold border transition-all ${
                    needType === item.id
                      ? 'border-[#DE722B] bg-[#DE722B]/5 text-[#0D2340] ring-1 ring-[#DE722B]'
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Material */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">
              2. Material Principal
            </label>
            <div className="space-y-2">
              {materials.map((m) => (
                <button
                  type="button"
                  key={m.id}
                  onClick={() => setMaterialType(m.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold border transition-all ${
                    materialType === m.id
                      ? 'border-[#DE722B] bg-[#DE722B]/5 text-[#0D2340] ring-1 ring-[#DE722B]'
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Location & Duration */}
          <div className="flex flex-col justify-between">
            <div>
              <label htmlFor="city-input" className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">
                3. Sua Cidade & Previsão
              </label>
              <input
                id="city-input"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Ex: Digite sua cidade..."
                className="w-full px-3.5 py-2.5 text-xs font-medium rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#DE722B] focus:border-transparent bg-white text-slate-800 placeholder-slate-400 mb-3"
              />

              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wide block">
                  Período estimado
                </span>
                {durations.map((d) => (
                  <button
                    type="button"
                    key={d}
                    onClick={() => setDuration(d)}
                    className={`w-full text-left px-3 py-1.5 rounded-md text-[11px] font-medium border transition-colors ${
                      duration === d
                        ? 'border-[#0D2340] bg-[#0D2340] text-white'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-[#DE722B] shrink-0" />
              <span>Consulte disponibilidade para sua cidade no WhatsApp.</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            Valores são calculados com base na cidade, material, volume e período de locação.
          </p>

          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0D2340] hover:bg-[#DE722B] active:scale-[0.98] rounded-lg transition-all duration-200 shadow-md whitespace-nowrap cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#DE722B] group-hover:text-white" />
            <span>Consultar Disponibilidade no WhatsApp</span>
            <ArrowRight className="w-4 h-4 opacity-70" />
          </button>
        </div>
      </form>
    </div>
  );
};
