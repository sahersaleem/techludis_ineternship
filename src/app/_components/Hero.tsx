"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { HiPlus } from "react-icons/hi";

const navbar_links = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "about Us",
    href: "/about_us",
  },
  {
    name: "services",
    href: "/services",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "Help",
    href: "/help",
  },
];

export default function Hero() {
  const path = usePathname();
  return (
    <div className="w-screen  lg:rounded-tr-2xl overflow-x-hidden overflow-y-hidden bg-white custom-blur-shape min-h-screen h-auto">
      <div className="relative sm:m-[30px] h-auto min-h-screen ">
        <Image
          src={"/images/hero2.jpg"}
          alt="image"
          width={800}
          height={800}
          className="absolute w-[calc(100%-30px)]  h-[170vh] lg:h-[884px]   object-center "
        />
        <div className="absolute top-0 left-0 w-[calc(100%-30px)]  h-[884px] bg-[#00000099] z-10 " />
        <div className="relative z-20 ">
          <div className="flex justify-between items-start">
            <div className="bg-white w-[200px] h-[100px] p-3 rounded-br-[40px] hidden lg:block">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={142}
                height={76}
                className="hidden lg:block"
              />
            </div>

            <div className="flex w-full h-full justify-center lg:justify-end gap-x-6">
              <nav className="bg-white/10 sm:h-[100px] p-[10px] sm:p-[16px] lg:p-[20px] rounded-[60px] backdrop-blur-md text-white mt-10 flex justify-center items-center">
                <div className="flex gap-x-8 items-center justify-center">
                  {navbar_links.map((item, index) => (
                    <Link
                      href={item.href}
                      key={index}
                      className={`capitalize text-[12px] sm:text-[16px] lg:text-[20px] leading-normal ${
                        path === item.href
                          ? "p-[10px] sm:px-[26px] sm:py-[12px] bg-gradient-to-l from-[#9C0E0F] to-[#360505] rounded-[32px]"
                          : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </nav>
              <div className="w-[250px] h-screen bg-[#9F05078F]/50 rotate-[8deg] rounded-tr-xl z-50 mt-3  hidden lg:block"></div>
            </div>

            <div className="bg-white p-3 h-[100px] z-50 rounded-bl-[40px]">
              <button className="w-[200px] h-[72px] bg-gradient-to-l from-[#9C0E0F] to-[#360505] rounded-[32px] hidden lg:block">
                Log in
              </button>
            </div>
          </div>

          <div className="">
            <div className="z-50  text-white p-4 overflow-x-hidden  lg:absolute lg:top-[198px] max-w-7xl w-full flex justify-around items-center  mx-auto flex-col lg:flex-row  left-0 ">
              <div className="sm:w-[60%] mt-20 lg:-mt-28 h-full flex lg:block items-center justify-center flex-col">
                <h1 className="text-4xl sm:text-7xl font-bold text-center lg:text-left">
                  Your Gateway To{" "}
                  <span className="text-[#9F0507]">
                    {" "}
                    <br />
                    Stress-Free{" "}
                  </span>
                  Travel
                </h1>
                <p className="text-xs sm:text-lg font-normal  w-[70%] mt-4 sm:mt-0 text-center lg:text-justify ">
                  Reliable and efficient transportation solutions for modern
                  travelers.Get a ride
                  <br className="hidden sm:inline-block"/> to or from the airport in luxury, with a service
                  tailored to your needs.
                </p>
              </div>
              <div className=" mt-10 lg:mt-0 lg:w-[40%] ">
                <div className="w-[320px]  lg:w-[450px] lg:h-[517px] bg-[#FFFFFF] py-[47px] px-[50px] ">
                  <div className="flex w-full p-[16px] gap-x-3 justify-center items-center">
                    <Image
                      src={"/images/bookOnline.png"}
                      width={81}
                      height={89}
                      alt="book-online"
                      className="object-center w-[50px] h-[58px] lg:w-[81px] lg:h-[89px]"
                    />
                    <h1 className="leading-[46.85px] text-[32px] lg:text-[60px] text-black capitalize font-extrabold">
                      Book <span className="text-[#9C0E0F]">Online</span>
                    </h1>
                  </div>
                  <div className="flex lg:w-[357.25px] items-center justify-center gap-x-6">
                    <div className="mt-6 space-y-2 w-full">
                      <div className="border-b border-[#1D1D1D] flex justify-between items-center p-2 ">
                        <p className="text-[#1D1D1D] text-[16.93px]">
                          Pick up Address
                        </p>
                        <IoIosArrowDown
                          className="text-[#1D1D1D] font-bold"
                          size={20}
                        />
                      </div>
                      <div className="border-b border-[#1D1D1D] flex justify-between items-center p-2 ">
                        <p className="text-[#1D1D1D] text-[16.93px]">
                          Via(Optional)
                        </p>
                        <IoIosArrowDown
                          className="text-[#1D1D1D] font-bold"
                          size={20}
                        />
                      </div>
                      <div className="border-b border-[#1D1D1D] flex justify-between items-center p-2 ">
                        <p className="text-[#1D1D1D] text-[16.93px]">
                          Drop Off Address
                        </p>
                        <IoIosArrowDown
                          className="text-[#1D1D1D] font-bold"
                          size={20}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-6">
                      <div className="w-[16.73px] h-[16.73px] border-[1.13px] border-[#9C0E0F] rounded-full flex justify-center items-center">
                        <div className="bg-[#191D1F] w-[9.56px] h-[9.56px] rounded-full"></div>
                      </div>
                      <div className="bg-[#191D1F] h-[50px] w-[1px]"></div>
                      <div className="bg-gradient-to-l from-[#360505] to-[#9C0E0F] rounded-full ">
                        <HiPlus className="text-white rounded-lg" />
                      </div>
                      <div className="bg-[#191D1F] h-[50px] w-[1px]"></div>
                      <div className="w-[16.73px] h-[16.73px] border-[1.13px] border-[#9C0E0F] rounded-full flex justify-center items-center">
                        <div className="bg-[#191D1F] w-[9.56px] h-[9.56px] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 lg:space-x-6 flex lg:block flex-col items-center justify-center gap-y-3">
                    <button className=" w-[153px] h-[53px] bg-gradient-to-l from-[#360505] to-[#9C0E0F] rounded-[1128.82px] text-[17px] font-medium capitalize">
                      LOG IN
                    </button>
                    <button className="w-[153px] h-[53px] bg-gradient-to-l border-[#360505] border rounded-[1128.82px] text-[17px] font-medium capitalize text-[#360505]">
                      Quote now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
