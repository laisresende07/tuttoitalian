"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import { gentium, italiana } from "../../styles/fonts";
import Logo from "../Logo";
import LocaleSwitcher from "../../app/locale/LocaleSwitcher";

const Navbar = () => {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  function smoothScroll(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navbarWrapper} container`}>
        <div className={styles.wrapper}>
          <Logo width={80} />

          <ul className={styles.navLinks}>
            <li><button onClick={() => smoothScroll("about")} className={gentium.className}>{t("about")}</button></li>
            <li><button onClick={() => smoothScroll("menu")} className={gentium.className}>{t("menu")}</button></li>
            <li><button onClick={() => smoothScroll("footer")} className={gentium.className}>{t("contact")}</button></li>
          </ul>
        </div>

        <a
          href="https://wa.me/5531999999999"
          target="_blank"
          rel="noopener noreferrer"
          className={`${italiana.className} ${styles.bookButton}`}
        >
          {t("book")}
        </a>

        <LocaleSwitcher />

        <button className={styles.menuButton} onClick={() => setOpen(true)}>☰</button>

        <div className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`} onClick={() => setOpen(false)} />

        <div className={`${styles.sideMenu} ${open ? styles.sideMenuOpen : ""}`}>
          <button className={styles.closeButton} onClick={() => setOpen(false)}>✕</button>

          <div className={styles.sideNavLinks}>
            <button onClick={() => smoothScroll("about")}>{t("about")}</button>
            <button onClick={() => smoothScroll("menu")}>{t("menu")}</button>
            <button onClick={() => smoothScroll("footer")}>{t("contact")}</button>

            <a
              href="https://wa.me/553199999999999"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sideBook}
            >
              {t("book")}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;