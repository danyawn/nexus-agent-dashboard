import type { Metadata } from "next";
import { Space_Grotesk, Fira_Code } from "next/font/google";
import "./globals.css";
import LayoutClient from "@/components/LayoutClient";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NEXUS AI Command Center",
  description: "Advanced AI monitoring and control dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#0A0A0F]">
      <body
        suppressHydrationWarning
        className={`${spaceGrotesk.variable} ${firaCode.variable} antialiased bg-[#0A0A0F] text-white`}
      >
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
