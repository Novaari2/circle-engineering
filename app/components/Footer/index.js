import Image from "next/image"

const Footer = () => {
    return (
        <>
            <footer className="bg-purple-progress py-20 text-white text-lg">
                <div className="container mx-auto">
                    <div className="sm:flex mb-4">
                        <div className="sm:w-1/2 sm:mt-0 mt-8 h-auto">
                            <Image src="/logo-footer.svg" alt="Logo" width={54} height={54} className="mb-3" />
                            <p className="font-light">
                            Helps people execute their <br />bright ideas
                            </p>
                        </div>
                        <div className="sm:w-1/4 h-auto">
                            <div class="mb-8 font-bold">Explore</div>
                            <ul class="font-light">
                                <li class="mb-3">Our Services</li>
                                <li class="mb-3">Equity System</li>
                                <li class="mb-3">Refund</li>
                                <li class="mb-3">Shareholder</li>
                            </ul>
                        </div>
                        <div className="sm:w-1/4 h-auto">
                            <div class="mb-8 font-bold">Explore</div>
                            <ul class="font-light">
                            <li class="mb-3">My Account</li>
                            <li class="mb-3">Top Startups</li>
                            <li class="mb-3">How-to Tutorials</li>
                            <li class="mb-3">Withdrawl</li>
                            </ul>
                        </div>
                        <div className="sm:w-1/4 h-auto">
                            <div class="mb-8 font-bold">Explore</div>
                            <ul class="font-light">
                                <li class="mb-3">+021 2208 1996</li>
                                <li class="mb-3">KBP, Bandung</li>
                                <li class="mb-3">No.12 (Backer)</li>
                                <li class="mb-3">support@backer.id</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer