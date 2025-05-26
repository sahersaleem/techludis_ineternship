import Image from "next/image";
import React from "react";

const BabySeatServices = () => {
  return (
    <div className="h-[140vh] lg:h-[536px] bg-[url('/images/hero2.jpg')] bg-center relative ">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#000000]/80 to-[#9B0302]/20   ">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center flex-col lg:flex-row">
          <div className="flex flex-col gap-[120px] p-10 lg:p-0">
            <div>
              <h1 className="text-[32px] lg:text-[61.2px] leading-[134%] font-light ">
                Baby Seat  <span className="font-bold"> Services <br/>Available</span>
              </h1>
              <p className="font-normal text-[20.98px] leading-[161%]">
                Ensuring comfort and safety for every passenger, every time.
              </p>
            </div>
            <div className="border-[#FFFFFF99] border-[0.75px] backdrop-blur-[19.6px] py-[11.96px] px-[22.4px] rounded-[7.48px] flex justify-around items-center">
              {[
                {
                  headingText: "+20",
                  para: "Years of experience",
                },
                {
                  headingText: "70K",
                  para: "Happy Customers",
                },
                {
                  headingText: "+200",
                  para: "Professional Drivers",
                },
              ].map((item, index) => (
                <div key={index}>
                    <h1 className="font-bold text-[29.2px] leading-[134%] ">{item.headingText}</h1>
                    <p className="">{item.para}</p>
                </div>
              ))}
              .
            </div>
          </div>
          <Image
            src={"/images/kids.jpg"}
            width={300}
            height={536}
            alt="children"
            className="z-40 w-auto h-[536px]"
          />
        </div>
      </div>
    </div>
  );
};

export default BabySeatServices;
