import React, { useState } from 'react';
import { Logo } from './Logo.tsx';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY_PHONE } from '../utils/whatsapp.ts';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Guia de Obra', href: '#guia' },
    { label: 'Como Alugar', href: '#como-alugar' },
    { label: 'Regras', href: '#materiais' },
    { label: 'Empresa', href: '#empresa' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar 3-Zone Contract: Brand — Links — 1 Action */}
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (single clean element) */}
          <a
            href="#"
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DE722B] rounded-lg shrink-0"
            aria-label="TRZ Caçambas - Início"
          >
            <Logo variant="color" />
          </a>

          {/* Zone 2: 4-5 Nav Links (Single line, subtle hover underline) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#DE722B] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DE722B] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={getWhatsAppUrl('Olá! Gostaria de falar sobre locação de caçamba com a TRZ.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0D2340] hover:bg-[#DE722B] active:scale-[0.98] rounded-md transition-all duration-200 shadow-sm whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DE722B]"
            >
              <MessageCircle className="w-4 h-4 text-[#DE722B] group-hover:text-white transition-colors" />
              <span>Pedir no WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:text-[#0D2340] hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DE722B]"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (No overflow, fully functional) */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-semibold text-slate-800 hover:text-[#DE722B] hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
              <span className="text-xs text-slate-500 font-medium px-3">
                Atendimento direto: <strong className="text-slate-700">{WHATSAPP_DISPLAY_PHONE}</strong>
              </span>
              <a
                href={getWhatsAppUrl('Olá! Gostaria de solicitar um orçamento para locação de caçamba.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-bold text-white bg-[#0D2340] hover:bg-[#DE722B] rounded-lg transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#DE722B]" />
                <span>Solicitar no WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
