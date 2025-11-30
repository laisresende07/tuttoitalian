"use client";

import styles from "./styles.module.scss";
import { gentium, italiana, lily } from "../../styles/fonts";

type Variant =
    | "title"
    | "subtitle"
    | "body"
    | "label";

interface TextProps {
    children: React.ReactNode;
    as?: keyof React.JSX.IntrinsicElements;
    color?: "text" | "primary" | "accent" | "white";
    variant?: Variant;
    font?: "gentium" | "italiana" | "lily";
    fontSize?: number | string;
    weight?: number;
    align?: "left" | "center" | "right";
    className?: string;
}

export default function Text({
    children,
    as: Tag = "p",
    color = "text",
    variant = "body",
    font = "gentium",
    fontSize,
    weight,
    align,
    className,
}: TextProps) {
    const fontClass =
        font === "italiana"
            ? italiana.className
            : font === "lily"
                ? lily.className
                : gentium.className;

    return (
        <Tag
            className={`
        ${styles.text}
        ${styles[variant]}
        ${styles[color]}
        ${fontClass}
        ${className || ""}
      `}
            style={{
                fontWeight: weight,
                textAlign: align,
                fontSize: fontSize,
            }}
        >
            {children}
        </Tag>
    );
}