"use client";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.css";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

export default function Carousel() {
  const carouselData = [
    {
      id: 1,
      type: "ADVENTURE",
      imageUrl: "/slider-1.jpg",
      date: "08.08.2021",
      title: "  Richird Norton photorealistic rendering as real photos",
      description:
        "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.",
    },
    {
      id: 2,
      type: "ADVENTURE",
      imageUrl: "/slider-2.jpg",
      date: "08.08.2021",
      title: "  Richird Norton photorealistic rendering as real photos",
      description:
        "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.",
    },
    {
      id: 3,
      type: "ADVENTURE",
      imageUrl: "/slider-3.jpg",
      date: "08.08.2021",
      title: "  Richird Norton photorealistic rendering as real photos",
      description:
        "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.",
    },
    {
      id: 4,
      type: "ADVENTURE",
      imageUrl: "/slider-4.jpg",
      date: "08.08.2021",
      title: "  Richird Norton photorealistic rendering as real photos",
      description:
        "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.",
    },
  ];

  return (
    <div className="w-full h-100 sm:h-125 md:h-screen relative">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full h-full"
      >
        {carouselData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-full">
              <Image
                src={item.imageUrl}
                alt={item.title}
                loading="eager"
                priority
                fill
                className="w-full h-full object-cover"
              />
              <div className="absolute left-8 md:left-16 bottom-8 md:bottom-16">
                <p className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {item.type}
                </p>
                <h1 className="mt-3.5 text-white text-xl md:text-2xl lg:text-4xl font-bold max-w-xl">
                  {item.title}
                </h1>
                <p className="text-white text-xs font-normal mt-4">
                  {item.date}
                </p>
                <p className="text-white text-xs md:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
