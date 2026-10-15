import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, Building2, MapPin } from 'lucide-react';
import { WHATSAPP_DISPLAY_PHONE, COMPANY_CNPJ, COMPANY_ADDRESS, COMPANY_NAME } from '../utils/whatsapp.ts';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'privacidade' | 'termos';
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'privacidade',
}) => {
  const [activeTab, setActiveTab] = React.useState<'privacidade' | 'termos'>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-[#DE722B] transform rotate-45" />
            <h2 id="modal-title" className="text-xl font-black text-[#0D2340]">
              Informações Institucionais e Legais
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-2">
          <button
            type="button"
            onClick={() => setActiveTab('privacidade')}
            className={`pb-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'privacidade'
                ? 'border-[#DE722B] text-[#0D2340]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Política de Privacidade
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('termos')}
            className={`pb-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'termos'
                ? 'border-[#DE722B] text-[#0D2340]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Termos de Uso e Locação
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-600 leading-relaxed">
          {/* Corporate Identification Header */}
          <div className="p-4 rounded-xl bg-slate-100/70 border border-slate-200 space-y-1.5 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#DE722B]" />
              <span><strong>Empresa:</strong> {COMPANY_NAME} · CNPJ: <strong className="font-mono">{COMPANY_CNPJ}</strong></span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#DE722B] shrink-0 mt-0.5" />
              <span><strong>Sede:</strong> {COMPANY_ADDRESS.full}</span>
            </div>
            <div className="text-[11px] text-slate-500 pt-1">
              Operação e atendimento em todo o Brasil através de filiais e empresas parceiras.
            </div>
          </div>

          {activeTab === 'privacidade' ? (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#DE722B] shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 font-medium">
                  Nosso compromisso é com a transparência total. Não coletamos dados ocultos, cookies invasivos ou formulários desnecessários no site.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-1">1. Tratamento de Informações</h3>
                <p>
                  As interações de orçamento ocorrem diretamente pelo canal oficial do WhatsApp. Os dados fornecidos pelo cliente (como endereço da obra, tipo de resíduo e período) são utilizados estritamente para viabilizar a cotação, entrega e retirada das caçambas.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-1">2. Não Compartilhamento Comercial</h3>
                <p>
                  A TRZ Caçambas não comercializa, não aluga e não repassa informações de contato a terceiros para fins de marketing ou disparos em massa.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-1">3. Seus Direitos (LGPD)</h3>
                <p>
                  Em conformidade com a LGPD (Lei Geral de Proteção de Dados - Lei nº 13.709/2018), você pode a qualquer momento solicitar esclarecimentos ou exclusão de seu histórico de atendimento enviando uma mensagem para o nosso canal de suporte: <strong>{WHATSAPP_DISPLAY_PHONE}</strong>.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <FileText className="w-5 h-5 text-[#DE722B] shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 font-medium">
                  Regras operacionais para garantir a segurança no trânsito, a conformidade legal e a integridade de todos durante a locação.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-1">1. Limite Físico da Caçamba</h3>
                <p>
                  O entulho deve ficar estritamente no limite da borda de aço do equipamento. Não é permitido criar montes ou ultrapassar o topo da caçamba. Em caso de excesso de carga, o caminhão não poderá realizar o transporte até que o material seja nivelado.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-1">2. Proibição de Materiais Nocivos</h3>
                <p>
                  É terminantemente proibido depositar em caçambas comuns materiais tóxicos ou perigosos, tais como amianto (telhas e caixas d'água), tintas, solventes, produtos químicos, óleos ou lixo orgânico e hospitalar.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-1">3. Acesso e Posicionamento</h3>
                <p>
                  O contratante deve certificar-se de que o local de estacionamento possui espaço livre para manobra do caminhão poliguindaste e não possui cabos aéreos baixos ou restrições que impeçam o içamento seguro.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-1">4. Prazos e Retiradas</h3>
                <p>
                  O período de permanência é combinado previamente. Caso necessite de retirada antecipada ou prorrogação, avise nossa equipe com antecedência pelo WhatsApp.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#0D2340] hover:bg-[#DE722B] rounded-lg transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
