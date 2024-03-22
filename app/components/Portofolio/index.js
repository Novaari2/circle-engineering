import Image from "next/image"
import Link from "next/link"

const Portofolio = () => {
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="w-auto">
                    <h2 className="text-3xl text-gray-900 mb-8">
                        New projects you can <br />
                        taken care of
                    </h2>
                </div>
                <div className="w-auto mt-5">
                    <Link href="#" className="text-gray-900 hover:underline text-md font-medium">View All</Link>
                </div>
            </div>
            <div className="flex mt-3 -mx-6">
                <div className="card-project w-1/3 mx-6 my-4 p-5 border border-gray-500 rounded-20">
                    <div className="item">
                        <figure className="item-image">
                            <Image src="/project-thumbnail-1.jpg" alt="Project" width={200} height={200} className="rounded-20 w-full" />
                        </figure>
                        <div className="item-meta">
                            <h4 className="text-3xl font-medium text-gray-900 mt-5">
                                Robotic Hand
                            </h4>
                            <p className="text-md font-light text-gray-900">
                                Creating robotic hand for better movement
                            </p>
                            <div className="relative pt-4 progress-bar">
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg">
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-stripped"></div>
                                </div>
                            </div>
                            <div className="flex progress-info">
                                <div>20%</div>
                                <div className="ml-auto font-semibold">Rp. 100.000.000</div>
                            </div>
                        </div>
                        <Link href="#" className="text-center mt-5 button-cta block-w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-2 text-lg rounded-full">Fund Now</Link>
                    </div>
                </div>

                <div className="card-project w-1/3 mx-6 my-4 p-5 border border-gray-500 rounded-20">
                    <div className="item">
                        <figure className="item-image">
                            <Image src="/project-thumbnail-1.jpg" alt="Project" width={200} height={200} className="rounded-20 w-full" />
                        </figure>
                        <div className="item-meta">
                            <h4 className="text-3xl font-medium text-gray-900 mt-5">
                                Robotic Hand
                            </h4>
                            <p className="text-md font-light text-gray-900">
                                Creating robotic hand for better movement
                            </p>
                            <div className="relative pt-4 progress-bar">
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg">
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-stripped"></div>
                                </div>
                            </div>
                            <div className="flex progress-info">
                                <div>20%</div>
                                <div className="ml-auto font-semibold">Rp. 100.000.000</div>
                            </div>
                        </div>
                        <Link href="#" className="text-center mt-5 button-cta block-w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-2 text-lg rounded-full">Fund Now</Link>
                    </div>
                </div>

                <div className="card-project w-1/3 mx-6 my-4 p-5 border border-gray-500 rounded-20">
                    <div className="item">
                        <figure className="item-image">
                            <Image src="/project-thumbnail-1.jpg" alt="Project" width={200} height={200} className="rounded-20 w-full" />
                        </figure>
                        <div className="item-meta">
                            <h4 className="text-3xl font-medium text-gray-900 mt-5">
                                Robotic Hand
                            </h4>
                            <p className="text-md font-light text-gray-900">
                                Creating robotic hand for better movement
                            </p>
                            <div className="relative pt-4 progress-bar">
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg">
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-stripped"></div>
                                </div>
                            </div>
                            <div className="flex progress-info">
                                <div>20%</div>
                                <div className="ml-auto font-semibold">Rp. 100.000.000</div>
                            </div>
                        </div>
                        <Link href="#" className="text-center mt-5 button-cta block-w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-2 text-lg rounded-full">Fund Now</Link>
                    </div>
                </div>
            </div>
            <div className="flex mt-3 -mx-6">
                <div className="card-project w-1/3 mx-6 my-4 p-5 border border-gray-500 rounded-20">
                    <div className="item">
                        <figure className="item-image">
                            <Image src="/project-thumbnail-1.jpg" alt="Project" width={200} height={200} className="rounded-20 w-full" />
                        </figure>
                        <div className="item-meta">
                            <h4 className="text-3xl font-medium text-gray-900 mt-5">
                                Robotic Hand
                            </h4>
                            <p className="text-md font-light text-gray-900">
                                Creating robotic hand for better movement
                            </p>
                            <div className="relative pt-4 progress-bar">
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg">
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-stripped"></div>
                                </div>
                            </div>
                            <div className="flex progress-info">
                                <div>20%</div>
                                <div className="ml-auto font-semibold">Rp. 100.000.000</div>
                            </div>
                        </div>
                        <Link href="#" className="text-center mt-5 button-cta block-w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-2 text-lg rounded-full">Fund Now</Link>
                    </div>
                </div>

                <div className="card-project w-1/3 mx-6 my-4 p-5 border border-gray-500 rounded-20">
                    <div className="item">
                        <figure className="item-image">
                            <Image src="/project-thumbnail-1.jpg" alt="Project" width={200} height={200} className="rounded-20 w-full" />
                        </figure>
                        <div className="item-meta">
                            <h4 className="text-3xl font-medium text-gray-900 mt-5">
                                Robotic Hand
                            </h4>
                            <p className="text-md font-light text-gray-900">
                                Creating robotic hand for better movement
                            </p>
                            <div className="relative pt-4 progress-bar">
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg">
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-stripped"></div>
                                </div>
                            </div>
                            <div className="flex progress-info">
                                <div>20%</div>
                                <div className="ml-auto font-semibold">Rp. 100.000.000</div>
                            </div>
                        </div>
                        <Link href="#" className="text-center mt-5 button-cta block-w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-2 text-lg rounded-full">Fund Now</Link>
                    </div>
                </div>

                <div className="card-project w-1/3 mx-6 my-4 p-5 border border-gray-500 rounded-20">
                    <div className="item">
                        <figure className="item-image">
                            <Image src="/project-thumbnail-1.jpg" alt="Project" width={200} height={200} className="rounded-20 w-full" />
                        </figure>
                        <div className="item-meta">
                            <h4 className="text-3xl font-medium text-gray-900 mt-5">
                                Robotic Hand
                            </h4>
                            <p className="text-md font-light text-gray-900">
                                Creating robotic hand for better movement
                            </p>
                            <div className="relative pt-4 progress-bar">
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg">
                                    <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-stripped"></div>
                                </div>
                            </div>
                            <div className="flex progress-info">
                                <div>20%</div>
                                <div className="ml-auto font-semibold">Rp. 100.000.000</div>
                            </div>
                        </div>
                        <Link href="#" className="text-center mt-5 button-cta block-w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-2 text-lg rounded-full">Fund Now</Link>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Portofolio