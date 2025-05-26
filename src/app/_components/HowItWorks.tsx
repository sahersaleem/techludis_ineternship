import Image from "next/image";
import React from "react";

import { CiPlay1 } from "react-icons/ci";
const HowItWorks = () => {
  return (
    <div className=" max-w-7xl mx-auto h-auto lg:h-screen p-10 lg:p-0">
      <h1 className="section-heading mt-10">
        How <span className="text-[#9C0E0F]">It Works</span>{" "}
      </h1>
      <div className="lg:justify-between flex  items-center flex-col lg:flex-row gap-y-6 ">
        <div>
          {[
            {
              number: 1,
              heading: "Create Your Route",
              para: "Enter your pickup & dropoff locations or the number of hours you wish to book a car and driver for",
            },
            {
              number: 2,
              heading: "Create Your Route",
              para: "Enter your pickup & dropoff locations or the number of hours you wish to book a car and driver for",
            },
            {
              number: 3,
              heading: "Create Your Route",
              para: "Enter your pickup & dropoff locations or the number of hours you wish to book a car and driver for",
            },
          ].map((item, index) => (
            <div key={index} className="flex gap-x-2 lg:w-[70%] mt-6 lg:mt-0">
              <div className="flex flex-col justify-center items-center">
                <span
                  className={`px-4 py-2 rounded-full ${
                    item.number == 1
                      ? "p-2 rounded-full bg-gradient-to-tr from-[#9F0507] to-[#360505]"
                      : "p-2 rounded-full bg-black"
                  }`}
                >
                  {item.number}
                </span>{" "}
                {item.number <= 3 && (
                  <div className="h-[105.7px] border-l-[3.59px] border-dashed border-[#9F0507]"></div>
                )}
              </div>
              <div className="text-black">
                <h1 className="font-semibold text-[16px] lg:text-[23.9px] leading-[35.85px] text-[#181A1F]">
                  {item.heading}
                </h1>
                <p className="text-[14px] lg:text-[18px] font-light leading-[31.07px] text-[#181A1F]">
                  {item.para}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[637px] h-[689px] relative">
          <Image
            src={"/images/video.jpg"}
            width={637}
            height={689}
            alt="image"
            className=""
          />
          <div className="absolute top-0 left-0 flex justify-center items-center w-[637px] h-[689px]">
          <button className=" w-[215px] h-[66px] bg-[#FFFFFF] flex justify-evenly items-center border-[1.2px] rounded-[4.78px]"><CiPlay1 size={30} className="text-black"/><p className="text-[#181A1F]">Play video</p></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
