import type { Metadata } from "next";
import { Lilita_One, Montserrat } from "next/font/google";
import "./globals.css";

const lilita = Lilita_One({ subsets: ["latin-ext"], weight: ["400"] });
const Monts = Montserrat({ subsets: ["latin"], weight: ["900"] });

export const metadata: Metadata = {
  title: "Botly dashboard",
  description: "Botly dashboard with tailwindcss",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lilita.className}${Monts.className}`}>
        {children}
      </body>
    </html>
  );
}
