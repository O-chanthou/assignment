import { createI18n } from "vue-i18n";
import en from "../../locales/en.json";
import km from "../../locales/km.json";

const localeLangKey = localStorage.getItem("langKey") || "en";
export const allLocales = ["en", "km"];

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localeLangKey,
  fallbackLocale: "en",
  messages: {
    en: en,
    km: km,
  },
});

// Set new locale.
export async function setLocale(locale: any) {
  i18n.global.locale.value = locale;
  localStorage.setItem("langKey", locale);
}
export default i18n;
