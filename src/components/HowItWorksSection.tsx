import React from 'react';
import { MessageSquare, CalendarClock, Truck, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY_PHONE } from '../utils/whatsapp.ts';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Fale pelo WhatsApp',
      icon: MessageSquare,
      description:
        'Envie uma mensagem informando a cidade da sua obra, o tipo de material a ser descartado e a data em que precisa da caçamba.',
      detail: 'Atendimento ágil direto pelo número ' + WHATSAPP_DISPLAY_PHONE,
    },
    {
      step: '02',
      title: 'Confirme prazo e entrega',
      icon: CalendarClock,
      description:
        'Defina o período necessário para seu trabalho. O caminhão realiza a entrega e o posicionamento seguro no endereço acordado.',
      detail: 'Orientações claras para manter a via e a calçada seguras',
    },
    {
      step: '03',
      title: 'Retirada e destinação correta',
      icon: Truck,
      description:
        'Terminou de encher ou encerrou o período? Solicite a retirada. Conduzimos os resíduos para descarte ambientalmente adequado.',
      detail: 'Sem dor de cabeça com entulho parado na sua porta',
    },
  ];

  return (
    <section id="como-alugar" className="py-20 bg-slate-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DE722B] mb-2">
            <span className="w-2 h-2 bg-[#DE722B] transform rotate-45 inline-block" />
            <span>Processo Sem Burocracia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0D2340] tracking-tight">
            Como alugar em 3 passos simples
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Sem cadastros complicados ou burocracia desnecessária. Você combina tudo pelo WhatsApp
            e recebe a caçamba no momento certo para sua equipe trabalhar.
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white rounded-2xl border border-slate-200/90 p-8 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                {/* Large Background Step Watermark Number (clean, readable) */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0D2340] text-[#DE722B] flex items-center justify-center font-black">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-3xl font-black font-mono text-slate-200">
                    {item.step}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-black text-[#0D2340] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-500">
                  <Check className="w-4 h-4 text-[#DE722B] shrink-0 mt-0.5" />
                  <span>{item.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Action */}
        <div className="mt-14 max-w-xl mx-auto text-center">
          <a
            href={getWhatsAppUrl('Olá! Gostaria de alugar uma caçamba para minha obra. Pode me informar os detalhes?')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-[#0D2340] hover:bg-[#DE722B] active:scale-[0.98] rounded-lg shadow-md transition-all duration-200 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-[#DE722B] group-hover:text-white" />
            <span>Iniciar Pedido no WhatsApp</span>
            <ArrowRight className="w-4 h-4 opacity-70" />
          </a>
          <p className="text-xs text-slate-500 mt-3">
            Consulte disponibilidade para sua cidade no WhatsApp.
          </p>
        </div>

      </div>
    </section>
  );
};
