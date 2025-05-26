import React from "react";
import Image from "next/image";
import { MdArrowBackIos } from "react-icons/md";

const Fleet = () => {
  return (
    <div className=" max-w-7xl mx-auto h-auto lg:h-screen z-20 px-10 sm:px-0 pb-10 sm:pb-0">
      <h1 className="text-[32px] lg:text-[70px] leading-[134%] text-black font-semibold mt-10">
        Our <span className="text-[#9C0E0F]">Fleet</span>{" "}
      </h1>
      <p className="text-[#424242] font-normal text-[16px] lg:text-[18px] leading-[161%] capitalize ">
        At Airport Driven, we stock exceptional vehicles. We are connoisseurs of
        outstanding driving experiences. Our vehicle range includes executive,
        premium saloons and luxury cars from the world’s most exclusive car
        manufacturers. These cars look and feel opulent, perform superbly and
        are available to you at a surprisingly affordable price. Why not escape
        your routine in a vehicle that’s truly out of the ordinary?
      </p>
      <div className="mt-6 w-full flex justify-around items-center">
        <div className="lg:w-[70.26px] lg:h-[70.26px] border-[#9C0E0F] border-[1px] rounded-full flex justify-center items-center  bg-[rgba(255, 255, 255, 1)] p-2 lg:p-0">
          <MdArrowBackIos className=" text-black text-[15px] lg:text-[30px] "  />
        </div>
        <Image
          src={"/images/car.png"}
          width={863}
          height={271}
          alt="car"
          className=" w-[863px] h-[271px] object-center object-cover"
        />
        <div className="lg:w-[70.26px] lg:h-[70.26px] border-[#9C0E0F] border-[1px] rounded-full flex justify-center items-center  bg-[rgba(255, 255, 255, 1)] p-2 lg:p-0">
          <MdArrowBackIos className=" text-black text-[15px] lg:text-[30px] "  />
        </div>
      </div>
      <div className="flex justify-around w-full lg:mt-10 items-center flex-col lg:flex-row">
        <h1 className="text-[#424242] text-[24px] lg:text-[40px] leading-[50.63px] font-semibold">Premium people carrier</h1>
        <div className=" bg-gradient-to-l from-[#360505] to-[#9C0E0F] rounded-[1128.82px] text-[17px] font-medium capitalize  ">
            <ul className="text-[#FFAAAB] flex w-auto px-14 items-center justify-around py-3 lg:py-6 gap-x-4">
                <li className="">4 person</li>
                <li>2 Briefcase</li>
                <li>2 luggage</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
