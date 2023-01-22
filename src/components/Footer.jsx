import React from "react";
import { Icon } from "@iconify/react";
import logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <div className="mt-10 pb-1">
      <hr className="border-0 h-[2px] w-full bg-[#ABB2BF]" />
      <div className="md:mx-[100px] lg:mx-[171px] mx-4 my-5">
        <div className="md:flex md:justify-between mt-10">
          <div className="flex flex-col ">
            <div className="flex items-center ">
              <img src={logo} alt="logo" className="w-5 h-5" />
              <p className="text-[24px] ml-2 font-medium tracking-widest">
                Nan
              </p>
              <p className="text-[13px] text-[#ABB2BF] ml-5">
                nurammarnaufal@gmail.com
              </p>
            </div>
            <p className="my-5">
              Web designer and full-stack developer based in Qatar
            </p>
          </div>
          <div className="my-5">
            <p className="font-medium text-[20px] mb-2">Media</p>
            <div className="flex gap-3 items-center">
              <Icon
                icon="ri:github-fill"
                width="25"
                className="cursor-pointer hover:opacity-100 opacity-60"
                onClick={() => {
                  window.open("https://github.com/NurAmmarNaufal");
                }}
              />
              <Icon
                icon="jam:linkedin-square"
                width="25"
                className="cursor-pointer hover:opacity-100 opacity-60"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/nur-ammar-naufal-363609117/"
                  );
                }}
              />
              <Icon
                icon="ant-design:instagram-outlined"
                width="27"
                className="cursor-pointer hover:opacity-100 opacity-60"
                onClick={() => {
                  window.open("https://www.instagram.com/nurammarnaufal19/");
                }}
              />
            </div>
          </div>
        </div>
        <p className="text-[#ABB2BF] text-[10px] md:text-[13px] flex justify-center md:mt-10">
          © Copyright 2023. Made by Nur Ammar Naufal
        </p>
      </div>
    </div>
  );
};
