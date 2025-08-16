import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sarthak Mittal — Bio (2025)",
  description: "Personal bio page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
