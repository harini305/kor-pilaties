// Booking destinations — the single place to change where "Book" / "Buy" buttons go.
//
// Booking, accounts and payments stay on Rezerv (audit 06 §4, 09 §2, option 1: link out).
// Today korbali.com itself IS the Rezerv storefront, so these point at its verified routes.
// If this Next.js site takes over korbali.com, move the storefront (e.g. to a Rezerv
// subdomain such as book.korbali.com — to be confirmed with the client and Rezerv) and
// update REZERV_BASE_URL. Nothing here has been checkout-tested.

export const REZERV_BASE_URL = 'https://korbali.com';

export const booking = {
  // Live timetable: class list with Book Now (Rezerv login required to book).
  timetable: `${REZERV_BASE_URL}/timetable`,
  // Package list with Buy now (Rezerv login required; checkout not verified).
  packages: `${REZERV_BASE_URL}/package`,
  // Rezerv login / sign up and the customer's bookings.
  account: `${REZERV_BASE_URL}/login`,
};

// Per-package deep links, keyed by Rezerv packageId (data/packages.js).
// Empty until the client confirms direct purchase URLs; the category falls back to booking.packages.
export const packageUrls = {};

export function packageUrl(packageId) {
  return packageUrls[packageId] || booking.packages;
}
