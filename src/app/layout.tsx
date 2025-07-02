import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/matine.css";
import "@/assets/fonts/fonts.css";
import "@mantine/core/styles.css";

import { ThemeProvider } from "@/components/Providers/ThemeProvider";
import Providers from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Clair AI",
  description: "Building intelligence in finance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <ThemeProvider>{children}</ThemeProvider> */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
