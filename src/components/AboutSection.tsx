import React from 'react';
import { ShieldCheck, Clock, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY_PHONE } from '../utils/whatsapp.ts';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: 'Pontualidade no Canteiro',
      description:
        'Respeitamos os horários combinados de entrega e retirada para que os profissionais da sua obra não percam tempo de trabalho.',
    },
    {
      title: 'Destinação Consciente',
      description:
        'Todo o entulho recolhido é encaminhado para locais adequados e preparados para receber resíduos da construção civil.',
    },
    {
      title: 'Atendimento Direto',
      description:
        'Comunicação prática e sem intermediários pelo WhatsApp, respondendo com clareza sobre disponibilidade, regras e orientações.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Message */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DE722B] mb-2">
              <span className="w-2 h-2 bg-[#DE722B] transform rotate-45 inline-block" />
              <span>Sobre a TRZ Caçambas</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#0D2340] tracking-tight leading-tight mb-6">
              Compromisso com sua obra e com a limpeza da cidade
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              A <strong>TRZ CAÇAMBAS</strong> nasceu para oferecer um serviço descomplicado e seguro
              de locação de caçambas estacionárias. Sabemos que uma obra organizada não é apenas uma questão
              estética: é sinônimo de produtividade, segurança para os trabalhadores e tranquilidade para a vizinhança.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Trabalhamos com foco na destinação responsável de entulhos e sobras de materiais, atendendo
              desde reformas residenciais até construções e demolições, sempre com seriedade e clareza em cada etapa.
            </p>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#DE722B] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-600">
                <strong className="text-slate-900 block font-bold mb-0.5">
                  Consulte disponibilidade para sua cidade no WhatsApp
                </strong>
                Verifique diretamente com nossa equipe as condições de atendimento e prazos para o seu endereço.
              </div>
            </div>
          </div>

          {/* Right Column: Values & Contact Card */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm hover:border-[#DE722B]/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2.5 h-2.5 bg-[#DE722B] transform rotate-45 shrink-0" />
                  <h3 className="text-lg font-black text-[#0D2340]">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pl-5">
                  {pillar.description}
                </p>
              </div>
            ))}

            <div className="bg-[#0D2340] text-white rounded-xl p-6 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div>
                <span className="text-xs text-slate-300 block">Dúvidas ou atendimento imediato:</span>
                <span className="text-lg font-black text-white">{WHATSAPP_DISPLAY_PHONE}</span>
              </div>
              <a
                href={getWhatsAppUrl('Olá! Gostaria de conversar com a equipe da TRZ Caçambas.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#DE722B] hover:bg-[#C55E1C] rounded-lg transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
