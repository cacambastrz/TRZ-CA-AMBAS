import React from 'react';
import { CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { getContextualWhatsAppUrl } from '../utils/whatsapp.ts';
import { TRZ_ASSETS } from '../utils/assets.ts';

export const VolumeGuideSection: React.FC = () => {
  const needs = [
    {
      title: 'Pequena Reforma',
      subtitle: 'Trocas pontuais e acabamentos',
      badge: 'Escala Compacta',
      idealFor: [
        'Reformas de banheiro ou cozinha',
        'Troca de pisos cerâmicos e porcelanato',
        'Retirada de forros de gesso e pintura',
        'Pequenos reparos residenciais ou comerciais',
      ],
      recommendation:
        'Ideal para quem precisa de descarte ágil sem ocupar a via pública além do necessário.',
      ctaContext: 'Pequena Reforma',
    },
    {
      title: 'Obra Residencial',
      subtitle: 'Construções, ampliações e telhados',
      badge: 'Demanda Intermediária',
      highlighted: true,
      idealFor: [
        'Construção de casas e sobrados',
        'Ampliação de cômodos e garagens',
        'Troca de telhado e madeiramento',
        'Reformas estruturais e alvenaria pesada',
      ],
      recommendation:
        'Acomoda o fluxo contínuo de resíduos com excelente aproveitamento de espaço.',
      ctaContext: 'Obra Residencial',
    },
    {
      title: 'Maior Volume',
      subtitle: 'Demolições e obras maiores',
      badge: 'Alto Volume',
      idealFor: [
        'Demolições completas ou parciais',
        'Remoção de muros e concreto',
        'Obras comerciais ou prediais',
        'Canteiros com geração intensa de entulho',
      ],
      recommendation:
        'Planejamento de trocas de caçamba para manter o canteiro sempre desimpedido.',
      ctaContext: 'Maior Volume / Demolição',
    },
  ];

  return (
    <section id="guia" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DE722B] mb-2">
              <span className="w-2 h-2 bg-[#DE722B] transform rotate-45 inline-block" />
              <span>Guia de Necessidades</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0D2340] tracking-tight">
              Qual é o tamanho da sua necessidade?
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Cada tipo de obra tem um ritmo próprio. Avalie o perfil do seu projeto
              para orientarmos a melhor opção e tempo de permanência pelo WhatsApp.
            </p>
          </div>

          <div className="text-xs text-slate-500 bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-sm">
            <strong className="text-slate-800 block font-semibold mb-1">
              Orientação personalizada sem custos
            </strong>
            Em dúvida sobre o volume? Nossa equipe auxilia na escolha adequada pelo WhatsApp para evitar gastos extras.
          </div>
        </div>

        {/* Highlight Image Banner with Caçambas TRZ */}
        <div className="mb-14 rounded-2xl overflow-hidden border border-slate-200 shadow-lg relative bg-[#0D2340]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-10 text-white">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DE722B] mb-2">
                <span>Canteiro Organizado</span>
                <span>·</span>
                <span>Vizinhança Segura</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black leading-tight mb-4">
                Caçamba posicionada com cuidado, respeitando calçadas e garagens
              </h3>
              <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
                A colocação correta evita transtornos, não bloqueia passagens e assegura
                estabilidade no solo durante o descarte de materiais pesados.
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <span className="flex items-center gap-1.5 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#DE722B]" />
                  Apoio no solo nivelado
                </span>
                <span className="flex items-center gap-1.5 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#DE722B]" />
                  Respeito às normas viárias
                </span>
                <span className="flex items-center gap-1.5 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#DE722B]" />
                  Retirada no prazo acordado
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 h-64 lg:h-full relative min-h-[260px] bg-gradient-to-br from-slate-900 to-[#071526] p-6 flex items-center justify-center">
              <img
                src={TRZ_ASSETS.cacambas}
                alt="Caçambas TRZ para obras e reformas"
                className="max-h-64 max-w-full object-contain drop-shadow-xl"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Comparison Cards with TRZ_ASSETS.cacambas on top of EACH card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {needs.map((item) => (
            <div
              key={item.title}
              className={`rounded-2xl flex flex-col justify-between transition-all duration-300 relative border overflow-hidden ${
                item.highlighted
                  ? 'border-[#0D2340] bg-slate-50/80 shadow-md ring-1 ring-[#0D2340]'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
              }`}
            >
              {/* Photo on Top of Each Card */}
              <div className="relative h-44 w-full bg-gradient-to-b from-[#0D2340] to-[#081628] flex items-center justify-center overflow-hidden rounded-t-2xl">
                <img
                  src={TRZ_ASSETS.cacambas}
                  alt={`Caçamba TRZ - ${item.title}`}
                  className="h-44 w-full object-cover rounded-t-2xl transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Card Body */}
              <div className="p-7 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DE722B] block mb-1">
                    {item.badge}
                  </span>
                  <h3 className="text-xl font-black text-[#0D2340]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mb-6">
                    {item.subtitle}
                  </p>

                  <div className="space-y-3 mb-6">
                    <span className="text-xs font-bold text-slate-700 block uppercase tracking-wide">
                      Adequado para:
                    </span>
                    {item.idealFor.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 bg-[#0D2340] transform rotate-45 mt-1.5 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 bg-slate-100/70 rounded-xl text-xs text-slate-600 mb-6">
                    <span className="font-semibold text-slate-800 block mb-0.5">Dica prática:</span>
                    {item.recommendation}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <a
                    href={getContextualWhatsAppUrl({ volume: item.ctaContext })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${
                      item.highlighted
                        ? 'bg-[#DE722B] text-white hover:bg-[#C55E1C]'
                        : 'bg-[#0D2340] text-white hover:bg-[#DE722B]'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Consultar para este perfil</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-80" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-xs text-slate-500">
          Nota: O dimensionamento é orientado no momento do pedido de acordo com o espaço e as normas do município.
        </div>
      </div>
    </section>
  );
};
