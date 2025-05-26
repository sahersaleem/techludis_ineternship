import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#181A1F] lg:h-[550px] w-full relative flex justify-center items-center text-white ">
      <div className="absolute top-0 left-0 h-[550px]">  
        <div className=" justify-between  h-[550px]  w-full item-center hidden lg:flex">
          <Image 
            src={"/images/rightVector.png"}
            width={623}
            height={619}
            alt="imaeg"
            className="object-cover object-center mr-40"
          />
          <Image
            src={"/images/leftVector.png"}
            width={623}
            height={619}
            alt="imaeg"
            className="object-cover object-center ml-40"
          />
        </div>
        <div className="bg-gradient-to-l from-[#9C0E0F] to-[#360505] lg:py-[53px] lg:px-[80px] rounded-[36.2px] absolute -top-40 left-40  justify-around items-center hidden lg:flex">
          <div className="lg:w-1/2">
            <h1 className="font-semibold text-[40px] ">our newsletters</h1>
            <p>
              Subscribe to stay updated on the latest 3D design trends,
              exclusive content, and special offers!
            </p>
          </div>
          <div className="bg-white lg:py-[12px] lg:px-[32px] rounded-[60px]">
            <input
              placeholder="Your email"
              className="visited:outline-none text-[16px]  font-normal"
            />
            <button className="lg:px-[45px] bg-[#181A1F] rounded-lg lg:py-[9px] capitalize">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-7xl mx-auto ">
        <div className="flex lg:justify-between lg:items-center flex-col lg:flex-row p-10 lg:p-0">
          <div className="lg:w-[30%] ">
            <Image
              src={"/images/whitelogo.png"}
              width={162}
              height={96}
              alt="logo"
            />
            <p className="para mt-5">
              Reliable, luxurious, and always on time—our airport transfer
              service is designed to make your travel experience effortless.
            </p>
          </div>
          <div>
            <h1 className="text-[24px] font-semibold mb-4">About Us</h1>

            <ul>
              <li className="link">Our History</li>
              <li>Our History</li>
              <li>Our History</li>
              <li>Our History</li>
              <li>Our History</li>
              <li>Our History</li>
            </ul>
          </div>
          <div>
            <h1 className="text-[24px] font-semibold mb-4">About Us</h1>

            <ul>
              <li className="link">Our History</li>
              <li>Our History</li>
              <li>Our History</li>
              <li>Our History</li>
              <li>Our History</li>
              <li>Our History</li>
            </ul>
          </div>
          <div>
            <h1 className="text-[24px] font-semibold mb-4">About Us</h1>

            <ul>
              <li className="link">Our History</li>
              <li>Our History</li>
              <li>Our History</li>
              <li>Our History</li>
              <li>Our History</li>
              <li>Our History</li>
            </ul>
          </div>{" "}
        </div>
        <hr className="border-[#9F9F9F] border-t-[1px] mt-10 " />
        <p className="text-[18px] mt-4 text-center">
          © 2024 Airport Driven. all right products
        </p>
      </div>
    </div>
  );
};

export default Footer;
