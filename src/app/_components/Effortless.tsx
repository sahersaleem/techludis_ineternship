import React from "react";
import Image from "next/image";

const Effortless = () => {
  return (
    <div className=" max-w-7xl mx-auto h-screen mt-20 pb-10">
      <div className="w-[731px] h-[623px] flex relative  ">
        <Image
          src={"/images/effortless1.jpg"}
          width={493}
          height={527}
          alt="images"
          className="w-[493px] h-[527px] object-cover object-center custom-blur-shape "
        />
        <Image
          src={"/images/effortless2.jpg"}
          width={391}
          height={300}
          alt="images"
          className="w-[391px] h-[300px] absolute top-52 left-80 object-cover object-center custom-blur-shape"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Effortless;
