"use client";

import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import en from "../../messages/en.json";
import de from "../../messages/de.json";

type Locale = "en" | "de";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const messages: Record<Locale, any> = { en, de };

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale | null;
    if (stored && messages[stored]) {
      setLocale(stored);
    }
  }, []);

  function updateLocale(next: Locale) {
    setLocale(next);
    localStorage.setItem("locale", next);
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale: updateLocale }}>
      <NextIntlClientProvider locale={locale} messages={messages[locale]}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}

export function useLocaleContext() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocaleContext must be inside I18nProvider");
  return ctx;
}