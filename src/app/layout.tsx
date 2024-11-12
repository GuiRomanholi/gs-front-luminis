import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


export const metadata: Metadata = {
  title: "Luminis",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{  children: React.ReactNode;}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="/logo_luminus_icon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
