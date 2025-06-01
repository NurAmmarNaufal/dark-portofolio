import logo from "../assets/logo.png";

import { Icon } from "@iconify/react";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [xval, setXval] = useState(0);

  function toggleMenu() {
    setToggle(!toggle);
    toggle ? setXval(0) : setXval(-175);
  }

  function lang(e) {
    console.log(e.target.value);
  }

  return (
    <div className="fixed flex justify-between w-full xl:w-[1280px] top-0 pt-6 h-[50px] bg-[#282C33] z-[99] lg:px-10">
      <a className="flex items-center cursor-pointer" href="/">
        <img src={logo} alt="logo" className="w-4 h-4" />
        <p className="text-base ml-2 font-medium tracking-widest">Nan</p>
      </a>
      <div className="relative">
        <div className={`text-[#ABB2BF] text-[16px] hidden md:flex md:gap-5`}>
          <a href="#projects" className="hover:text-white">
            <span className="text-[#0099DB]">#</span>projects
          </a>
          <a href="#skills" className="hover:text-white">
            <span className="text-[#0099DB]">#</span>skills
          </a>
          <a href="#about_me" className="hover:text-white">
            <span className="text-[#0099DB]">#</span>about_me
          </a>
          <a href="#contacts" className="hover:text-white">
            <span className="text-[#0099DB]">#</span>contacts
          </a>
        </div>

        <div className="md:hidden absolute right-8 cursor-pointer">
          {!toggle ? (
            <Icon
              icon="ri:menu-3-fill"
              color="white"
              className="w-[24px] h-[24px]"
              onClick={toggleMenu}
            />
          ) : (
            <Icon
              icon="ic:round-close"
              color="white"
              className="w-[24px] h-[24px]"
              onClick={toggleMenu}
            />
          )}
        </div>

        <motion.div
          animate={{
            x: xval,
          }}
          transition={{
            duration: 1,
          }}
          className={`absolute top-14 -right-[175px] border-4 border-[#5a6270] bg-[#282C33] w-[200px] h-auto md:hidden block`}
          // ${
          //   toggle ? "inline" : "hidden"
          // }
        >
          <div
            className={`text-[#ABB2BF] font-semibold text-[20px] flex flex-col p-3 ml-2`}
          >
            <a href="#projects" className="py-1">
              <span className="text-[#0099DB]">#</span>projects
            </a>
            <a href="#skills" className="py-1">
              <span className="text-[#0099DB]">#</span>skills
            </a>
            <a href="#about_me" className="py-1">
              <span className="text-[#0099DB]">#</span>about_me
            </a>
            <a href="#contacts" className="py-1">
              <span className="text-[#0099DB]">#</span>contacts
            </a>
            <div className="flex mt-5 gap-3 items-center justify-center">
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
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
