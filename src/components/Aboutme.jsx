import React from "react";
import about from "../assets/about.png";

const Aboutme = () => {
  return (
    <div className="mt-10 pb-10">
      <div className="font-medium text-[32px] flex items-center">
        <h5>
          <span className="text-[#0099DB]">#</span>about_me
        </h5>
        <hr className="ml-5 border-0 h-[1px] w-full md:w-[300px] bg-[#0099DB]" />
      </div>

      <div className="md:flex justify-between gap-20">
        <div className="flex-1 text-[#ABB2BF]">
          <p className="mt-[50px]">Hello, i'm Nur Ammar Naufal short Nan</p>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            sapiente voluptatem tenetur quas, ratione voluptas quae laborum
            officiis repellat numquam itaque rem quidem consequuntur enim
            eligendi maiores praesentium, quis nobis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, unde
            nisi aspernatur quo delectus obcaecati cum eaque. Veritatis, aut
            non!
          </p>
          <button className="border border-[#0099DB] py-1 px-3 mt-5 hover:bg-[#00567b] text-white font-medium ">
            Read more {"->"}
          </button>
        </div>
        <div className="scale-75 md:scale-100">
          <div className="border-b border-[#0099DB]">
            <img src={about} alt="hero" className="grayscale" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
