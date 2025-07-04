import React, { useState } from 'react';
import type { GiftCard } from '~/data/giftCardData';
import { getInputPlaceholder, needsMultipleInputs, getInputLabels } from '../utils/validation';
interface CodeInputProps {
  selectedCard: GiftCard;
  onCodeChange: (code: string) => void;
}
export const CodeInput: React.FC<CodeInputProps> = ({
  selectedCard,
  onCodeChange
}) => {
  // console.log('Selected Card:', selectedCard);
  const needsMultiple = needsMultipleInputs(selectedCard);
  const inputLabels = getInputLabels(selectedCard);
  const placeholder = getInputPlaceholder(selectedCard);
  const [inputs, setInputs] = useState<string[]>(Array(inputLabels.length).fill(''));
  // Format input according to validation.ts logic
  const formatInput = (value: string, cardName: string, label?: string) => {
    cardName = cardName.split('(')[0].trim();
    // console.log('Formatting input:', value, 'for card:', cardName, 'label:', label);
    switch (cardName) {
      case 'PlayStation': {
        // ABCD-EFGH-IJKL
        let cleaned = value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
        let out = '';
        if (cleaned.length > 0) out += cleaned.substring(0, 4);
        if (cleaned.length > 4) out += '-' + cleaned.substring(4, 8);
        if (cleaned.length > 8) out += '-' + cleaned.substring(8, 12);
        return out;
      }
      case 'Xbox': {
        // XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
        let cleaned = value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
        let out = '';
        for (let i = 0; i < 5; i++) {
          if (cleaned.length > i * 5) {
            if (i > 0) out += '-';
            out += cleaned.substring(i * 5, i * 5 + 5);
          }
        }
        return out;
      }
      case 'Nintendo eShop':
      case 'Google Play': {
        // 1234-5678-9012-3456
        let cleaned = value.replace(/\D/g, '');
        let out = '';
        for (let i = 0; i < 4; i++) {
          if (cleaned.length > i * 4) {
            if (i > 0) out += '-';
            out += cleaned.substring(i * 4, i * 4 + 4);
          }
        }
        return out;
      }
      case 'Steam': {
        // ABCDE-FGHIJ-KLMNO
        let cleaned = value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
        let out = '';
        if (cleaned.length > 0) out += cleaned.substring(0, 5);
        if (cleaned.length > 5) out += '-' + cleaned.substring(5, 10);
        if (cleaned.length > 10) out += '-' + cleaned.substring(10, 15);
        return out;
      }
      case 'Roblox':
      case 'Airbnb': {
        // Digits only
        return value.replace(/\D/g, '');
      }
      case 'Razer Gold': {
        // 1234-5678-9012-34
        let cleaned = value.replace(/\D/g, '');
        let out = '';
        if (cleaned.length > 0) out += cleaned.substring(0, 4);
        if (cleaned.length > 4) out += '-' + cleaned.substring(4, 8);
        if (cleaned.length > 8) out += '-' + cleaned.substring(8, 12);
        if (cleaned.length > 12) out += '-' + cleaned.substring(12, 14);
        return out;
      }
      case 'Amazon': {
        // AQXV-12345-ABCDE
        let cleaned = value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
        let out = '';
        if (cleaned.length > 0) out += cleaned.substring(0, 4);
        if (cleaned.length > 4) out += '-' + cleaned.substring(4, 9);
        if (cleaned.length > 9) out += '-' + cleaned.substring(9, 14);
        return out;
      }
      case 'Walmart': {
        // 16 digits, 4-digit PIN (multi-input)
        if (label === 'Card Number') return value.replace(/\D/g, '').slice(0, 16);
        if (label === 'PIN') return value.replace(/\D/g, '').slice(0, 4);
        return value;
      }
      case 'Target': {
        // 15-16 digits, 8-digit access code (multi-input)
        if (label === 'Card Number') return value.replace(/\D/g, '').slice(0, 16);
        if (label === 'Access Code') return value.replace(/\D/g, '').slice(0, 8);
        return value;
      }
      case 'Apple / iTunes': {
        // X123-4567-89AB-CDEF
        let cleaned = value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
        let out = '';
        if (cleaned.length > 0) out += cleaned.substring(0, 4);
        if (cleaned.length > 4) out += '-' + cleaned.substring(4, 8);
        if (cleaned.length > 8) out += '-' + cleaned.substring(8, 12);
        if (cleaned.length > 12) out += '-' + cleaned.substring(12, 16);
        return out;
      }
      case 'Uber / Uber Eats': {
        // ABCD-EFGH-IJKL-MNOP
        let cleaned = value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
        let out = '';
        if (cleaned.length > 0) out += cleaned.substring(0, 4);
        if (cleaned.length > 4) out += '-' + cleaned.substring(4, 8);
        if (cleaned.length > 8) out += '-' + cleaned.substring(8, 12);
        if (cleaned.length > 12) out += '-' + cleaned.substring(12, 17);
        return out;
      }
      case 'Starbucks': {
        // 16-digit card number, 8-digit PIN (multi-input)
        if (label === 'Card Number') return value.replace(/\D/g, '').slice(0, 16);
        if (label === 'PIN') return value.replace(/\D/g, '').slice(0, 8);
        return value;
      }
      case 'Visa / Mastercard / Amex Gift Cards': {
        // 16-digit card number, expiry MM/YY, 3-digit CVV (multi-input)
        if (label === 'Card Number') return value.replace(/\D/g, '').slice(0, 16);
        if (label === 'CVV') return value.replace(/\D/g, '').slice(0, 3);
        if (label === 'Expiry (MM/YY)') {
          let cleaned = value.replace(/[^\d]/g, '');
          if (cleaned.length > 2) cleaned = cleaned.slice(0,2) + '/' + cleaned.slice(2,4);
          return cleaned.slice(0,5);
        }
        return value;
      }
      default:
        return value;
    }
  };

  const handleSingleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatInput(e.target.value, selectedCard.name, inputLabels[0]);
    e.target.value = formatted; // Update input value with formatted value
    onCodeChange(formatted);
  };
  const handleMultipleInputChange = (index: number, value: string) => {
    const formatted = formatInput(value, selectedCard.name, inputLabels[index]);
    const newInputs = [...inputs];
    newInputs[index] = formatted;
    setInputs(newInputs);
    onCodeChange(newInputs.join(','));
  };
  if (needsMultiple) {
    return <div className="space-y-4">
        {inputLabels.map((label, index) => <div key={index} className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              {label}
            </label>
            <input type="text" className="w-full p-3 border text-gray-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={index === 0 ? placeholder.split(',')[0] : placeholder.split(',')[index]} value={inputs[index]} onChange={e => handleMultipleInputChange(index, e.target.value)} />
          </div>)}
      </div>;
  }
  return <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        Redemption Code
      </label>
      <input type="text" className="w-full p-3 border text-gray-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={placeholder} onChange={handleSingleInputChange} />
    </div>;
};