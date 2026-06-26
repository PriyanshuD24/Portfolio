import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import MainLayout from "@/layouts/MainLayout";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Priyanshu Dhawan — Full Stack Developer",
  description:
    "Portfolio of Priyanshu Dhawan, a Full Stack Developer specializing in React, Next.js, Node.js, and scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased min-h-screen max-w-screen bg-[#121212] p-4 sm:p-8 md:p-12 lg:p-16 relative`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

