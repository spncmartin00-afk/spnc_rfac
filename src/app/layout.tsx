import type { Metadata } from "next";
import "./globals.css";
import "../lib/fontawesome";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Senior Pride Network Canada | National 2SLGBTQI+ Seniors Hub",
  description: "Connecting 2SLGBTQI+ older people and the organizations that serve them — so every elder can live with dignity, safety, and connection anywhere in Canada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-800">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
