import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lexconquer.com"),
  title: {
    default: "Lex Conquer — Spell. Claim. Conquer.",
    template: "%s · Lex Conquer",
  },
  description:
    "A multiplayer word-territory game. Spell on a grid to claim tiles, fortify bases, and outlast up to five opponents. Coming 2026 to iOS and Android.",
  openGraph: {
    title: "Lex Conquer — Spell. Claim. Conquer.",
    description:
      "Multiplayer word-territory strategy. Real-time Blitz, turn-based Campaigns, private factions, and tournaments.",
    url: "https://lexconquer.com",
    siteName: "Lex Conquer",
    type: "website",
    images: [{ url: "/lex-conquer-icon.png", width: 1024, height: 1024 }],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/lex-conquer-icon.png", type: "image/png" },
    ],
    apple: "/lex-conquer-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
