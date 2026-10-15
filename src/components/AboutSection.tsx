import React from 'react';
import { ShieldCheck, Clock, MapPin, MessageCircle, Building2, Globe2 } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY_PHONE, COMPANY_CNPJ, COMPANY_ADDRESS } from '../utils/whatsapp.ts';
import { TRZ_ASSETS } from '../utils/assets.ts';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: 'Atuação Nacional com Apoio Local',
      description:
        'Sede administrativa em São Paulo e atendimento em todo o Brasil através de filiais e empresas parceiras, com disponibilidade confirmada para sua cidade.',
    },
    {
      title: 'Pontualidade na Entrega',
      description:
        'Compromisso com os horários combinados de entrega e retirada para não interromper a rotina de pedreiros e arquitetos.',
    },
    {
      title: 'Destinação Ambientalmente Correta',
      description:
        'Entulho encaminhado para áreas de transbordo, triagem ou aterros autorizados de resíduos da construção civil.',
    },
    {
      title: 'Atendimento Prático no WhatsApp',
      description:
        'Comunicação direta sem burocracia para consultar disponibilidade, prazos e orientações para o seu endereço.',
    },
  ];

  return (
    <section id="empresa" className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split: Company Information & Real Asset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left Column: Corporate Profile */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DE722B] mb-2">
              <span className="w-2 h-2 bg-[#DE722B] transform rotate-45 inline-block" />
              <span>Institucional & Dados da Empresa</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#0D2340] tracking-tight leading-tight mb-4">
              Estrutura séria para manter sua obra em movimento
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              A <strong>TRZ CAÇAMBAS</strong> atua na locação de caçambas estacionárias para obras residenciais,
              comerciais e industriais. Entendemos que a remoção rápida de entulho é indispensável para a
              produtividade da obra, a segurança dos trabalhadores e a limpeza urbana.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Com sede corporativa na capital paulista e operação que abrange todo o Brasil através de
              filiais e empresas parceiras, confirmamos a disponibilidade e as rotas para cada município
              diretamente no WhatsApp.
            </p>

            {/* Official Corporate Identification Box */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-[#DE722B] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-700">
                  <strong className="text-slate-900 block font-bold mb-0.5">
                    Razão Social e Registro
                  </strong>
                  <span>CNPJ: <strong className="font-mono text-slate-900">{COMPANY_CNPJ}</strong></span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <MapPin className="w-5 h-5 text-[#DE722B] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-700">
                  <strong className="text-slate-900 block font-bold mb-0.5">
                    Sede Administrativa
                  </strong>
                  <span>{COMPANY_ADDRESS.full}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <Globe2 className="w-5 h-5 text-[#DE722B] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-700">
                  <strong className="text-slate-900 block font-bold mb-0.5">
                    Cobertura de Atendimento
                  </strong>
                  <span>Atendimento em todo o Brasil através de filiais e empresas parceiras. Consulte sua cidade pelo WhatsApp.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase with Caçambas Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-gradient-to-br from-[#0D2340] to-[#071526] p-8 shadow-xl flex flex-col items-center justify-center text-center">
              <img
                src={TRZ_ASSETS.cacambas}
                alt="Caçambas TRZ para descarte de entulho"
                className="max-h-60 w-auto object-contain drop-shadow-2xl mb-4"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <span className="text-xs font-bold text-white tracking-wide block">
                Caçambas robustas e sinalizadas
              </span>
              <span className="text-[11px] text-slate-400 mt-1 block">
                Segurança para a via pública e facilidade para a sua equipe
              </span>
              <span className="text-[10px] text-slate-500 mt-2">
                (Imagens ilustrativas)
              </span>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid (Concise paragraphs, no walls of text) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm hover:border-[#DE722B]/40 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-[#DE722B] transform rotate-45 shrink-0" />
                <h3 className="text-sm font-bold text-[#0D2340]">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-4">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Faixa Visual CTA Impactante com Caminhão e Ação 1-Click */}
        <div className="rounded-2xl overflow-hidden bg-[#0D2340] border border-slate-800 shadow-2xl relative text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-8 p-8 sm:p-10 z-10">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DE722B] mb-2">
                <span>Atendimento Direto</span>
                <span>·</span>
                <span>Brasil Todo</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black mb-3 text-balance">
                Precisa de uma caçamba no seu endereço hoje?
              </h3>
              <p className="text-sm text-slate-300 mb-6 max-w-xl leading-relaxed">
                Fale com a nossa equipe no WhatsApp para checar a disponibilidade na sua cidade e agendar a colocação.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href={getWhatsAppUrl('Olá, TRZ Caçambas! Gostaria de consultar disponibilidade e agendar uma caçamba.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#DE722B] hover:bg-[#C55E1C] active:scale-[0.98] rounded-xl shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consultar no WhatsApp</span>
                </a>
                <span className="text-xs text-slate-300 font-mono">
                  {WHATSAPP_DISPLAY_PHONE}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 flex items-center justify-center bg-gradient-to-l from-slate-900/60 to-transparent">
              <img
                src={TRZ_ASSETS.caminhao}
                alt="Caminhão TRZ Caçambas"
                className="max-h-48 w-auto object-contain drop-shadow-2xl"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
