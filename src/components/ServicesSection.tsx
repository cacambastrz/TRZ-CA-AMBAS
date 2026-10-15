import React from 'react';
import { Home, Building2, Hammer, ArrowUpRight, MessageCircle } from 'lucide-react';
import { getContextualWhatsAppUrl } from '../utils/whatsapp.ts';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      number: '01',
      title: 'Reformas e Interiores',
      icon: Home,
      tagline: 'Apartamentos, residências e espaços comerciais',
      description:
        'Ideal para trocas de revestimento, pisos, drywall, rebaixamento de teto e renovação de cômodos. Agilidade na colocação e retirada para não atrasar cronogramas de pedreiros e arquitetos.',
      details: [
        'Resíduos de pisos, cerâmicas e azulejos',
        'Sobras de argamassa e entulho leve',
        'Opções para espaços urbanos e condomínios',
      ],
      whatsappContext: 'Locação para Reforma',
    },
    {
      number: '02',
      title: 'Construção Civil',
      icon: Building2,
      tagline: 'Fundações, alvenaria e canteiros ativos',
      description:
        'Suporte contínuo para obras de todos os portes. Organização indispensável para o canteiro de obras, reduzindo acúmulo de sujeira e facilitando o trânsito seguro de equipes e materiais.',
      details: [
        'Concreto, tijolos, blocos e terra',
        'Retirada programada conforme o avanço da obra',
        'Posicionamento seguro em vias públicas ou recuos',
      ],
      whatsappContext: 'Locação para Construção Civil',
    },
    {
      number: '03',
      title: 'Demolições e Quebras',
      icon: Hammer,
      tagline: 'Remoção ágil de materiais pesados',
      description:
        'Volume intenso gerado em curto espaço de tempo. Auxiliamos na logística de descarte com caçambas robustas e suporte ágil na substituição para manter o ritmo da demolição.',
      details: [
        'Quebra de alvenaria e lajes estruturais',
        'Remoção de telhas e pedregulhos pesados',
        'Substituição ágil para evitar paralisação',
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
            Atendimento direto e sem burocracia para reformas, construções e demolições.
            Você foca no andamento do projeto enquanto cuidamos do descarte correto.
          </p>
        </div>

        {/* Services Grid (Clean asymmetric or 3-column layout with generous whitespace) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.number}
                className="bg-white rounded-2xl border border-slate-200/90 p-8 flex flex-col justify-between hover:border-[#DE722B]/40 hover:shadow-lg transition-all duration-300 group relative"
              >
                {/* Top Corner Diamond Detail */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-slate-200 group-hover:bg-[#DE722B] transform rotate-45 transition-colors" />

                <div>
                  {/* Editorial Index Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold font-mono tracking-widest text-[#DE722B]">
                      {svc.number}.
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-[#0D2340] group-hover:bg-[#0D2340] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-[#0D2340] group-hover:text-[#DE722B] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1 mb-4">
                    {svc.tagline}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 pt-4 border-t border-slate-100 mb-8">
                    {svc.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 bg-[#DE722B] transform rotate-45 mt-1.5 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <a
                  href={getContextualWhatsAppUrl({ service: svc.whatsappContext })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-xs font-bold uppercase tracking-wider text-[#0D2340] hover:text-[#DE722B] transition-colors group/link"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[#DE722B]" />
                    <span>Pedir para {svc.title.split(' ')[0]}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Notice on Availability */}
        <div className="mt-12 text-center text-xs text-slate-500">
          Valores e disponibilidade de datas calculados sob medida.{' '}
          <strong className="text-slate-700">Consulte disponibilidade para sua cidade no WhatsApp.</strong>
        </div>
      </div>
    </section>
  );
};
