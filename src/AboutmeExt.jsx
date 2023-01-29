import React, { useEffect, useState } from "react";
import logo from "./assets/logo.png";
import dots from "./assets/dots.png";
import { Icon } from "@iconify/react";
import { Footer } from "./components/Footer";
import { motion } from "framer-motion";

import Contentful from "./auth/Contentful";

function AboutmeExt() {
  const [contents, setContents] = useState([]);
  const [sosmeds, setSosmeds] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        const { getAuthor } = Contentful("aboutMe");
        getAuthor().then((response) => {
          // console.log(response.items);
          setContents(response.items[0].fields);
        });
      } else {
        const { getAuthor } = Contentful("socialMedia");
        getAuthor().then((response) => {
          // console.log(response.items);
          setSosmeds(response.items);
        });
      }
    }
  }, []);

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
    <div className="text-white font-Fira-code bg-[#282C33] h-full relative">
      <div className="w-[32px] h-[311px] ml-[17px] hidden md:flex flex-col items-center gap-2 fixed">
        <hr className="border-0 w-[2px] h-[200px] bg-white mb-3 opacity-60" />
        {sosmeds.map((sosmed, i) => {
          if (sosmed.fields.socialMediaTitle !== "email") {
            return (
              <div key={i}>
                <Icon
                  icon={sosmed?.fields.urlIcon}
                  width="25"
                  className="cursor-pointer hover:opacity-100 opacity-60"
                  onClick={() => {
                    window.open(sosmed?.fields.socialMediaUrl);
                  }}
                />
              </div>
            );
          }
        })}
      </div>
      <div id="container" className="md:mx-[100px] lg:mx-[171px] mx-4">
        <div className="fixed flex justify-between w-full top-0 pt-6 h-[50px] pr-[30px] md:pr-[340px] bg-[#282C33] z-[99]">
          <a
            className="flex items-center cursor-pointer"
            onClick={() => window.close()}
            title="close"
          >
            <img src={logo} alt="logo" className="w-4 h-4" />
            <p className="text-base ml-2 font-medium tracking-widest">Nan</p>
          </a>
          <div>
            <div
              className={`text-[#ABB2BF] text-[16px] hidden md:flex items-center md:gap-5`}
            >
              <a href="#skills" className="hover:text-white">
                <span className="text-[#0099DB]">#</span>skills
              </a>
              <a href="#my-fun-facts" className="hover:text-white">
                <span className="text-[#0099DB]">#</span>my-fun-facts
              </a>
              <select
                name=""
                id=""
                className="cursor-pointer bg-transparent w-12"
                onChange={lang}
              >
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
            <motion.div
              animate={{
                x: xval,
              }}
              transition={{
                duration: 1,
              }}
              className={`absolute top-14 -right-[175px] border-4 border-[#5a6270] bg-[#282C33] w-[200px] h-auto `}
            >
              <div
                className={`text-[#ABB2BF] font-semibold text-[20px] flex flex-col p-3 ml-2`}
              >
                <a href="#skills" className="hover:text-white">
                  <span className="text-[#0099DB]">#</span>skills
                </a>
                <a href="#my-fun-facts" className="hover:text-white">
                  <span className="text-[#0099DB]">#</span>my-fun-facts
                </a>
                <select
                  name=""
                  id=""
                  className="cursor-pointer bg-transparent w-12 mt-2"
                  onChange={lang}
                >
                  <option value="en">EN</option>
                  <option value="id">ID</option>
                </select>
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
            </motion.div>
          </div>
        </div>
        {/* who am i */}
        <div className="pt-[70px]">
          <p className="font-medium text-[32px] flex items-center">
            <span className="text-[#0099DB]">/</span>about-me
          </p>
          <div className="md:flex justify-between gap-20 text-[#ABB2BF]">
            <div className="flex-1">
              <p className="pt-2">Who am I ?</p>
              <p className="mt-[50px]">
                Hello, i'm Nur Ammar Naufal shortened to{" "}
                <span className="font-medium border-b-2 border-[#0099DB]">
                  Nan
                </span>
              </p>
              <p className="my-5">
                {contents.paragraph1?.content[0].content[0].value}
              </p>
              <p>{contents.paragraph2?.content[0].content[0].value}</p>
            </div>
            <div className="scale-75 md:scale-100">
              <div className="border-b border-[#0099DB] relative">
                <img
                  src={contents.photo?.fields.file.url}
                  alt="hero"
                  className="grayscale"
                />
                <img
                  src={dots}
                  alt="dots"
                  className="absolute bottom-9 right-0"
                />
                <img src={dots} alt="dots" className="absolute top-0 -z-10" />
              </div>
            </div>
          </div>
        </div>
        {/* skills */}
        <div id="skills" className="pt-[70px]">
          <p className="font-medium text-[32px] flex items-center">
            <span className="text-[#0099DB]">#</span>skills
          </p>
          <div className="md:flex justify-between gap-20 text-[#ABB2BF]">
            <div className="flex-1">
              <p className="pt-2">put contents here</p>
            </div>
          </div>
        </div>
        {/* my fun facts */}
        <div id="my-fun-facts" className="pt-[70px]">
          <p className="font-medium text-[32px] flex items-center">
            <span className="text-[#0099DB]">#</span>my-fun-facts
          </p>
          <div className="md:flex justify-between gap-20 text-[#ABB2BF]">
            <div className="flex-1">
              <p className="pt-2">put contents here</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutmeExt;
