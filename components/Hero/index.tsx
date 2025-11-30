"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

import HomeImage from "../../public/images/home.png";
import styles from "./styles.module.scss";

import Text from "../Text";
import Button from "../Button";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <>
      <section className={`${styles.hero} container`}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.title}
        >
          <Text
            as="h1"
            variant="title"
            font="italiana"
            color="text"
            fontSize={56}
          >
            {t("title")}
          </Text>

          <Text
            as="h1"
            variant="title"
            font="lily"
            color="accent"
            fontSize={64}
            className={styles.lily}
          >
            {t("italian")}
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.action}
        >
          <Text
            as="p"
            variant="body"
            font="gentium"
            color="text"
          >
            {t("subtitle")}
          </Text>

          <Button
            label={t("button")}
            variant="primary"
            onAction={() => {
              const el = document.getElementById("menu");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </motion.div>
      </section>

      <Image
        src={HomeImage}
        alt="Fine dining table"
        className={styles.image}
      />
    </>
  );
}