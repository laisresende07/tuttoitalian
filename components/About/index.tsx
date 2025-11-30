
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./styles.module.scss";

import Text from "../Text";

import AboutImage from "../../public/images/about.png"; 
import { useTranslations } from "next-intl";

export default function AboutSection() {
    const t = useTranslations("about");

    return (
        <section className={`${styles.about} container`} id="about">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={styles.imageWrapper}
            >
                <Image
                    src={AboutImage}
                    alt="Italian fine dining dish"
                    className={styles.image}
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className={styles.textContent}
            >
                <Text
                    as="h3"
                    font="italiana"
                    color="accent"
                    variant="label"
                    className={styles.label}
                >
                    {t("section")}
                </Text>

                <Text
                    as="h2"
                    font="italiana"
                    variant="title"
                    fontSize={42}
                    color="text"
                    className={styles.title}
                >
                    {t("title")}
                </Text>

                <Text
                    as="p"
                    font="gentium"
                    variant="body"
                    color="text"
                    className={styles.paragraph}
                >
                    {t("description")}
                </Text>
            </motion.div>
        </section>
    );
}