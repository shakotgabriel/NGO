import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Home, Network, Users, HeartHandshake, MessageCircle } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Refugee Mental Health Network",
  description: "Supporting refugee mental health through compassion and care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link href="/" className="text-red-600 font-bold text-xl">
                RMHN
              </Link>
              <div className="flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-red-600 flex gap-2">
                  <Home /> Home
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-red-600  flex gap-2">
                  <Users /> About Us
                </Link>
                <Link href="/programs" className="text-gray-700 hover:text-red-600  flex gap-2">
                  <Network /> Programs
                </Link>
                <Link href="/contribute" className="text-gray-700 hover:text-red-600  flex gap-2">
                  <HeartHandshake /> Get Involved
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-red-600  flex gap-2">
                  <MessageCircle /> Contact
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-gray-50 border-t">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} Refugee Mental Health Network. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
