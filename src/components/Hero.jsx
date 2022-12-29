import hero from "../assets/hero.png";
import bg_line from "../assets/logo2.png";
import dots from "../assets/dots.png";

import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [data, setData] = useState();
  const [quote, setQuote] = useState(
    {
      author: "Nan",
      text: "if today impossible, tomorrow im_possible, the day after tomorrow im master !",
    },
  );

  useEffect(() => {
    async function a() {
      await fetch("https://type.fit/api/quotes")
        .then((response) => response.json())
        .then((dat) => {
          setData(dat);
        });
    }
    a();
  }, []);

  function random() {
    const num = parseInt(Math.random() * 1642);
    console.log(data[num]);
    setQuote(data[num]);
  }
  // 1643

  return (
    <div id="home" className="scroll-mt-16">
      <div className="mt-[62px] md:flex pb-10">
        <div className="md:mt-[136px]">
          <p className="text-[32px] font-semibold">
            Nan is a <span className="text-[#0099DB]"> web designer </span> and{" "}
            <span className="text-[#0099DB]"> full-stack developer </span>{" "}
          </p>
          <p className="text-[#ABB2BF] mt-[25px]">
            He crafts responsive websites where technologies meet creativity
          </p>
          <a href="#contacts">
            <button
              className="h-[37px] w-[148px] border-[#0099DB] border mt-[15px] font-medium text-[16px] hover:bg-[#00567b]"
              title="contact me via email or whatsapp"
            >
              Contact me !!
            </button>
          </a>
        </div>
        <div>
          <div className="mt-8 flex items-center justify-center h-[250px] md:h-[364px] md:w-[433px] relative">
            <img
              src={hero}
              alt="hero"
              className="grayscale h-[250px] md:h-[364px] md:w-[433px] z-50"
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
              SIAB
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end mt-10 md:mt-24 justify-center md:mx-28 pb-10">
        <div className="w-full  border border-white relative">
          <Icon icon="pepicons-pop:reload" className="float-right m-2 cursor-pointer hover:-rotate-180 duration-500" width="20" onClick={random}/>
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
          <p className="p-5 text-right text-[16px] md:text-[24px] font-normal">
            {quote?.text}
          </p>
        </div>
        <p className="p-3 border border-white text-[16px] md:text-[24px] font-normal pt-5 md:pt-3">
          - {quote?.author}
        </p>
      </div>
    </div>
  );
};

export default Hero;
