"use client"

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Client = () => {
  let img = ['erp-rm.png','global-perkasa.jpeg','haistar.png','juki.jpeg','ojk.png','stefanie.png'];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div className="container mx-auto px-5 lg:px-0">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
        <div className="w-full lg:w-auto mb-8 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl text-gray-900">
            Client Kami
          </h2>
        </div>
      </div>
      <div className="mx-auto w-full">
        <Slider {...settings}>
          {img.map((imageName, index) => (
            <div key={index} className="px-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-80 w-full sm:h-96 md:h-60 lg:h-80">
                    <Image src={`/clients/${imageName}`} alt="Service Image" className="bg-cover w-full h-80 sm:h-full" width={300} height={200} />
                  </div>
                </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Client;
