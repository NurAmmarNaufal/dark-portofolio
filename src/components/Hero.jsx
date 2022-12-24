import hero from "../assets/hero.png";
import bg_line from "../assets/logo2.png";
import dots from "../assets/dots.png";

import { Icon } from "@iconify/react";

const Hero = () => {
  return (
    <>
      <div className="mt-[32px] md:flex pb-10">
        <div className="md:mt-[136px]">
          <p className="text-[32px] font-semibold">
            Nan is a <span className="text-[#0099DB]"> web designer </span> and{" "}
            <span className="text-[#0099DB]"> front-end developer </span>{" "}
          </p>
          <p className="text-[#ABB2BF] mt-[25px]">
            He crafts responsive websites where technologies meet creativity
          </p>
          <button className="h-[37px] w-[148px] border-[#0099DB] border mt-[15px] font-medium text-[16px] hover:bg-[#00567b]">
            Contact me !!
          </button>
        </div>
        <div>
          <div className="mt-8 flex items-center justify-center h-[200px] md:h-[364px] md:w-[433px] relative">
            <img
              src={hero}
              alt="hero"
              className="grayscale h-[200px] md:h-[364px] md:w-[433px] z-50"
            />
            <img
              src={bg_line}
              alt="bg_line"
              className="absolute w-[80px] top-20 left-14 md:w-[150px] opacity-80 md:left-10 md:top-32"
            />
            <img
              src={dots}
              alt="dots"
              className="absolute z-50 bottom-0 right-10 md:bottom-12"
            />
          </div>
          <div className="h-[58px] border-solid border-white border flex items-center">
            <div className="w-4 h-4 bg-[#0099DB] ml-2" />
            <p className="font-semibold ml-[10px]">
              <span className="font-medium text-[16px] text-[#ABB2BF]">
                Currently working on{" "}
              </span>
              Portfolio
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end mt-10 md:mt-24 justify-center md:mx-28 pb-10">
        <div className="w-full  border border-white relative">
          <Icon
            icon="material-symbols:format-quote-rounded"
            color="#abb2bf"
            rotate={2}
            className="absolute w-10 h-10 -top-6 bg-[#282C33] left-2"
          />
          <Icon
            icon="material-symbols:format-quote-rounded"
            color="#abb2bf"
            className="absolute w-10 h-10 -bottom-6 bg-[#282C33] right-2"
          />
          <p className="p-5 text-right text-[24px] font-medium">
            With great power comes great electricity bill
          </p>
        </div>
        <p className="p-3 border border-white w-40 text-[24px] font-medium">
          - Dr. Who
        </p>
      </div>
    </>
  );
};

export default Hero;
