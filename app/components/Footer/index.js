'use client'
import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
    const [phoneNumber] = useState('+6288803905669'); // Replace with your WhatsApp number

    const handleWhatsAppClick = () => {
        const whatsappURL = `https://wa.me/${phoneNumber}`;
        window.open(whatsappURL, '_blank');
    };
    return (
        <div className="bg-purple-progress py-10 md:py-20 text-white text-lg relative">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="md:flex-row inline-flex md:w-1/2 md:mt-0 mt-4 h-auto">
                        <Image src="/logo-circle-engineering.png" alt="Logo" width={319} height={133} />
                    </div>
                    <div className="ml-5 mt-10 mb-5">
                        <h3>Circle Engineering.</h3>
                        <p className="font-light">Menjadi perusahaan terpercaya dalam bidang pengadaan maupun perawatan sipil & elektrikal</p>
                    </div>
                    <div className="md:w-1/4 h-auto ml-5">
                        <div className="mb-4 md:mb-8 font-bold">Layanan</div>
                        <ul className="font-light">
                            <li className="mb-3">Pembangunan / renovasi bangunan</li>
                            <li className="mb-3">Perbaikan / pembuatan instalasi listrik</li>
                            <li className="mb-3">Pengurusan pasang baru dan tambah daya</li>
                        </ul>
                    </div>
                    <div className="md:w-1/4 h-auto ml-5">
                        <div className="mb-4 md:mb-8 font-bold">Office</div>
                        <ul className="font-light">
                            <li className="mb-3">+021 2208 1996</li>
                            <li className="mb-3">Semarang</li>
                            <li className="mb-3">No 12 / Habi Saputra</li>
                            <li className="mb-3">support@circle.id</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Floating WhatsApp Icon */}
            <div className="fixed right-10 bottom-20 z-50 cursor-pointer" onClick={handleWhatsAppClick}>
                <Image src="/icons8-whatsapp.gif" alt="WhatsApp Icon" width={65} height={65} />
            </div>
        </div>
    );
}
