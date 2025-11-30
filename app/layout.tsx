"use client";

import "../styles/globals.css";
import type { ReactNode } from "react";
import { italiana, lily, gentium } from "../styles/fonts";
import { I18nProvider } from "./providers/I18nProvider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${italiana.variable} ${lily.variable} ${gentium.variable}`}
    >
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}