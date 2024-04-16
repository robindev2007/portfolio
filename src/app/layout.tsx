import type { Metadata } from "next";
import { Inter, Sen } from "next/font/google";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sen = Sen({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const ahrefFont = localFont({
  src: "../../public/fonts/ahref-bold.woff2",
  variable: "--font-ahref",
});

export const metadata: Metadata = {
  title: "Robin Mia | Fullstack Developer",
  description: "Fullstack web developer | Live in Bangladesh | Open for work",
  verification: {
    google: "F34cI-FmqcyPEdSVNhug_a4m_pbKSqI6rQzQGQ-ulEs",
  },
};
// <meta name="google-site-verification" content="F34cI-FmqcyPEdSVNhug_a4m_pbKSqI6rQzQGQ-ulEs" />

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en dark">
      <body
        className={`${sen.className} ${inter.variable} ${ahrefFont.variable}`}
      >
        <NextTopLoader showSpinner={false} />
        <main className="font-s min-h-screen overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
