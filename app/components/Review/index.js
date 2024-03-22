import Image from "next/image"

const Review = () => {
    return (
        <div className="container mx-auto px-4 lg:px-0">
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="w-full lg:w-auto mb-8 lg:mb-0">
                    <h2 className="text-3xl lg:text-4xl text-gray-900">
                        Visi & Misi Kami
                    </h2>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-10 mb-10">
                <div className="w-full lg:w-1/2 mt-8 lg:mt-16">
                    <h3 className="font-medium text-xl lg:text-2xl text-gray-900 text-center lg:text-left">Visi</h3>
                    <p className="font-light text-center lg:text-left text-gray-900 text-lg mt-5">
                        Menjadi Perusahaan terpercaya dalam bidang pengadaan maupun perawatan sipil & elektrikal
                    </p>
                </div>
                <div className="w-full lg:w-1/2 mt-8 lg:mt-16">
                    <h3 className="font-medium text-xl lg:text-2xl text-gray-900 text-center lg:text-left">Misi</h3>
                    <ol className="text-center lg:text-left">
                        <li className="font-light text-gray-900 text-lg mt-5">
                            Memiliki sdm yang kompeten, berintegritas, dan tanggung jawab yang tinggi
                        </li>
                        <li className="font-light text-gray-900 text-lg mt-5">
                            Menyediakan produk yang berkualitas serta bergaransi
                        </li>
                        <li className="font-light text-gray-900 text-lg mt-5">
                            Memberikan layanan purna jual yang prima, tepat, dan cepat
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Review;
