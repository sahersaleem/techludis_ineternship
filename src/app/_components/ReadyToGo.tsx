import React from "react";
import Image from "next/image";

const ReadyToGo = () => {
  return (
    <div className="bg-[url('/images/bg.jpg')] w-full h-[140vh] lg:h-[607px] bg-cover bg-center bg-no-repeat relative">
      <div className="bg-gradient-to-l from-[#000000]/40 to-[#000000] absolute top-0 left-0 w-full  h-[140vh] lg:h-[607px] flex justify-between flex-col lg:flex-row">
        <div className="px-10 lg:px-20 py-10">
          <div>
            <h1 className="font-medium text-[28px] lg:text-[58px]">
              Ready to Go? <br />
              <span className="text-[32px] lg:text-[70px] font-semibold">Book Your</span>{" "}
              <span className="text-[32px] lg:text-[70px] font-bold">Ride Now</span>
            </h1>
          </div>
          <div className="border-[#FFFFFF99] border-[0.75px] backdrop-blur-[19.6px] py-[11.96px] px-[22.4px]  rounded-[7.48px] flex justify-around items-center w-1/2 mt-6">
            <p>UK: +44 2080504099</p>
          </div>
          <div className="border-[#FFFFFF99] border-[0.75px] backdrop-blur-[19.6px] py-[11.96px] px-[22.4px]  rounded-[7.48px] flex justify-around items-center w-[60%] mt-6">
            <p>62 Bath Rd, London UB3 5AH, United Kingdom</p>
          </div>
          <button className="py-6 px-12 bg-gradient-to-l from-[#360505] to-[#9C0E0F] rounded-[1128.82px] text-[23px] font-medium capitalize mt-8">
            Instant Quote
          </button>
        </div>

        <div className="bg-gradient-to-l from-[#360505] to-[#9C0E0F] w-[35%] h-[607px] relative hidden lg:inline-block">
          <Image
            src={"/images/car2.png"}
            width={800}
            height={607}
            alt="car"
            className="w-[800px] h-[607px] object-contain absolute"
          />
        </div>
      </div>
    </div>
  );
};

export default ReadyToGo;
