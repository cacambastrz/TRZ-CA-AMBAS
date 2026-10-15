import React from 'react';
import { Home, Building2, Hammer, ArrowUpRight, MessageCircle } from 'lucide-react';
import { getContextualWhatsAppUrl } from '../utils/whatsapp.ts';
import { TRZ_ASSETS } from '../utils/assets.ts';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      number: '01',
      title: 'Reformas e Interiores',
      image: TRZ_ASSETS.cacambas,
      tagline: 'Apartamentos, residências e comércio',
      description:
        'Trocas de revestimento, pisos, drywall e gesso. Colocação e retirada ágeis para manter o cronograma dos pedreiros sem entulho acumulado.',
      details: [
        'Pisos, cerâmicas e azulejos',
        'Sobras de argamassa e entulho leve',
        'Adequado para calçadas e condomínios',
      ],
      whatsappContext: 'Locação para Reforma',
    },
    {
      number: '02',
      title: 'Construção Civil',
      image: TRZ_ASSETS.caminhao,
      tagline: 'Fundações, alvenaria e canteiros',
      description:
        'Organização indispensável para o canteiro de obras. Reduz acúmulo de sujeira e facilita a circulação de operários e materiais.',
      details: [
        'Concreto, tijolos, blocos e terra',
        'Retirada programada pelo WhatsApp',
        'Posicionamento seguro no endereço',
      ],
      whatsappContext: 'Locação para Construção Civil',
    },
    {
      number: '03',
      title: 'Demolições e Quebras',
      image: TRZ_ASSETS.cacambas,
      tagline: 'Remoção de entulho pesado',
      description:
        'Alto volume gerado rapidamente. Logística de caçambas robustas e suporte ágil na substituição para não travar o andamento da obra.',
      details: [
        'Quebra de alvenaria e estruturas',
        'Remoção de telhas e pedregulhos',
        'Troca ágil de caçambas cheias',
      ],
      whatsappContext: 'Locação para Demolição',
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DE722B] mb-2">
            <span className="w-2 h-2 bg-[#DE722B] transform rotate-45 inline-block" />
            <span>Nossos Serviços</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0D2340] tracking-tight">
            Soluções sob medida para o tamanho da sua obra
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Atendimento direto pelo WhatsApp para reformas, construções e demolições.
            Você foca no projeto enquanto cuidamos do descarte correto.
          </p>
        </div>

        {/* Services Grid with Visual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div
              key={svc.number}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:border-[#DE722B]/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* Visual Header Image Frame */}
                <div className="relative h-48 sm:h-52 bg-gradient-to-b from-[#0D2340] to-[#081628] p-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#0D2340]/90 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded text-[11px] font-mono font-bold text-[#DE722B]">
                    {svc.number}.
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-black text-[#0D2340] group-hover:text-[#DE722B] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#DE722B] uppercase tracking-wide mt-1 mb-3">
                    {svc.tagline}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {svc.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    {svc.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 bg-[#DE722B] transform rotate-45 mt-1.5 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Link */}
              <div className="p-6 sm:p-7 pt-0">
                <a
                  href={getContextualWhatsAppUrl({ service: svc.whatsappContext })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full p-3.5 rounded-xl bg-slate-50 hover:bg-[#DE722B] text-[#0D2340] hover:text-white transition-all text-xs font-bold uppercase tracking-wider group/btn"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[#DE722B] group-hover/btn:text-white transition-colors" />
                    <span>Pedir para {svc.title.split(' ')[0]}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Notice on Availability */}
        <div className="mt-12 text-center text-xs text-slate-500">
          Disponibilidade e prazos alinhados por cidade.{' '}
          <strong className="text-slate-700">Consulte disponibilidade para sua cidade no WhatsApp.</strong>
        </div>
      </div>
    </section>
  );
};
