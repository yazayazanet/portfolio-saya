import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Muhammad Bama Yaza | Mechanical & Energy Conversion Engineer",
  description:
    "Portfolio of Muhammad Bama Yaza - D4 Industrial Mechanical Engineering graduate from ITS Surabaya with focus on Energy Conversion, CFD Simulation (ANSYS Fluent), Piping Analysis (CAEPIPE, EPANET), and Industrial Operations.",
  keywords: [
    "Muhammad Bama Yaza",
    "Portfolio",
    "Teknik Mesin Industri",
    "ITS Surabaya",
    "Energy Conversion",
    "Mechanical Engineer",
    "Biodiesel",
    "ANSYS Fluent",
    "CAEPIPE",
    "EPANET",
    "SolidWorks",
    "Autodesk Inventor",
  ],
  authors: [{ name: "Muhammad Bama Yaza" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
