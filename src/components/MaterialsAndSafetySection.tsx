import React from 'react';
import { AlertTriangle, CheckCircle2, ShieldAlert, Truck } from 'lucide-react';

export const MaterialsAndSafetySection: React.FC = () => {
  return (
    <section id="materiais" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DE722B] mb-2">
            <span className="w-2 h-2 bg-[#DE722B] transform rotate-45 inline-block" />
            <span>Guia de Descarte & Normas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0D2340] tracking-tight">
            O que pode e o que não pode na caçamba
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Regras claras garantem a segurança dos operários, dos motoristas no trânsito e o destino
            ambientalmente correto dos resíduos da sua obra.
          </p>
        </div>

        {/* 3 Columns of Material Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Permitidos com Consulta */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Permitidos (Consultar)</span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">
                Entulho da Construção
              </h3>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                Materiais minerais inertes gerados durante as etapas normais de alvenaria e reformas.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-600 transform rotate-45 mt-1.5 shrink-0" />
                  <span><strong>Concreto e argamassa:</strong> sobras estruturais e quebras.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-600 transform rotate-45 mt-1.5 shrink-0" />
                  <span><strong>Alvenaria e tijolos:</strong> blocos cerâmicos ou de cimento.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-600 transform rotate-45 mt-1.5 shrink-0" />
                  <span><strong>Pisos e azulejos:</strong> cerâmicas e porcelanatos retirados.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-600 transform rotate-45 mt-1.5 shrink-0" />
                  <span><strong>Terra e cascalho:</strong> pequenas escavações e nivelamentos.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-200/60 text-[11px] text-emerald-900 font-medium">
              Sempre informe a predominância do material no pedido para melhor acomodação.
            </div>
          </div>

          {/* Card 2: Triagem Obrigatória */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-amber-800 font-bold text-xs uppercase tracking-wider mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <span>Necessitam Triagem</span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">
                Madeira e Gesso
              </h3>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                Exigem destinação ou tratamento específico e não devem ser misturados sem aviso prévio.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-600 transform rotate-45 mt-1.5 shrink-0" />
                  <span><strong>Madeiras e tábuas:</strong> caibros, ripas e pontaletes de escoramento.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-600 transform rotate-45 mt-1.5 shrink-0" />
                  <span><strong>Placas de gesso e drywall:</strong> gesso não pode contaminar terra e alvenaria limpa.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-600 transform rotate-45 mt-1.5 shrink-0" />
                  <span><strong>Plásticos e embalagens:</strong> sacos vazios de cimento e conduítes.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-amber-200/60 text-[11px] text-amber-900 font-medium">
              Confirme a triagem necessária diretamente no WhatsApp antes do carregamento.
            </div>
          </div>

          {/* Card 3: Proibidos em Caçamba Comum */}
          <div className="rounded-2xl border border-rose-200 bg-rose-50/40 p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-rose-800 font-bold text-xs uppercase tracking-wider mb-4">
                <ShieldAlert className="w-5 h-5 text-rose-600" />
                <span>Proibidos (Caçamba Comum)</span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">
                Materiais Perigosos
              </h3>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                Substâncias tóxicas ou inflamáveis que colocam pessoas em risco e poluem o meio ambiente.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-600 transform rotate-45 mt-1.5 shrink-0" />
                  <span><strong>Amianto:</strong> telhas e caixas d'água antigas (resíduo tóxico controlado).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-600 transform rotate-45 mt-1.5 shrink-0" />
                  <span><strong>Químicos e solventes:</strong> latas com restos de tintas e solventes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-600 transform rotate-45 mt-1.5 shrink-0" />
                  <span><strong>Lixo hospitalar e orgânico:</strong> materiais infecciosos ou alimentares.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-600 transform rotate-45 mt-1.5 shrink-0" />
                  <span><strong>Pneus e baterias:</strong> logística reversa obrigatória do fabricante.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-rose-200/60 text-[11px] text-rose-900 font-medium">
              Esses materiais não podem ser recolhidos em caçambas de entulho comum.
            </div>
          </div>

        </div>

        {/* Safety & Access Rules: 2 Split Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card: Limite da Borda */}
          <div className="bg-[#0D2340] text-white rounded-2xl p-8 flex flex-col justify-between border border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DE722B] mb-2">
                <span className="w-2 h-2 bg-[#DE722B] transform rotate-45 inline-block" />
                <span>Norma Obrigatória de Trânsito</span>
              </div>
              <h3 className="text-2xl font-black mb-3 text-white">
                Respeite sempre o limite da borda
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Por determinação do Código de Trânsito Brasileiro e normas de transporte de cargas,
                a caçamba não pode transbordar. O entulho deve estar nivelado no máximo até as bordas de aço.
              </p>

              <div className="space-y-3 bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-slate-200">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#DE722B] transform rotate-45 mt-1.5 shrink-0" />
                  <span><strong>Risco de acidentes:</strong> pedras soltas podem se desprender e atingir pedestres e veículos.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#DE722B] transform rotate-45 mt-1.5 shrink-0" />
                  <span><strong>Impedimento de transporte:</strong> o motorista não pode içar caçambas acima do nível de segurança.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400">
              Precisa de mais espaço? Solicite uma nova caçamba para substituição ágil.
            </div>
          </div>

          {/* Card: Acesso para o Caminhão */}
          <div className="bg-slate-50 rounded-2xl p-8 flex flex-col justify-between border border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DE722B] mb-2">
                <Truck className="w-4 h-4 text-[#DE722B]" />
                <span>Logística de Entrega e Retirada</span>
              </div>
              <h3 className="text-2xl font-black text-[#0D2340] mb-3">
                Condições de acesso para o caminhão
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Para que o caminhão poliguindaste estacione e manobre sem riscos, observe alguns pontos no local da obra:
              </p>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200">
                  <span className="w-1.5 h-1.5 bg-[#0D2340] transform rotate-45 mt-1 shrink-0" />
                  <div>
                    <strong className="block text-slate-900">Vaga desimpedida:</strong>
                    Espaço livre equivalente a dois carros para manobra e descida dos braços hidráulicos.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200">
                  <span className="w-1.5 h-1.5 bg-[#0D2340] transform rotate-45 mt-1 shrink-0" />
                  <div>
                    <strong className="block text-slate-900">Fiação e árvores:</strong>
                    Verifique se não há galhos baixos, toldos ou fios elétricos na rota de içamento da caçamba.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200">
                  <span className="w-1.5 h-1.5 bg-[#0D2340] transform rotate-45 mt-1 shrink-0" />
                  <div>
                    <strong className="block text-slate-900">Piso firme e nivelado:</strong>
                    Evite locais em desníveis acentuados ou solos moles que comprometam a estabilidade do equipamento.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500">
              Dúvidas sobre o ponto de colocação? Mande fotos da rua ou calçada no WhatsApp.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
