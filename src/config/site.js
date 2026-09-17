// Single source of truth for business contact details.
// Update here and it flows through the header, footer, hero, contact form and WhatsApp button.
// NOTE: email/location below are still PLACEHOLDERS — replace with the real
// High Achievers business details before going live (see README checklist).
// Phone/WhatsApp intentionally reuses the same number as The Biology Mentor (shared business line).
export const siteConfig = {
  businessName: 'High Achievers',
  tagline: 'Where Ambition Meets Achievement',
  legalName: 'High Achievers Coaching Institute',
  phoneDisplay: '+971 55 470 9197',
  phoneHref: '+971554709197',
  whatsappNumber: '971554709197',
  email: 'info@highachievers.ae',
  location: 'Dubai, UAE',
  instagramUrl: 'https://www.instagram.com/highachievers.ae/',
  facebookUrl: 'https://www.facebook.com/highachievers.ae/',
  linkedinUrl: 'https://www.linkedin.com/company/highachievers-ae/',
  formspreeEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT || '',
};

export function whatsappLink(message) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
