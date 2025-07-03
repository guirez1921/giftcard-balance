import React from 'react';
import { InfoIcon } from 'lucide-react';
import type { GiftCard } from '~/data/giftCardData';
interface CardPreviewProps {
  selectedCard: GiftCard | null;
}
export const CardPreview: React.FC<CardPreviewProps> = ({
  selectedCard
}) => {
  if (!selectedCard) {
    return <div className="p-6 bg-[#1A1F2E] border border-dashed border-[#2A2F3E] rounded-lg text-center text-gray-400">
        <InfoIcon className="w-8 h-8 mx-auto mb-2" />
        <p>Select a gift card to see details</p>
      </div>;
  }
  return <div className="p-6 bg-[#1A1F2E] border border-[#2A2F3E] rounded-lg">
      <h3 className="text-lg font-semibold mb-2 text-white">
        {selectedCard.name}
      </h3>
      <div className="space-y-3">
        <div>
          <p className="text-sm text-gray-400">Format</p>
          <p className="font-medium text-gray-300">{selectedCard.codeFormat}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Redemption Notes</p>
          <p className="text-gray-300">{selectedCard.notes}</p>
        </div>
      </div>
    </div>;
};