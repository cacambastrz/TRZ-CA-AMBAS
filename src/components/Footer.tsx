import React from 'react';
import { Logo } from './Logo.tsx';
import { MessageCircle, Phone, ArrowUpRight, MapPin, Building2, Globe2 } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY_PHONE, COMPANY_CNPJ, COMPANY_ADDRESS } from '../utils/whatsapp.ts';

interface FooterProps {
  onOpenPrivacy: (tab: 'privacidade' | 'termos') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  return (
    <footer className="bg-[#081628] text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Corporate Identification */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="light" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mt-3">
              Locação de caçambas estacionárias para entulho de obras, reformas e demolições.
              Compromisso com a agilidade na entrega, segurança viária e destinação ambientalmente adequada.
            </p>

            {/* Official Data */}
            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-[#DE722B] shrink-0 mt-0.5" />
                <span>CNPJ: <strong className="font-mono text-white">{COMPANY_CNPJ}</strong></span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#DE722B] shrink-0 mt-0.5" />
                <span>Sede: {COMPANY_ADDRESS.full}</span>
              </div>
              <div className="flex items-start gap-2">
                <Globe2 className="w-4 h-4 text-[#DE722B] shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  <strong className="text-white">Atendimento em todo o Brasil</strong> através de filiais e empresas parceiras.
                  Disponibilidade confirmada por cidade diretamente no WhatsApp.
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Navegação
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#servicos" className="hover:text-[#DE722B] transition-colors">
                  Serviços de Locação
                </a>
              </li>
              <li>
                <a href="#guia" className="hover:text-[#DE722B] transition-colors">
                  Guia de Necessidades
                </a>
              </li>
              <li>
                <a href="#como-alugar" className="hover:text-[#DE722B] transition-colors">
                  Como Alugar em 3 Passos
                </a>
              </li>
              <li>
                <a href="#materiais" className="hover:text-[#DE722B] transition-colors">
                  Materiais Permitidos & Acesso
                </a>
              </li>
              <li>
                <a href="#empresa" className="hover:text-[#DE722B] transition-colors">
                  Dados da Empresa (CNPJ & Sede)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#DE722B] transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Conversions */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Atendimento e Orçamento
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Consulte a disponibilidade de caçambas para a sua cidade com nossa equipe:
            </p>

            <div className="space-y-2 pt-1">
              <a
                href={getWhatsAppUrl('Olá, TRZ Caçambas! Gostaria de um orçamento.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-white hover:text-[#DE722B] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#DE722B]" />
                <span>WhatsApp: {WHATSAPP_DISPLAY_PHONE}</span>
              </a>

              <a
                href={`tel:${WHATSAPP_DISPLAY_PHONE.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#DE722B]" />
                <span>Telefone: {WHATSAPP_DISPLAY_PHONE}</span>
              </a>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl('Olá! Gostaria de alugar uma caçamba com a TRZ Caçambas.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#DE722B] hover:bg-[#C55E1C] rounded-lg transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pedir Caçamba no WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} TRZ Caçambas · CNPJ: {COMPANY_CNPJ}. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenPrivacy('privacidade')}
              className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Política de Privacidade
            </button>
            <span className="text-slate-700">·</span>
            <button
              type="button"
              onClick={() => onOpenPrivacy('termos')}
              className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Termos de Locação
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
