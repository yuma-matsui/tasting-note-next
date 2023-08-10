import { Footer } from "@/layout";

import "./globals.css";

import { sans_pro } from "@/app/fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={sans_pro.className}>
      <body>
        <div className="mx-auto w-full px-5 md:w-162 md:px-0">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
