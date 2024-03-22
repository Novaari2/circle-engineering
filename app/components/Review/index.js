import Image from "next/image"

const Review = () => {
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="w-auto">
                    <h2 className="text-3xl text-gray-900 mb-8">
                    See What Our <br />
                    Happy Clients Say
                    </h2>
                </div>
            </div>
            <div className="flex mb-10">
                <div className="w-2/12 flex justify-center items-start">
                    <Image src="/testimonial-line.svg" alt="Review" width={200} height={200} />
                </div>
                <div className="w-8/12 mt-16">
                    <h2 className="text-3xl text-gray-900 font-light">
                    “Funding at Bucker is very easy and comfortable. <br />
                    Just need to find an idea, click and already funding.”
                    </h2>
                    <div className="testimonial-info mt-8">
                        <div className="name text-xl font-semibold">Shopie Nicole</div>
                        <div className="title text-xl font-light text-gray-400">
                            Project Manager
                        </div>
                    </div>
                    <div className="testimonial-icon mt-10">
                        <Image src="/testimonial-1-icon.png" alt="Quote" width={200} height={200} className="w-20 mr-5 inline-block testimonial-user rounded-full" />
                        <Image src="/testimonial-1-icon.png" alt="Quote" width={200} height={200} className="w-20 mr-5 inline-block testimonial-user rounded-full" />
                        <Image src="/testimonial-1-icon.png" alt="Quote" width={200} height={200} className="w-20 mr-5 inline-block testimonial-user active rounded-full" />
                    </div>
                </div>
                <div className="w-2/12"></div>
            </div>
        </>
    )
}

export default Review