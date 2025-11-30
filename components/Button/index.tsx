"use client";

import styles from "./styles.module.scss";
import { gentium } from "../../styles/fonts";

interface ButtonProps {
    label: string;
    onAction?: () => void;
    variant?: "primary" | "accent";
    className?: string;
}

const Button = ({
    label,
    onAction,
    variant = "primary",
    className = "",
}: ButtonProps) => {
    return (
        <button
            onClick={onAction}
            className={`
        ${styles.button}
        ${styles[`button--${variant}`]}
        ${gentium.className}
        ${className}
      `}
        >
            {label}
        </button>
    );
};

export default Button;