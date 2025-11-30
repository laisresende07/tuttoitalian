"use client";

import { useState, useRef, useEffect } from "react";
import { useLocaleContext } from "../providers/I18nProvider";
import styles from "./styles.module.scss";

export default function LocaleSwitcher() {
  const { locale, setLocale } = useLocaleContext();
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  // Fecha ao clicar fora
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLabel = locale.toUpperCase();

  return (
    <div className={styles.switcher} ref={ref}>
      {/* Botão do dropdown */}
      <button
        className={styles.dropdownButton}
        onClick={() => setOpen(!open)}
      >
        {currentLabel}
        <span className={`${styles.arrow} ${open ? styles.open : ""}`}>▾</span>
      </button>

      {/* Menu */}
      {open && (
        <div className={styles.dropdownMenu}>
          <button
            className={locale === "en" ? styles.active : ""}
            onClick={() => {
              setLocale("en");
              setOpen(false);
            }}
          >
            EN
          </button>

          <button
            className={locale === "de" ? styles.active : ""}
            onClick={() => {
              setLocale("de");
              setOpen(false);
            }}
          >
            DE
          </button>
        </div>
      )}
    </div>
  );
}