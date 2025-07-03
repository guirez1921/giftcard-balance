import type { GiftCard } from "~/data/giftCardData";

export const validateCode = (code: string, card: GiftCard): boolean => {
  if (!code || !card) return false;
  // Get just the card name without any parentheses
  const cardName = card.name.split('(')[0].trim();
  switch (cardName) {
    case 'PlayStation':
      // 12 characters in format ABCD-EFGH-IJKL
      return /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/i.test(code);
    case 'Xbox':
      // 25 characters in format XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
      return /^[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}$/i.test(code);
    case 'Nintendo eShop':
      // 16 digits in format 1234-5678-9012-3456
      return /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(code);
    case 'Steam':
      // 15 characters in format ABCDE-FGHIJ-KLMNO
      return /^[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}$/i.test(code);
    case 'Roblox':
      // 12-16 digits
      return /^\d{12,16}$/.test(code);
    case 'Razer Gold':
      // 14-16 digits in format 1234-5678-9012-34
      return /^\d{4}-\d{4}-\d{4}-\d{0,4}$/.test(code);
    case 'Amazon':
      // 14-15 characters in format AQXV-12345-ABCDE
      return /^[A-Z0-9]{4}-\d{5}-[A-Z0-9]{5,6}$/i.test(code);
    case 'Walmart':
      // 16 digits + 4-digit PIN
      return /^\d{16},\d{4}$/.test(code);
    case 'Target':
      // 15-16 digits + 8-digit access code
      return /^\d{15,16},\d{8}$/.test(code);
    case 'Apple / iTunes':
      // 16 characters in format X123-4567-89AB-CDEF
      return /^[A-Z0-9]{4}-\d{4}-\d{2}[A-Z0-9]{2}-[A-Z0-9]{4}$/i.test(code);
    case 'Google Play':
      // 16 digits in format XXXX-XXXX-XXXX-XXXX
      return /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(code);
    case 'Uber / Uber Eats':
      // 16-17 characters in format ABCD-EFGH-IJKL-MNOP
      return /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4,5}$/i.test(code);
    case 'Airbnb':
      // 19 digits (no hyphens)
      return /^\d{19}$/.test(code);
    case 'Starbucks':
      // 16-digit card number + 8-digit PIN
      return /^\d{16},\d{8}$/.test(code);
    case 'Visa / Mastercard / Amex Gift Cards':
      // 16-digit card number + expiry (MM/YY) + CVV
      return /^\d{16},\d{2}\/\d{2},\d{3}$/.test(code);
    default:
      // Generic validation for any format
      return code.length > 0;
  }
};
export const getInputPlaceholder = (card: GiftCard): string => {
  if (!card) return '';
  const cardName = card.name.split('(')[0].trim();
  switch (cardName) {
    case 'PlayStation':
      return 'ABCD-EFGH-IJKL';
    case 'Xbox':
      return 'XXXXX-XXXXX-XXXXX-XXXXX-XXXXX';
    case 'Nintendo eShop':
      return '1234-5678-9012-3456';
    case 'Steam':
      return 'ABCDE-FGHIJ-KLMNO';
    case 'Roblox':
      return '123456789012';
    case 'Razer Gold':
      return '1234-5678-9012-34';
    case 'Amazon':
      return 'AQXV-12345-ABCDE';
    case 'Walmart':
      return '1234567890123456,1234';
    case 'Target':
      return '1234567890123456,12345678';
    case 'Apple / iTunes':
      return 'X123-4567-89AB-CDEF';
    case 'Google Play':
      return '1234-5678-9012-3456';
    case 'Uber / Uber Eats':
      return 'ABCD-EFGH-IJKL-MNOP';
    case 'Airbnb':
      return '1234567890123456789';
    case 'Starbucks':
      return '1234567890123456,12345678';
    case 'Visa / Mastercard / Amex Gift Cards':
      return '1234567890123456,MM/YY,123';
    default:
      return 'Enter code';
  }
};
export const needsMultipleInputs = (card: GiftCard): boolean => {
  if (!card) return false;
  const cardName = card.name.split('(')[0].trim();
  return ['Walmart', 'Target', 'Starbucks', 'Visa / Mastercard / Amex Gift Cards'].includes(cardName);
};
export const getInputLabels = (card: GiftCard): string[] => {
  if (!card) return ['Code'];
  const cardName = card.name.split('(')[0].trim();
  switch (cardName) {
    case 'Walmart':
      return ['Card Number', 'PIN'];
    case 'Target':
      return ['Card Number', 'Access Code'];
    case 'Starbucks':
      return ['Card Number', 'PIN'];
    case 'Visa / Mastercard / Amex Gift Cards':
      return ['Card Number', 'Expiry (MM/YY)', 'CVV'];
    default:
      return ['Code'];
  }
};