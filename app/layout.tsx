import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "IDEA IS CAPITAL",
  description: "An innovative solution-oriented company for Africa’s young generation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
