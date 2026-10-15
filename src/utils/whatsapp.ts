/**
 * WhatsApp integration constants and utility functions for TRZ CAÇAMBAS.
 * Official number: +55 (35) 9994-3426 (strict confirmed number, no digits added).
 */

export const WHATSAPP_RAW_NUMBER = '553599943426';
export const WHATSAPP_DISPLAY_PHONE = '+55 (35) 9994-3426';

export function getWhatsAppUrl(customMessage?: string): string {
  const base = `https://wa.me/${WHATSAPP_RAW_NUMBER}`;
  const defaultText =
    'Olá! Gostaria de solicitar um orçamento para locação de caçamba com a TRZ Caçambas.';
  const message = customMessage || defaultText;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function getContextualWhatsAppUrl(context: {
  service?: string;
  volume?: string;
  material?: string;
  city?: string;
  duration?: string;
}): string {
  let message = 'Olá, TRZ Caçambas! Gostaria de consultar um orçamento:';

  if (context.service) {
    message += `\n• Tipo de serviço: ${context.service}`;
  }
  if (context.volume) {
    message += `\n• Necessidade estimada: ${context.volume}`;
  }
  if (context.material) {
    message += `\n• Material a descartar: ${context.material}`;
  }
  if (context.city && context.city.trim() !== '') {
    message += `\n• Cidade da obra: ${context.city.trim()}`;
  }
  if (context.duration) {
    message += `\n• Período previsto: ${context.duration}`;
  }

  message += '\n\nPor favor, informe a disponibilidade e as condições de entrega.';
  return getWhatsAppUrl(message);
}
