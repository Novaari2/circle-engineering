import Image from "next/image"
import Link from "next/link"

const Portofolio = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl text-gray-900">
                    Portofolio Kami
                </h2>
                <Link href="#" className="text-gray-900 hover:underline text-md font-medium">View All</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="card-project mx-auto my-4 p-5 border border-gray-500 rounded-lg">
                        <div className="item">
                            <figure className="item-image">
                                <img src={`/panel${(index % 3) + 1}.jpg`} alt="Project" className="rounded-lg w-full h-40 object-cover" />
                            </figure>
                            <div className="item-meta">
                                <h4 className="text-3xl font-medium text-gray-900 mt-5">
                                    Judul Gambar
                                </h4>
                                <p className="text-md font-light text-gray-900">
                                    Creating robotic hand for better movement
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Portofolio