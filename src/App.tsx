import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { WhatsAppBudgetHelper } from './components/WhatsAppBudgetHelper.tsx';
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

export default function App() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<'privacidade' | 'termos'>('privacidade');

  const handleOpenPrivacy = (tab: 'privacidade' | 'termos') => {
    setModalTab(tab);
    setPrivacyModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-[#DE722B] selection:text-white">
      {/* 1. Header (Clean white top bar, 3-zone contract) */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section (Photo first on mobile, strong typography, navy field with rhombus details) */}
        <Hero />

        {/* 3. Interactive Contextual Request Helper */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <WhatsAppBudgetHelper />
        </section>

        {/* 4. Services Section (Reformas, Construção, Demolição) */}
        <ServicesSection />

        {/* 5. Visual Needs Guide (Pequena reforma / Obra residencial / Maior volume sem capacidades fixas) */}
        <VolumeGuideSection />

        {/* 6. How it works (3 passos simples) */}
        <HowItWorksSection />

        {/* 7. Materials & Safety Rules (Concreto, Proibidos, Triagem madeira/gesso, Borda, Acesso) */}
        <MaterialsAndSafetySection />

        {/* 8. About TRZ Caçambas (Without fabricated credentials) */}
        <AboutSection />

        {/* 9. FAQ Section */}
        <FaqSection />

        {/* 10. Direct Contact Section */}
        <ContactSection />
      </main>

      {/* 11. Footer */}
      <Footer onOpenPrivacy={handleOpenPrivacy} />

      {/* 12. Floating WhatsApp and Discreet Mobile Sticky Bar */}
      <FloatingWhatsApp />

      {/* 13. Accessible Privacy & Terms Modal */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
        initialTab={modalTab}
      />
    </div>
  );
}
