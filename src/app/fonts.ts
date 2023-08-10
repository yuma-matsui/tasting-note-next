import { Source_Sans_Pro, Zen_Old_Mincho } from "next/font/google";

export const zen_old_mincho = Zen_Old_Mincho({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-zen-old-mincho",
  weight: "400",
});

export const sans_pro = Source_Sans_Pro({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans-pro",
  weight: "400",
});
