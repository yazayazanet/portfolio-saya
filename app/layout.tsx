import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Zidni Khaerur Rizqia | Informatics Graduate & Software Developer",
  description:
    "Portfolio of Zidni Khaerur Rizqia - Informatics graduate from Universitas Gunadarma with experience in Web Application Development, Computer Vision (YOLOv8, Deep SORT), and software engineering.",
  keywords: [
    "Zidni Khaerur Rizqia",
    "Portfolio",
    "Informatics",
    "Gunadarma",
    "Software Developer",
    "Computer Vision",
    "YOLOv8",
    "Deep SORT",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Zidni Khaerur Rizqia" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
