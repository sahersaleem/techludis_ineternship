import Image from "next/image";
import React from "react";

const WhyChoose = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="section-heading text-center mb-6">
        Why <span className="text-[#9C0E0F]">Choose Us?</span>
      </h1>
      <p className="para text-center mb-12">
        Experience the perfect balance of affordability and excellence in every
        product and service we provide. Our commitment to quality ensures that
        you receive only the best, while our competitive pricing ensures you get
        more for your money.
      </p>
      <div className="flex  justify-center gap-6 flex-wrap lg:flex-nowrap">
        {[
          {
            title: "Safety First",
            description:
              "Both you and your shipments will travel with professional drivers. Always with the highest quality standards.",
              src:"/images/safet.png"
          },
          {
            title: "Easy Online Booking & Payment",
            description:
              "Our secure platform offers a simple online experience. Create an account to manage your regular trips and pay with major credit cards.",
              src:"/images/payment.png"
          },
          {
            title: "Professional Drivers",
            description:
              "Our knowledgeable and courteous chauffeurs ensure smooth journeys, always knowing the way and catering to your needs.",
              src:"/images/driver.png"
          },
          {
            title: "Punctuality & Reliability",
            description:
              "On location at least 10 minutes ahead of the scheduled pick up time. We are on time every time.",
              src:"/images/clock.png"
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[12.86px] py-10 px-4 w-[347px] h-[414px] shadow flex flex-col items-center"
          >
            <div className="bg-[#F6F6F6] w-[92px] h-[92px] rounded-full flex justify-center items-center mb-6">
              <Image src={item.src} width={40} height={40} alt="icon" />
            </div>
            <h1 className="text-[22px] text-[#181A1F] font-semibold text-center mb-4">
              {item.title}
            </h1>
            <p className="text-[#424242] font-light text-center text-[16px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
