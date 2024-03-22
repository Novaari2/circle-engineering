import Image from "next/image"
import Link from "next/link"

const Hero = () => {
    return (
      <>
      <div className="header__bg"></div>
        <div className="container mx-auto relative">
            <header className="flex items-center">
                <div className="">
                    <Image src="/logo-circle-engineering.png" alt="Logo" width={200} height={200} className="" />
                </div>
                <ul className="flex items-center">
                    <li>
                      <Link href="#" className="text-white hover:text-teal-500 text-lg px-4 py-3">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white hover:text-teal-500 text-lg px-4 py-3">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white hover:text-teal-500 text-lg px-4 py-3">
                        Contact
                      </Link>
                    </li>
                </ul>
                <ul className="flex ml-auto items-center mt-2">
                    <li>
                      <Link href="#" className="inline-block bg-orange-button border-white border hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full mr-4">
                        Hubungi Kami
                      </Link>
                    </li>
                </ul>
            </header>
            <div className="flex items-center pt-10 px-5 md:px-0">
                <div className="w-1/2">
                    <h1 className="text-4xl text-white mb-5">
                    Kami siap <u class="hero-underline">anda</u> <br />
                    mengatasi & <u class="hero-underline">masalah</u> <br />
                    kelistrikan anda
                    </h1>
                    <p className="text-white text-xl font-light mb-8">
                    Pilih teknisi yang tepat <br />
                    untuk menyelesaikan permasalahan elektrikal anda
                    </p>
                    
                </div>
                <div className="w-1/2 flex justify-center">
                    <Image src="/hero-image@2x.png" alt="Hero" width={500} height={500} className="h-full" />
                </div>
            </div>
        </div>
      </>
    )
}

export default Hero