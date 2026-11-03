import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { siteConfig } from "@/config/site";
import type { Metadata, Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s`,
	},
	description: siteConfig.description,
	icons: [
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/icons/favicon.ico",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/icons/favicon.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/icons/icon-16x16.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "24x24",
			url: "/icons/icon-24x24.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/icons/icon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "64x64",
			url: "/icons/icon-64x64.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "192x192",
			url: "/icons/icon-192x192.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "512x512",
			url: "/icons/icon-512x512.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			url: "/icons/apple-touch-icon.png",
		},
	],
  openGraph: {
    title: "REFINORTE",
    description: "Cosechamos la excelencia, refinamos el futuro.",
    url: "https://www.refinorte.com.co",
    siteName: "REFINORTE",
    images: [
      {
        url: "https://www.refinorte.com.co/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "REFINORTE",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "REFINORTE",
    description: "Cosechamos la excelencia, refinamos el futuro.",
    creator: "@refinortens",
    images: [
      {
        url: "https://www.refinorte.com.co/tc-banner.jpg",
        width: 1200,
        height: 675,
        alt: "REFINORTE",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
