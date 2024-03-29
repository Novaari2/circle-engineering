import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portofolio from "./components/Portofolio";
import Review from "./components/Review";
import Visi from "./components/Visi";
import Client from "./components/clients";

export default function Home() {
  return (
    <div className="landing-page">
      {/* Hero */}
      <section className="landing-hero pt-5 mt-10">
          <Hero />
      </section>

      {/* visi misi */}
      <section className="container mx-auto pt-24">
        <Visi />
      </section>

      {/* Portofolio */}
      <section className="container mx-auto pt-24">
        <Portofolio />
      </section>

      <section className="container mx-auto pt-24">
        <Review />
      </section>

      <section className="container mx-auto pt-24">
        <Client />
      </section>

      {/* footer */}
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
    </div>
  );
}
