export type ContactDetailKey = "email" | "whatsapp" | "phone" | "linkedin";

interface ContactDetail {
  key: ContactDetailKey;
  value: string;
  href: string;
  isConfigured: boolean;
  isExternal: boolean;
  icon?: "linkedin" | "whatsapp";
}

const email = "ericmancebo6950@gmail.com";
const linkedinUrl = "https://www.linkedin.com/in/eric-mancebo-muminhodzic-a50361330/";
const phoneDisplay = "610 271 191";
const phoneInternational = "34610271191";

export const contactDetails: Record<ContactDetailKey, ContactDetail> = {
  email: {
    key: "email",
    value: email,
    href: `mailto:${email}`,
    isConfigured: true,
    isExternal: false,
  },
  whatsapp: {
    key: "whatsapp",
    value: phoneDisplay,
    href: `https://wa.me/${phoneInternational}`,
    isConfigured: true,
    isExternal: true,
    icon: "whatsapp",
  },
  phone: {
    key: "phone",
    value: phoneDisplay,
    href: `tel:+${phoneInternational}`,
    isConfigured: true,
    isExternal: false,
  },
  linkedin: {
    key: "linkedin",
    value: "LinkedIn",
    href: linkedinUrl,
    isConfigured: true,
    isExternal: true,
    icon: "linkedin",
  },
};
