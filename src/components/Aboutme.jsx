import React from "react";
import about from "../assets/about.png";
import dots from "../assets/dots.png";

const Aboutme = () => {
  return (
    <div id="about_me" className="mt-10 pb-10 scroll-mt-16">
      <div className="font-medium text-[32px] flex items-center">
        <h5>
          <span className="text-[#0099DB]">#</span>about_me
        </h5>
        <hr className="ml-5 border-0 h-[1px] w-full md:w-[300px] bg-[#0099DB]" />
      </div>

      <div className="md:flex justify-between gap-20">
        <div className="flex-1 text-[#ABB2BF]">
          <p className="mt-[50px]">Hello, i'm Nur Ammar Naufal short <span className="font-medium border-b-2 border-[#0099DB]">Nan</span></p>
          <p className="my-5">
            I’m a self-taught full-stack developer based in Doha, Qatar. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
          </p>
          <p>
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
          <button className="border border-[#0099DB] py-1 px-3 mt-5 hover:bg-[#00567b] text-white font-medium ">
            Read more {"->"}
          </button>
        </div>
        <div className="scale-75 md:scale-100">
          <div className="border-b border-[#0099DB] relative">
            <img src={about} alt="hero" className="grayscale" />
            <img src={dots} alt="dots" className="absolute bottom-9 right-0" />
            <img src={dots} alt="dots" className="absolute top-0 -z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
