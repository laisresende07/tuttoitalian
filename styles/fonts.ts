import { Italiana, Lily_Script_One, Gentium_Book_Plus } from "next/font/google";

export const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italiana",
});

export const lily = Lily_Script_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lily",
});

export const gentium = Gentium_Book_Plus({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-gentium",
});