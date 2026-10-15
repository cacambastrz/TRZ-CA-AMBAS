/**
 * Informações oficiais e utilitários da TRZ CAÇAMBAS.
 * CNPJ: 02.790.033/0001-08
 * Sede: Av. Professor Gioia Martins, 739, Jardim Mont Kemel, São Paulo/SP, CEP 05632-020
 * Atendimento em todo o Brasil através de filiais e empresas parceiras.
 * Telefone / WhatsApp oficial: +55 (35) 9994-3426
 */

export const COMPANY_NAME = 'TRZ CAÇAMBAS';
export const COMPANY_CNPJ = '02.790.033/0001-08';
export const COMPANY_ADDRESS = {
  street: 'Av. Professor Gioia Martins, 739',
  neighborhood: 'Jardim Mont Kemel',
  city: 'São Paulo',
  state: 'SP',
  zip: '05632-020',
  full: 'Av. Professor Gioia Martins, 739, Jardim Mont Kemel, São Paulo/SP, CEP 05632-020',
};

export const WHATSAPP_RAW_NUMBER = '553599943426';
export const WHATSAPP_DISPLAY_PHONE = '+55 (35) 9994-3426';

export function getWhatsAppUrl(customMessage?: string): string {
  const base = `https://wa.me/${WHATSAPP_RAW_NUMBER}`;
  const defaultText =
    'Olá, TRZ Caçambas! Gostaria de consultar a disponibilidade e solicitar um orçamento de caçamba para minha obra.';
  const message = customMessage || defaultText;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function getContextualWhatsAppUrl(context: {
  service?: string;
  volume?: string;
  material?: string;
  city?: string;
}): string {
  let message = 'Olá, TRZ Caçambas! Gostaria de consultar um orçamento de caçamba:';

  if (context.service) {
    message += `\n• Perfil do serviço: ${context.service}`;
  }
  if (context.volume) {
    message += `\n• Necessidade estimada: ${context.volume}`;
  }
  if (context.material) {
    message += `\n• Tipo de material: ${context.material}`;
  }
  if (context.city && context.city.trim() !== '') {
    message += `\n• Cidade da obra: ${context.city.trim()}`;
  }

  message += '\n\nPor favor, informe a disponibilidade para minha cidade e as condições de entrega.';
  return getWhatsAppUrl(message);
}
