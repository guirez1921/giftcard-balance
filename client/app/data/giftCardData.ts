export interface GiftCard {
  name: string;
  codeFormat: string;
  notes: string;
}
export interface GiftCardCategory {
  category: string;
  cards: GiftCard[];
}
export const giftCardData: GiftCardCategory[] = [{
  category: 'Gaming',
  cards: [{
    name: 'PlayStation (PSN)',
    codeFormat: "12 characters (e.g. 'ABCD-EFGH-IJKL')",
    notes: 'Code on back, under scratch panel.'
  }, {
    name: 'Xbox',
    codeFormat: "25 characters (e.g. 'XXXXX-XXXXX-XXXXX-XXXXX-XXXXX')",
    notes: 'Code on back, visible or under scratch area.'
  }, {
    name: 'Nintendo eShop',
    codeFormat: "16 digits (e.g. '1234-5678-9012-3456')",
    notes: 'Scratch-off required. Redeem via Switch or online.'
  }, {
    name: 'Steam',
    codeFormat: "15 characters (e.g. 'ABCDE-FGHIJ-KLMNO')",
    notes: 'Back of card, under scratch-off. Requires Steam account.'
  }, {
    name: 'Roblox',
    codeFormat: "12–16 digits (e.g. '123456789012')",
    notes: 'Scratch-off area. Redeem at roblox.com/redeem.'
  }, {
    name: 'Razer Gold',
    codeFormat: "14–16 digits (e.g. '1234-5678-9012-34')",
    notes: 'Back of card, redeem on Razer Gold site.'
  }]
}, {
  category: 'Retail',
  cards: [{
    name: 'Amazon',
    codeFormat: "14–15 characters (e.g. 'AQXV-12345-ABCDE')",
    notes: 'Scratch off or peel label. Redeem on Amazon account.'
  }, {
    name: 'Walmart',
    codeFormat: '16 digits + 4-digit PIN',
    notes: 'On back; may require scratch-off for PIN.'
  }, {
    name: 'Target',
    codeFormat: '15–16 digits + 8-digit access code',
    notes: 'Scratch panel to reveal access code.'
  }, {
    name: 'Apple / iTunes',
    codeFormat: "16 characters (e.g. 'X123-4567-89AB-CDEF')",
    notes: 'Redeem via App Store or iTunes.'
  }, {
    name: 'Google Play',
    codeFormat: "16 digits (e.g. 'XXXX-XXXX-XXXX-XXXX')",
    notes: 'Scratch panel on back; redeem via Play Store.'
  }]
}, {
  category: 'Travel & Dining',
  cards: [{
    name: 'Uber / Uber Eats',
    codeFormat: "16–17 characters (e.g. 'ABCD-EFGH-IJKL-MNOP')",
    notes: 'Scratch-off panel. Redeem in Uber app.'
  }, {
    name: 'Airbnb',
    codeFormat: '19 digits (no hyphens)',
    notes: 'Printed directly. Redeem in Airbnb wallet.'
  }, {
    name: 'Starbucks',
    codeFormat: '16-digit card number + 8-digit PIN',
    notes: 'PIN under scratch area.'
  }]
}, {
  category: 'Prepaid & Bank-Style',
  cards: [{
    name: 'Visa / Mastercard / Amex Gift Cards',
    codeFormat: '16-digit card number + expiry + CVV',
    notes: 'Works like debit card. CVV usually on back. Must be activated.'
  }]
}];