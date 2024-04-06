import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <>
      {/* <div className="header__bg"></div> */}
      <div className="container mx-auto relative mt-10">
        {/* <header className="flex items-center flex-wrap justify-between">
          <div className="flex-shrink-0">
            <Image src="/logo-circle-engineering.png" alt="Logo" width={200} height={200} />
          </div>
          <nav className="flex flex-grow justify-center items-center mt-4 md:mt-0">
            <ul className="flex justify-between items-center">
              <li>
                <Link href="#" className="text-black hover:text-teal-500 text-lg px-4 py-3 block md:inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-black hover:text-teal-500 text-lg px-4 py-3 block md:inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-black hover:text-teal-500 text-lg px-4 py-3 block md:inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <ul className="flex justify-center md:justify-end items-center mt-4 md:mt-0">
            <li>
              <Link href="#" className="inline-block hidden md:block bg-orange-button border-white border hover:bg-opacity-25 text-white font-light text-lg rounded-full px-6 py-1">
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </header> */}
        <div className="flex flex-col md:flex-row items-center pt-10 px-5 md:px-0">
          <div className="w-full md:w-1/2 text-center md:text-left mb-5 md:mb-0">
            <h1 className="text-4xl text-black mb-5">
              Kami siap <br />
              mengatasi & <u className="hero-underline">masalah</u> <br />
              kelistrikan anda
            </h1>
            <p className="text-black text-xl font-light mb-8">
              Pilih teknisi yang tepat <br />
              untuk menyelesaikan permasalahan elektrikal anda
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mt-10">
            <Image src="/hero.jpg" alt="Hero" width={250} height={100} className="rounded-lg hidden md:block" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero