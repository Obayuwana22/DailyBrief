import type { Metadata } from "next";
import {
  Inter,
  Geist,
  Geist_Mono,
  Playfair_Display,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetBrainsMono-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DailyBrief",
  description:
    "DailyBrief gives you fast, reliable, and up-to-date news in one place. Stay informed with concise summaries, real-time updates, and a clean, modern reading experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${playfairDisplay.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
