export const CONTACT_EMAIL = 'reservas@haciendasantafilomena.com';
export const PHONE_DISPLAY = '+58 412 345 6789';
export const PHONE_TEL = '+584123456789';
export const WHATSAPP_NUMBER = '584123456789';
export const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Hacienda%20Santa%20Filomena%20Jaji%20Merida%20Venezuela';
export const ROUTES_URL = 'https://www.google.com/maps/dir/?api=1&destination=Hacienda%20Santa%20Filomena%20Jaji%20Merida%20Venezuela&travelmode=driving';

export const createSubmissionId = (prefix) => {
  const dateStamp = new Date().toISOString().slice(0, 10).replaceAll('-', '');
  const randomPart = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `${prefix}-${dateStamp}-${randomPart}`;
};

export const saveSubmission = (collectionName, payload) => {
  const storageKey = `santaFilomena:${collectionName}`;
  const savedItems = JSON.parse(window.localStorage.getItem(storageKey) || '[]');
  const record = {
    ...payload,
    savedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(storageKey, JSON.stringify([record, ...savedItems]));
  return record;
};

export const buildMailto = ({ to = CONTACT_EMAIL, cc, subject, body }) => {
  const params = new URLSearchParams({
    subject,
    body,
  });

  if (cc) params.set('cc', cc);

  return `mailto:${to}?${params.toString()}`;
};

export const buildWhatsAppUrl = (message) => (
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
);

export const formatCurrency = (amount) => (
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(Number.isFinite(amount) ? amount : 0)
);

export const getNights = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) return 1;

  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diff = Math.ceil((end - start) / 86400000);

  return Math.max(diff, 1);
};
