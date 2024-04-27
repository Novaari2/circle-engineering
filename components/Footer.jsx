'use client';
import Socials from "./Socials";
import { useState } from "react";
import Image from 'next/image';


const Footer = () => {
  const [phoneNumber] = useState('+6288803905669'); 

  const handleWhatsAppClick = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, '_blank');
};
  return (
    <footer className="bg-secondary py-12">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Informasi Kontak */}
        <div className="text-center md:text-left">
          <h3 className="text-white mb-4">Kontak</h3>
          <ul className="text-muted-foreground">
            <li>Alamat: Jalan Contoh No. 123, Kota Contoh</li>
            <li>Telepon: (123) 456-7890</li>
            <li>Email: info@circleengineering.com</li>
          </ul>
        </div>
        {/* Lokasi Kantor */}
        <div className="text-center md:text-left">
          <h3 className="text-white mb-4">Lokasi Kantor Kami</h3>
          <ul className="text-muted-foreground">
            <li>Sendangguwo  RT 10/01, Sendangguwo</li>
            <li>Tembalang</li>
            <li>Kota Semarang</li>
            <li>Jawa Tengah, 52304</li>
          </ul>
        </div>
        {/* Peta Lokasi */}
        <div className="text-center">
          <h3 className="text-white mb-4">Peta Lokasi</h3>
          <div className="h-60">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.978146928554!2d110.4578907!3d-7.0118528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708d8d67d2f851%3A0x8ecb685a7256f336!2sCircle%20Engineering!5e0!3m2!1sen!2sid!4v1714222815512!5m2!1sen!2sid"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Hak Cipta */}
      <div className="text-center mt-8 text-muted-foreground">
        Copyright &copy; Circle Engineering. All rights reserved.
      </div>
      {/* WhatsApp Icon */}
      <div className="fixed right-10 bottom-10 z-50 cursor-pointer" onClick={handleWhatsAppClick}>
        <img src="/wa.png" alt="WhatsApp Icon" width={65} height={65} />
      </div>
    </div>
  </footer>

  )
}

export default Footer