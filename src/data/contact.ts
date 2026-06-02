import { defaultLanguage, type Language } from "../i18n/config";
import { useTranslations } from "../i18n/useTranslations";

export function getContactChannels(language: Language = defaultLanguage) {
  return useTranslations(language).contact.channels;
}

export function getMobileContactChannels(language: Language = defaultLanguage) {
  return getContactChannels(language).filter((channel) =>
    ["email", "whatsapp", "linkedin"].includes(channel.channel),
  );
}

export const contactChannels = getContactChannels();
export const mobileContactChannels = getMobileContactChannels();
