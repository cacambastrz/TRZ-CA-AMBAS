import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { VolumeGuideSection } from './components/VolumeGuideSection.tsx';
import { HowItWorksSection } from './components/HowItWorksSection.tsx';
import { MaterialsAndSafetySection } from './components/MaterialsAndSafetySection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { PrivacyModal } from './components/PrivacyModal.tsx';
import { ContatoBioPage } from './pages/ContatoBioPage.tsx';

function isContatoPath(): boolean {
  if (typeof window === 'undefined') return false;
  const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
  const hash = window.location.hash.toLowerCase();
  const search = new URLSearchParams(window.location.search);

  return (
    path === '/contato' ||
    hash === '#/contato' ||
    hash === '#contato-bio' ||
    search.get('page') === 'contato' ||
    search.get('p') === 'contato'
  );
}

export default function App() {
  const [isContato, setIsContato] = useState<boolean>(() => isContatoPath());
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<'privacidade' | 'termos'>('privacidade');

  useEffect(() => {
    const handleRouteCheck = () => {
      setIsContato(isContatoPath());
    };

    window.addEventListener('popstate', handleRouteCheck);
    window.addEventListener('hashchange', handleRouteCheck);
    return () => {
      window.removeEventListener('popstate', handleRouteCheck);
      window.removeEventListener('hashchange', handleRouteCheck);
    };
  }, []);

  // ROTA /contato: Página estilo link na bio para alta conversão no WhatsApp
  // Sem menu, sem rodapé tradicional, sem links de saída, apenas CNPJ e foco mobile
  if (isContato) {
    return <ContatoBioPage />;
  }

  // ROTA PRINCIPAL /: Site institucional completo
  const handleOpenPrivacy = (tab: 'privacidade' | 'termos') => {
    setModalTab(tab);
    setPrivacyModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-[#DE722B] selection:text-white">
      {/* 1. Top Bar Contract (Clean white navbar with 3 zones) */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section (Photo first on mobile, strong typography, navy background, direct 1-click WhatsApp CTA) */}
        <Hero />

        {/* 3. Services Section (Reformas, Construção Civil, Demolição com CTAs diretos) */}
        <ServicesSection />

        {/* 4. Visual Needs Guide (Pequena reforma, obra residencial, maior volume) */}
        <VolumeGuideSection />

        {/* 5. How It Works (3 passos ágeis direto para WhatsApp) */}
        <HowItWorksSection />

        {/* 6. Materials & Safety Rules (Concreto/alvenaria, perigosos proibidos, triagem madeira/gesso, limite borda, acesso) */}
        <MaterialsAndSafetySection />

        {/* 7. About TRZ Caçambas (Dados oficiais: CNPJ 02.790.033/0001-08, Sede em SP e Atendimento Nacional via filiais/parceiros) */}
        <AboutSection />

        {/* 8. FAQ Section (Dúvidas frequentes sobre cidades, sede, descarte e regras) */}
        <FaqSection />

        {/* 9. Direct Contact Section (Telefone, CNPJ, Sede e botão WhatsApp direto) */}
        <ContactSection />
      </main>

      {/* 10. Footer (Identificação corporativa, CNPJ, Sede, atendimento nacional e links legais) */}
      <Footer onOpenPrivacy={handleOpenPrivacy} />

      {/* 11. Floating WhatsApp and Discreet Mobile Sticky Bar */}
      <FloatingWhatsApp />

      {/* 12. Accessible Privacy & Terms Modal */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
        initialTab={modalTab}
      />
    </div>
  );
}
