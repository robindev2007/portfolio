import { Sen } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ToasterProvider from "@/components/toaster-provider";
import PerfectScrollbarContainer from "@/components/PerfectScrollbarContainer";

const inter = Sen({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background antialiased`}>
        <main className="flex h-full min-h-screen flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <ToasterProvider richColors position="top-right" />
            <PerfectScrollbarContainer>{children}</PerfectScrollbarContainer>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
