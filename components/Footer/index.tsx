"use client";

import styles from "./styles.module.scss";
import Text from "../Text";
import Logo from "../Logo";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className={styles.footer} id="footer">
      <div className={`${styles.top} container`}>
        <div className={styles.info}>
          <div className={styles.block}>
            <Text as="h3" font="italiana" color="white" fontSize={24}>
              {t("visit")}
            </Text>

            <Text font="gentium" color="white" fontSize={16}>
              {t("address").split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </Text>
          </div>

          <div className={styles.block}>
            <Text as="h3" font="italiana" color="white" fontSize={24}>
              {t("contacts")}
            </Text>

            <Text font="gentium" color="white" fontSize={16}>
              {t("phones")}
            </Text>
          </div>

          <div className={styles.block}>
            <Text as="h3" font="italiana" color="white" fontSize={24}>
              {t("email")}
            </Text>

            <Text font="gentium" color="white" fontSize={16}>
              {t("emailAddress")}
            </Text>
          </div>
        </div>

        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.880951376168!2d-123.122!3d49.279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTutto%20Italian%20Restaurant!5e0!3m2!1sen!2sbr!4v0000000000"
          loading="lazy"
        ></iframe>
      </div>

      <div className={styles.center}>
        <Logo variant="white" width={100} />
        <Text font="gentium" color="white" fontSize={16}>
          {t("slogan")}
        </Text>
      </div>

      <hr className={styles.line} />

      <Text font="gentium" color="white" fontSize={14} className={styles.copy}>
        {t("copyright")}
      </Text>
    </footer>
  );
};

export default Footer;