import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Tarang Patel",
  description: "Tarang Patel's personal programming portfolio",
  authors: {
    name: "Tarang Patel",
  },
  keywords: [
    "Tarang Patel",
    "Portfolio",
    "Software Developer",
    "York University",
    "Computer Science",
    "Full-Stack",
    "React",
    "Next.js",
    "TailwindCSS",
    "Vercel",
    "Node.js",
    "Express",
    "MongoDB",
    "Socket.io",
    "TypeScript",
    "Vite",
    "Postman",
    "GitHub",
    "LinkedIn",
    "Instagram",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Analytics />
      <head>
        <link rel="icon" href="/favicon.ico"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Yrsa:ital,wght@0,300..700;1,300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
