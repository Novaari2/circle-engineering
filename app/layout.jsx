import { Outfit } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../components/ThemeProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Jasa Perbaikan Dan Instalasi Listrik Semarang",
  description: "Jasa Perbaikan Dan Instalasi Listrik Di Kota Semarang Dan Jawa Tengah. Semua Jenis Instalasi Listrik: rumah tangga, pabrik, perkantoran, dan lainnya.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <Head>
        <meta name="google-site-verification" content="JJnPlHsHdheBoVTvxJTeBU25MPQPys9ZcSY-9_Lzt98" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
