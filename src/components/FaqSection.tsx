import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, COMPANY_CNPJ, COMPANY_ADDRESS } from '../utils/whatsapp.ts';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Quais cidades a TRZ Caçambas atende?',
      answer:
        'A TRZ Caçambas possui atuação em todo o Brasil através de filiais e empresas parceiras. A disponibilidade e a rota de entrega para sua localidade são confirmadas diretamente no WhatsApp.',
    },
    {
      question: 'Onde fica a sede da TRZ Caçambas?',
      answer:
        `Nossa sede administrativa está localizada em São Paulo: ${COMPANY_ADDRESS.full}, sob o CNPJ ${COMPANY_CNPJ}. A partir dessa base corporativa, coordenamos operações com filiais e empresas parceiras por todo o território nacional.`,
    },
    {
      question: 'Como é calculado o orçamento da locação?',
      answer:
        'O orçamento é personalizado e transparente, calculado conforme a sua cidade, o tipo de material a ser descartado (alvenaria, madeira, etc.), o volume estimado e o período de permanência da caçamba no local.',
    },
    {
      question: 'Posso encher a caçamba acima da borda?',
      answer:
        'Não. Por determinação do Código de Trânsito Brasileiro e normas de segurança, o entulho deve ficar estritamente no limite da borda de aço. Caçambas sobrecarregadas oferecem risco de desprendimento na via pública e não podem ser transportadas pelo caminhão até serem niveladas.',
    },
    {
      question: 'Quais materiais são proibidos na caçamba comum?',
      answer:
        'Não é permitido o descarte de materiais tóxicos ou perigosos, como telhas e caixas d’água de amianto, restos de tintas, solventes, óleos, produtos químicos em geral, lixo hospitalar ou lixo doméstico orgânico. Esses materiais exigem tratamento e descarte ambiental específico.',
    },
    {
      question: 'Madeira e gesso podem ser colocados na caçamba?',
      answer:
        'Madeira e gesso exigem triagem e destinação separada. Avise nossa equipe previamente no WhatsApp caso sua obra envolva esses itens para que possamos orientar a correta separação e descarte.',
    },
    {
      question: 'Como funciona a retirada ou prorrogação do período?',
      answer:
        'Caso sua obra termine antes do prazo ou você precise estender a permanência, basta enviar uma mensagem no WhatsApp. Nossa equipe programa a retirada ou a troca por uma caçamba vazia com agilidade.',
    },
    {
      question: 'Onde a caçamba deve ser posicionada?',
      answer:
        'A caçamba deve ser colocada em local de fácil acesso para o caminhão poliguindaste, com terreno nivelado e firme, sem obstruir passagens de pedestres, garagens de vizinhos e longe de galhos baixos e fiação elétrica.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DE722B] mb-2">
            <span className="w-2 h-2 bg-[#DE722B] transform rotate-45 inline-block" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0D2340] tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Respostas práticas sobre atendimento nacional, prazos, regras de descarte e condições de locação.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="border border-slate-200 rounded-xl overflow-hidden transition-colors bg-slate-50/50"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DE722B] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#0D2340] text-white border-[#0D2340]' : 'text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-100/80 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-sm font-bold text-slate-900 block">Precisa de atendimento para sua cidade?</span>
            <span className="text-xs text-slate-500">Nossa equipe confirma disponibilidade e prazos diretamente no WhatsApp.</span>
          </div>
          <a
            href={getWhatsAppUrl('Olá! Tenho uma dúvida sobre a locação de caçamba para minha cidade.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#0D2340] hover:bg-[#DE722B] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#DE722B]" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
