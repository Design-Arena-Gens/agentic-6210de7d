import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YouTube 2037 - Next Generation Video Platform",
  description: "Experience the future of video content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
