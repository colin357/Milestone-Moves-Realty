import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Milestone Moves Realty Group | Serving the 55+ Community in the Triangle",
  description:
    "Milestone Moves Realty Group specializes in helping adults 55+ navigate life's most important housing transitions with care, clarity, and confidence in the Triangle, NC.",
  keywords: "senior real estate, 55+ communities, Triangle NC, Apex NC, downsizing, Freda Hamlett",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#3d3d3d]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
