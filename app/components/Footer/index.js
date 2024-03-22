import Image from 'next/image';

export default function Footer() {
    return (
        <div className="bg-purple-progress py-10 md:py-20 text-white text-lg">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="md:flex-row md:w-1/2 md:mt-0 mt-4 h-auto bg-indigo-500">
                        {/* <Image src="/logo-circle-engineering.png" alt="Logo" width={319} height={133} />
                        <h3>Circle Engineering.</h3>
                        <p className="font-light w-1/2">Menjadi perusahaan terpercaya dalam bidang pengadaan maupun perawatan sipil & elektrikal</p> */}
                    </div>
                    <div className="md:w-1/4 h-auto ml-5 bg-cyan-600">
                        {/* <div className="mb-4 md:mb-8 font-bold">Layanan</div>
                        <ul className="font-light">
                            <li className="mb-3">Pembangunan / renovasi bangunan</li>
                            <li className="mb-3">Perbaikan / pembuatan instalasi listrik</li>
                            <li className="mb-3">Pengurusan pasang baru dan tambah daya</li>
                        </ul> */}
                    </div>
                    <div className="md:w-1/4 h-auto ml-5 bg-teal-400">
                        {/* <div className="mb-4 md:mb-8 font-bold">Office</div>
                        <ul className="font-light">
                            <li className="mb-3">+021 2208 1996</li>
                            <li className="mb-3">Semarang</li>
                            <li className="mb-3">No 12 / Habi Saputra</li>
                            <li className="mb-3">support@circle.id</li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
