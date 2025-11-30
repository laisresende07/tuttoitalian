"use client";

import styles from "./styles.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

import Text from "../Text";
import dinerTable from "../../public/images/diner-table.png";
import { special } from "../../data/menu";
import { useLocaleContext } from "../../app/providers/I18nProvider";
import { useTranslations } from "next-intl";

const Banner = ({text}) => {
    return (
        <section className={styles.banner}>
            <Image
                src={dinerTable}
                alt="Dining table"
                className={styles.imageBanner}
                priority
            />

            <div className={styles.contentBanner}>
                <Text as="h1" font="italiana" fontSize={56} color="white">
                    {text}
                </Text>

                <Text as="h1" font="lily" fontSize={64} color="white">
                    tutto
                </Text>
            </div>
        </section>
    );
};

const SpecialMenu = () => {
    const t = useTranslations("special");
    const { locale } = useLocaleContext();

    const dish = special[locale];

    return (
        <section>
            <Banner text={t("banner")} />

            <div className={`${styles.specialMenu} container`}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Text
                        as="h3"
                        font="italiana"
                        color="accent"
                        variant="label"
                        className={styles.label}
                    >
                        {t("label")}
                    </Text>

                    <Text
                        as="h2"
                        font="italiana"
                        variant="title"
                        fontSize={42}
                        className={styles.title}
                    >
                        {dish.name}
                    </Text>
                </motion.div>

                <div className={styles.content}>
                    <div className={styles.left}>
                        {dish.features.slice(0, 2).map((item) => (
                            <div key={item.id} className={styles.item}>
                                <Text
                                    as="h4"
                                    font="italiana"
                                    color="primary"
                                    fontSize={20}
                                >
                                    {item.label}
                                </Text>

                                <Text variant="body" font="gentium" color="text">
                                    {item.description}
                                </Text>

                                <div className={styles.separator} />
                            </div>
                        ))}
                    </div>

                    <Image
                        src={dish.image}
                        alt={dish.name}
                        width={420}
                        height={420}
                        className={styles.image}
                    />

                    <div className={styles.right}>
                        {dish.features.slice(2, 4).map((item) => (
                            <div key={item.id} className={styles.item}>
                                <Text
                                    as="h4"
                                    font="italiana"
                                    color="primary"
                                    fontSize={20}
                                >
                                    {item.label}
                                </Text>

                                <Text variant="body" font="gentium" color="text">
                                    {item.description}
                                </Text>

                                <div className={styles.separator} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialMenu;