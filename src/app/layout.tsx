import type { Metadata } from "next";
// Import the required font functions from next/font/google
import { Inter, Source_Sans_3 } from "next/font/google";
import "./globals.css";

// Import the new Header and Footer components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Configure the Inter font for headings
const inter = Inter({
  subsets: ["latin"],
  display: 'swap', // Use swap for better font loading performance
  variable: '--font-inter', // CSS variable for Inter
});

// Configure the Source Sans 3 font for body text
const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  weight: ['400', '700'], // Specify desired weights
  display: 'swap',
  variable: '--font-source-sans-pro', // CSS variable for Source Sans Pro
});

export const metadata: Metadata = {
  title: "Venture Network", // Updated title for the project
  description: "Expert-Led Growth Partner: Aligning technology strategy with hands-on execution.", // Updated description from blueprint
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the font variables to the body tag */}
      <body className={`${inter.variable} ${sourceSansPro.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
