"use client";

import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

import Text from "../Text/";
import Button from "../Button";

import { categories, dishes } from "../../data/menu";

import startersImg from "../../public/images/starters.png";
import mainsImg from "../../public/images/main-dishes.png";
import dessertsImg from "../../public/images/desserts.png";
import beveragesImg from "../../public/images/beverages.png";
import { useTranslations } from "next-intl";
import { useLocaleContext } from "../../app/providers/I18nProvider";

const categoryImages: any = {
    starters: startersImg,
    mains: mainsImg,
    desserts: dessertsImg,
    beverages: beveragesImg,
};

export default function MenuSection() {
    const t = useTranslations("menu");
    const { locale } = useLocaleContext();

    const [activeCategory, setActiveCategory] = useState("all");

    const categoriesList = categories[locale];
    const dishesList = dishes[locale];

    const [selectedDish, setSelectedDish] = useState(dishesList[0]);

    const filteredDishes =
        activeCategory === "all"
            ? [
                dishesList.find((d) => d.category === "starters"),
                dishesList.find((d) => d.category === "mains"),
                dishesList.find((d) => d.category === "desserts"),
                dishesList.find((d) => d.category === "beverages"),
            ].filter(Boolean)
            : dishesList.filter((dish) => dish.category === activeCategory);

    useEffect(() => {
        setSelectedDish(filteredDishes[0]);
    }, [activeCategory]);

    return (
        <section className={styles.menuSection} id="menu">
            <div className={styles.imageGrid}>
                {categoriesList
                    .filter((c) => c.id !== "all")
                    .map((cat) => (
                        <div
                            key={cat.id}
                            className={`${styles.imageCard} ${activeCategory === cat.id ? styles.active : ""
                                }`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            <Image
                                src={categoryImages[cat.id]}
                                alt={cat.label}
                                className={styles.categoryImage}
                            />
                            <Text
                                as="h3"
                                font="italiana"
                                color="white"
                                fontSize={34}
                                className={styles.categoryLabel}
                            >
                                {cat.label}
                            </Text>
                        </div>
                    ))}
            </div>

            <div className={`${styles.content} container`}>
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
                    {t("title")}
                </Text>

                <div className={styles.filterRow}>
                    {categoriesList.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`${styles.filterButton} ${activeCategory === cat.id ? styles.activeFilter : ""
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}

                    <Button
                        label={t("button")}
                        variant="primary"
                        onAction={() => alert("abrir pdf com o cardapio clicavel")}
                        className="hideMobile"
                    />
                </div>

                <div className={styles.listWrapper}>
                    <Button
                        label={t("button")}
                        variant="primary"
                        onAction={() => alert("abrir pdf com o cardapio clicavel")}
                        className="hideDesktop"
                    />
                    
                    <div className={styles.list}>
                        {filteredDishes.map((dish) => (
                            <div
                                key={dish.id}
                                className={`${styles.dishItem} ${selectedDish?.id === dish.id ? styles.activeDish : ""
                                    }`}
                                onClick={() => setSelectedDish(dish)}
                            >
                                <div>
                                    <Text as="h4" font="italiana" fontSize={20}>
                                        {dish.name}
                                    </Text>
                                    <Text variant="body" font="gentium" color="text" fontSize={16}>
                                        {dish.description}
                                    </Text>
                                </div>

                                <Text as="span" font="italiana" color="text">
                                    ${dish.price.toFixed(2)}
                                </Text>
                            </div>
                        ))}
                    </div>

                    <Image
                        src={selectedDish.image}
                        alt={selectedDish.name}
                        width={420}
                        height={420}
                        className={styles.dishPreview}
                    />
                </div>
            </div>
        </section>
    );
}