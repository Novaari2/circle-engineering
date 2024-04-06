import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Circle Engineering",
  description: "Jasa Elektrik Semarang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <div className="cta-clip -mt-20"></div>
        <section className="call-to-action bg-purple-progress pt-64 pb-10">
          <div className="container mx-auto">
            <div className="w-full text-center">
              <h1 className="text-5xl text-white font-semibold">
              Percayakan kepada kami
              <br />
              Untuk menangani masalah anda
              </h1>
            </div>
          </div>
        </section>
        <Footer />
      </body>
    </html>
  );
}
