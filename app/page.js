import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portofolio from "./components/Portofolio";
import Review from "./components/Review";
import Visi from "./components/Visi";

export default function Home() {
  return (
    <div className="landing-page">
      {/* Hero */}
      <section className="landing-hero pt-5">
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

      {/* footer */}
      <div className="cta-clip -mt-20"></div>
        <section className="call-to-action bg-purple-progress pt-64 pb-10">
          <div className="container mx-auto">
            <div className="w-full text-center">
              <h1 className="text-5xl text-white font-semibold">
              Easy way to funding
              <br />
              best idea and innovation
              </h1>
              <button className="inline-block bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 mt-8 text-lg rounded-full">Getting Started</button>
            </div>
          </div>
        </section>
        <Footer />
    </div>
  );
}
