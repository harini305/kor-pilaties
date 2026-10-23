// Eleven packages and prices verified 23 Oct 2026 (audit 03 §4, data/packages.json).
// Prices must match Rezerv — update both together.

export const reformerPackages = [
  { id: '47d0a4a5-c215-45b3-8d28-49cbfd1cbc51', name: 'Single session', classes: 1, price: 250000, perClass: null, validity: '7 days' },
  { id: '9aa67cfb-70ae-4ef9-a5b7-af40bf4b3466', name: '3 sessions', classes: 3, price: 660000, perClass: 220000, validity: '1 month', firstTimers: true },
  { id: 'c29c4b64-5d3d-4751-8e05-4bb63f3bff2d', name: '5 sessions', classes: 5, price: 1000000, perClass: 200000, validity: '1 month' },
  { id: 'b0f2d079-25d0-4e95-bdd0-7bc3f6347f62', name: '10 sessions', classes: 10, price: 1750000, perClass: 175000, validity: '2 months' },
  { id: '1c64881d-a54c-4cc3-8ba9-845d15cb0038', name: '20 sessions', classes: 20, price: 3000000, perClass: 150000, validity: '3 months' },
];

export const matPackages = [
  { id: '953ab04e-77e1-4f9a-ac2b-eae67ccbb429', name: 'Single session', classes: 1, price: 200000, perClass: null, validity: '7 days' },
  { id: 'c2dc0801-e438-4a06-8f8e-85d1053cd660', name: '3 sessions', classes: 3, price: 525000, perClass: 175000, validity: '1 month', firstTimers: true },
  { id: '0489ec38-0f65-4750-8628-54e3f5919447', name: '5 sessions', classes: 5, price: 750000, perClass: 150000, validity: '1 month' },
  { id: 'd522efdc-3fe6-47ac-8508-c63b4b956a17', name: '10 sessions', classes: 10, price: 1250000, perClass: 125000, validity: '2 months' },
  // Sold as "unlimited"; the system caps it at 40 passes (08 A7) — so no class count is shown.
  { id: 'b81471d6-9beb-4971-9a43-8a6654b0a452', name: 'Unlimited access', classes: null, price: 2000000, perClass: null, validity: '1 month' },
];

export const privatePackage = {
  id: '6ebf5614-428e-4732-a4bc-f04e58b83c07',
  name: '1 on 1 Private Pilates',
  classes: 1,
  price: 1200000,
  validity: '1 month',
  description: '1 on 1 session is tailormade for your own specific objective. Book your favorite instructor when the studio is available.',
};

export const packageTerms = 'Packages are non-refundable. Terms & conditions apply.';
export const packageScope = 'Book any class on the schedule, except special events.';

export function formatRp(value) {
  return `Rp${value.toLocaleString('en-US')}`;
}
