import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Todo",
  description: "A simple todo app built using Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
