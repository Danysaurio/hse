import type { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

const SITE_URL = "https://www.hsesolutions.mx";
const OG_TITLE = "HSE Solutions | Seguridad, Salud y Medio Ambiente";
const OG_DESCRIPTION =
  "Gestión de riesgos, seguridad industrial y protección civil. Más de 35 años de experiencia creando entornos seguros.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "HSE Solutions — Transformamos riesgos complejos en soluciones sustentables",
  description:
    "Gestión integral de riesgos, seguridad industrial, protección civil y sustentabilidad. 35+ años de experiencia.",
  manifest: "/icons/site.webmanifest",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: SITE_URL,
    siteName: "HSE Solutions",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/og-hse.jpg",
        width: 1200,
        height: 630,
        alt: OG_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: ["/og-hse.jpg"],
  },
  icons: {
    icon: [
      { url: "/icons/favicon.ico" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
