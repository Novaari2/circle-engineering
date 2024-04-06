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
    </div>
  );
}
