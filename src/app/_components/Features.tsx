import React from "react";

import { LuCar } from "react-icons/lu";


const featureData = [
  {
    heading: "Luxury Limousine Selection",
    para: "Both you and your shipments will travel with professional drivers.",
    Icon: LuCar,
  },
  {
    heading: "Luxury Limousine Selection",
    para: "Both you and your shipments will travel with professional drivers.",
    Icon: LuCar,
  },
  {
    heading: "Luxury Limousine Selection",
    para: "Both you and your shipments will travel with professional drivers.",
    Icon: LuCar,
  },
  {
    heading: "Luxury Limousine Selection",
    para: "Both you and your shipments will travel with professional drivers.",
    Icon: LuCar,
  },
  {
    heading: "Luxury Limousine Selection",
    para: "Both you and your shipments will travel with professional drivers.",
    Icon: LuCar,
  },
];

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto w-full h-auto lg:h-screen p-10">
      <h1 className="section-heading mt-10 lg:w-[50%] text-center lg:text-left">
        Our <span className="text-[#9C0E0F]">Features</span>{" "}
      </h1>
      <p className="para lg:w-[50%] mb-20 text-center lg:text-left">
        Experience seamless transportation with our reliable taxi service. From
        airport transfers to city tours, we offer convenient and affordable
        travel solutions.
      </p>
      <div className="flex  flex-wrap gap-y-6 mt-9 flex-col lg:flex-row">
        {featureData.map((item, index) => (
          <div className="lg:w-[50%] flex text-black gap-x-3" key={index}>
            <div className="px-4 py-1 lg:py-3 rounded-full bg-white flex justify-center item-center w-[50px] h-[50px] lg:w-auto lg:h-auto">
              <item.Icon className="text-[#9C0E0F]" size={40} />
            </div>
            <div>
              <h1 className="text-[16px] lg:text-[24px] font-semibold leading-[40.16px]">
                {item.heading}
              </h1>
              <p
                className="
                text-[12px] lg:text-[16px] font-light text-[#424242]"
              >
                {item.para}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
