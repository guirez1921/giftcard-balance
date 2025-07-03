import React, { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import type { GiftCard, GiftCardCategory } from '~/data/giftCardData';
interface CardSelectorProps {
  categories: GiftCardCategory[];
  selectedCard: GiftCard | null;
  onSelectCard: (card: GiftCard) => void;
}
export const CardSelector: React.FC<CardSelectorProps> = ({
  categories,
  selectedCard,
  onSelectCard
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelectCard = (card: GiftCard) => {
    onSelectCard(card);
    setIsOpen(false);
  };
  return <div className="relative w-full">
      <button type="button" className="flex items-center justify-between w-full p-3 text-left bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={toggleDropdown}>
        <span>{selectedCard ? selectedCard.name : 'Select a gift card'}</span>
        <ChevronDownIcon className="w-5 h-5 text-gray-500" />
      </button>
      {isOpen && <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden max-h-80 overflow-y-auto">
          {categories.map(category => <div key={category.category} className="border-b border-gray-200 last:border-b-0">
              <div className="px-3 py-2 bg-gray-100 font-medium text-gray-700">
                {category.category}
              </div>
              <div>
                {category.cards.map(card => <button key={card.name} className={`w-full px-3 py-2 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 ${selectedCard?.name === card.name ? 'bg-blue-50 text-blue-700' : ''}`} onClick={() => handleSelectCard(card)}>
                    {card.name}
                  </button>)}
              </div>
            </div>)}
        </div>}
    </div>;
};