"use client";
import { useState } from "react";
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
  }

  return (
    <nav className={`${styles.navbar}`}>
      <div className={`${styles.navbarWrapper} container`}>
        <div className={styles.wrapper}>
          <Logo width={80} />

          <ul className={styles.navLinks}>
            <li>
              <button
                onClick={() => smoothScroll("about")}
                className={gentium.className}
              >
                {t("about")}
              </button>
            </li>

            <li>
              <button
                onClick={() => smoothScroll("menu")}
                className={gentium.className}
              >
                {t("menu")}
              </button>
            </li>

            <li>
              <button
                onClick={() => smoothScroll("footer")}
                className={gentium.className}
              >
                {t("contact")}
              </button>
            </li>
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

        <button
          className={styles.menuButton}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;