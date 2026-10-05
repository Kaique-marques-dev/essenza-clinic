import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import "./globals.css";
import "./responsive.css";
import "./finishing.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-title",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Essenza | Estética & Harmonização",

  description:
    "Tratamentos personalizados de estética e harmonização com foco em naturalidade, segurança e cuidado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${cormorant.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}