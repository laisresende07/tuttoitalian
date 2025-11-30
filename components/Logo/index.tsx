"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import LogoMobile from "../../public/images/logo-mobile.svg";
import LogoMobileWhite from "../../public/images/logo-mobile-white.svg";
import LogoDesktop from "../../public/images/logo-desktop.svg";
import LogoDesktopWhite from "../../public/images/logo-desktop-white.svg";

interface LogoProps {
    width?: number;
    variant?: "normal" | "white";
    className?: string;
}

const Logo = ({
    width = 100,
    variant = "normal",
    className
}: LogoProps) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();

        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const SelectedLogo = isMobile
        ? variant === "white"
            ? LogoMobileWhite
            : LogoMobile
        : variant === "white"
            ? LogoDesktopWhite
            : LogoDesktop;

    return (
        <Image
            src={SelectedLogo}
            alt="Tutto Italian Logo"
            width={width}
            className={className}
            priority
        />
    );
}

export default Logo;