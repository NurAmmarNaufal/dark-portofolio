import logo from "../assets/logo.png";

import { Icon } from "@iconify/react";
import { useState } from "react";
// import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  function toggleMenu() {
    setToggle(!toggle);
  }

  function lang (e) {
    console.log(e.target.value)
  }

  return (
    <div className="bg-slate-300">
      <div className="flex justify-between items-center pt-[19px] md:pt-[32px] mb-2 relative">
        <div className="fixed flex justify-between w-full top-0 pt-6 h-[50px] pr-[30px] md:pr-[340px] bg-[#282C33] z-[99]">
          <a className="flex items-center cursor-pointer" href="#home">
            <img src={logo} alt="logo" className="w-4 h-4" />
            <p className="text-base ml-2 font-medium tracking-widest">Nan</p>
          </a>
          <div>
            <div
              className={`text-[#ABB2BF] text-[16px] hidden md:flex md:gap-5`}
            >
              <a href="#projects">
                <span className="text-[#0099DB]">#</span>projects
              </a>
              <a href="#skills">
                <span className="text-[#0099DB]">#</span>skills
              </a>
              <a href="#about_me">
                <span className="text-[#0099DB]">#</span>about_me
              </a>
              <a href="#contacts">
                <span className="text-[#0099DB]">#</span>contacts
              </a>
              <select name="" id="" className="cursor-pointer bg-transparent" onChange={lang}>
                <option value="en">EN</option>
                <option value="id">ID</option>
              </select>
            </div>

            <div className="md:hidden">
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
            <div
              className={`absolute top-14 -right-0 border-4 border-[#5a6270] bg-[#282C33] w-[200px] h-auto ${
                toggle ? "inline" : "hidden"
              }`}
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
                <div className="flex items-center cursor-pointer py-1">
                  <a href="#EN">EN</a>
                  <Icon icon="material-symbols:keyboard-arrow-down-rounded" />
                </div>
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
                      window.open(
                        "https://www.instagram.com/nurammarnaufal19/"
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
