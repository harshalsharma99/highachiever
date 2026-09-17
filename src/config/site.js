// Single source of truth for business contact details.
// Update here and it flows through the header, footer, hero, contact form and WhatsApp button.
// NOTE: phone/WhatsApp/email/location below are PLACEHOLDERS — replace with the real
// High Achievers business details before going live (see README checklist).
export const siteConfig = {
  businessName: 'High Achievers',
  tagline: 'Where Ambition Meets Achievement',
  legalName: 'High Achievers Coaching Institute',
  phoneDisplay: '+971 4 000 0000',
  phoneHref: '+97140000000',
  whatsappNumber: '971500000000',
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
