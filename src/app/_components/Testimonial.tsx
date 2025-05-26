"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
const testimonials = [
  { name: "Ali", feedback: "Amazing service!" },
  { name: "Sara", feedback: "Very smooth experience." },
  { name: "Ahmed", feedback: "Highly recommended!" },
  { name: "Zara", feedback: "I love the design." },
];

export default function TestimonialSlider() {
  return (
    <div className="max-w-7xl mx-auto h-screen p-10 lg:p-0 ">
      <h1 className="text-[32px] lg:text-[70px] text-[#181A1F] leading-[134%] font-semibold mb-20 text-center lg:text-left">
        TESTIMONIALS
      </h1>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1.5}
        centeredSlides={true}
        pagination={{ clickable: true }}
        className="testimonial-swiper w-full max-w-4xl px-4 "
      >
        {testimonials.map((t, index) => (
          <SwiperSlide
            key={index}
            className="testimonial-slide bg-gradient-to-l from-[#9C0E0F] to-[#360505] lg:w-[802px] h-[315px] rounded-lg"
          >
            <div className="bg-white p-6 rounded-xl shadow-md text-center bg-gradient-to-l from-[#9C0E0F] to-[#360505] w-[300px] lg:w-[802px] h-[315px] flex justify-around lg:justify-start ">
              <Image
                src={"/images/teacher.jpg"}
                width={253}
                height={253}
                alt="image"
                className="object-center object-cover w-[100px] lg:w-auto h-[100px] lg:h-auto"
              />
              <div className="flex flex-col justify-start p-2 lg:w-[30%]  gap-y-6 items-center">
                <div className="flex gap-x-2 justify-start items-start text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="lg:space-y-6 flex flex-col justify-center items-center">
                  <h1 className="font-bold text-[16px] lg:text-[30px] leading-[35.27px] text-white text-left">
                    N GUPTA
                  </h1>
                  <p className="para !text-white !text-[12px]  ">
                    Airport Driven took our London sightseeing tour to the next
                    level. The chauffeur’s personalized approach and the
                    comfortable ride made it an exceptional experience. Highly
                    recommend
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
