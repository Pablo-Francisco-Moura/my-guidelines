import pt from "./pt.json";
import en from "./en.json";

export type Language = "pt" | "en";

export const translations: Record<Language, Record<string, string>> = {
  pt,
  en,
};

export const getSystemLanguage = (): Language => {
  if (typeof navigator === "undefined") return "en";

  // Check localStorage first
  if (typeof localStorage !== "undefined") {
    const saved = localStorage.getItem("vitepress-language");
    if (saved === "pt" || saved === "en") return saved as Language;
  }

  const lang = navigator.language.split("-")[0];
  return lang === "pt" ? "pt" : "en";
};

export const useI18n = (lang?: Language) => {
  const language = lang || getSystemLanguage();

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return { t, language };
};
