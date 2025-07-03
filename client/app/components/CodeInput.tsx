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
  const needsMultiple = needsMultipleInputs(selectedCard);
  const inputLabels = getInputLabels(selectedCard);
  const placeholder = getInputPlaceholder(selectedCard);
  const [inputs, setInputs] = useState<string[]>(Array(inputLabels.length).fill(''));
  const handleSingleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCodeChange(e.target.value);
  };
  const handleMultipleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
    onCodeChange(newInputs.join(','));
  };
  if (needsMultiple) {
    return <div className="space-y-4">
        {inputLabels.map((label, index) => <div key={index} className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              {label}
            </label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={index === 0 ? placeholder.split(',')[0] : placeholder.split(',')[index]} value={inputs[index]} onChange={e => handleMultipleInputChange(index, e.target.value)} />
          </div>)}
      </div>;
  }
  return <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        Redemption Code
      </label>
      <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={placeholder} onChange={handleSingleInputChange} />
    </div>;
};