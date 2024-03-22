import Image from "next/image"

const Visi = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                <div className="w-full md:w-auto md:max-w-md">
                    <h2 className="text-3xl text-gray-900 mb-8 text-center md:text-left">
                        Hanya butuh 3 langkah untuk<br />
                        menyelesaikan masalah anda!
                    </h2>
                </div>
                <div className="w-full md:w-1/2 px-5 md:px-0 mb-5">
                    <Image src="/line-step.svg" alt="Step" width={500} height={500} className="w-full" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center text-center">
                <div className="w-full md:w-1/3 px-5 mb-8">
                    <figure className="flex justify-center items-center">
                        <Image src="/step-1-illustration.svg" alt="Step" width={200} height={200} className="h-30 mb-8" />
                    </figure>
                    <div className="step-content">
                        <h3 className="font-medium">Telephone</h3>
                        <p className="font-light">
                            Hubungi kami melalui nomor <br />yang tertera pada layar
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-5 mb-8">
                    <figure className="flex justify-center items-center">
                        <Image src="/step-2-illustration.svg" alt="Step" width={200} height={200} className="h-30 mb-8" />
                    </figure>
                    <div className="step-content">
                        <h3 className="font-medium">Bertemu</h3>
                        <p className="font-light">
                            Buat janji dan ceritakan masalah, <br />
                            pada teknisi kami
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-5 mb-8">
                    <figure className="flex justify-center items-center">
                        <Image src="/step-3-illustration.svg" alt="Step" width={200} height={200} className="h-30 mb-8" />
                    </figure>
                    <div className="step-content">
                        <h3 className="font-medium">Eksekusi</h3>
                        <p className="font-light">
                            Saatnya teknisi kami untuk <br />
                            mengerjakan keluhan anda
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Visi