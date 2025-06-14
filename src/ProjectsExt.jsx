import React, { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import { Icon } from "@iconify/react";
import { Footer } from "./components/Footer";
import { motion } from "framer-motion";

import Contentful from "./auth/Contentful";
import { useNavigate } from "react-router-dom";

function ProjectsExt() {
  const navigation = useNavigate();

  const [contents, setContents] = useState([]);
  const [smallProjects, setSmallProjects] = useState([]);
  const [sosmeds, setSosmeds] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    for (let i = 0; i < 3; i++) {
      if (i === 0) {
        const { getAuthor } = Contentful("detailProject");
        getAuthor().then((response) => {
          // console.log(response.items);
          setContents(response.items);
        });
      } else if (i === 1) {
        const { getAuthor } = Contentful("socialMedia");
        getAuthor().then((response) => {
          // console.log(response.items);
          setSosmeds(response.items);
        });
      } else {
        const { getAuthor } = Contentful("smallProject");
        getAuthor().then((response) => {
          // console.log(response.items);
          setSmallProjects(response.items);
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
    <div className="text-white font-Fira-code bg-[#282C33] h-full relative flex flex-col items-center mx-4">
      <div className="w-[32px] h-[311px] ml-[17px] hidden lg:flex flex-col items-center gap-2 fixed top-0 left-0 z-[100]">
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

      <div id="container" className="md:mx-[100px] w-full xl:max-w-[1280px]">
        {/* navbar */}
        <div className="fixed flex justify-between w-full xl:w-[1280px] top-0 pt-6 h-[50px] bg-[#282C33] z-[99] lg:px-10">
          <a
            className="flex items-center cursor-pointer"
            onClick={() => navigation("/")}
            title="back"
          >
            <img src={logo} alt="logo" className="w-4 h-4" />
            <p className="text-base ml-2 font-medium tracking-widest">Nan</p>
          </a>
          <div className="relative">
            <div
              className={`text-[#ABB2BF] text-[16px] hidden md:flex items-center md:gap-5`}
            >
              <a href="#big-projects" className="hover:text-white">
                <span className="text-[#0099DB]">#</span>big-projects
              </a>
              <a href="#small-projects" className="hover:text-white">
                <span className="text-[#0099DB]">#</span>small-projects
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
            >
              <div
                className={`text-[#ABB2BF] font-semibold text-[20px] flex flex-col p-3 ml-2`}
              >
                <a href="#small-projects" className="hover:text-white">
                  <span className="text-[#0099DB]">#</span>small-projects
                </a>
                <a href="#big-projects" className="hover:text-white">
                  <span className="text-[#0099DB]">#</span>big-projects
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
        <div className=" lg:px-10">
          <div className="pt-[70px]">
            <p className="font-medium text-[32px] flex items-center">
              <span className="text-[#0099DB]">/</span>projects
            </p>
            <p className="pt-2">List of my projects</p>
          </div>
          <div id="big-projects" className="mt-5 scroll-mt-12">
            <p className="font-medium text-[32px] flex items-center">
              <span className="text-[#0099DB]">#</span>big-projects
            </p>
            <div className="md:flex justify-between gap-20 text-[#ABB2BF]">
              <div className="flex-1">
                <div className="py-[50px] flex gap-3 flex-wrap justify-between">
                  {contents?.map((content, i) => (
                    <div
                      key={i}
                      className="snap-center flex-shrink-0  w-full md:w-[280px] h-full border border-slate-200 mx-auto"
                    >
                      <img
                        src={content?.fields?.gallery[0]?.fields.file.url}
                        alt="img"
                        className=" w-full object-contain"
                      />
                      <div className="flex gap-3 border-y p-1 pl-3 flex-wrap">
                        {content?.fields?.tech?.map((x, i) => (
                          <p key={i}>{x}</p>
                        ))}
                      </div>
                      <div className="p-4 text-[#ABB2BF]">
                        <p className="font-medium text-[24px] text-white">
                          {content?.fields?.title}
                        </p>
                        <p className="my-[16px]">
                          {content?.fields?.description.content[0].content[0].value
                            .split(" ")
                            .slice(0, 10)
                            .join(" ")}
                          ...
                        </p>
                        <button
                          className="hover:text-white h-[35px] w-[110px] border border-[#0099DB] hover:bg-[#00567b]"
                          onClick={() => {
                            navigation("/projects/complete-project", {
                              state: { data: contents[i] },
                            });
                          }}
                        >
                          Detail {"~~>"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div id="small-projects" className="scroll-mt-12">
            <p
              id="small-projects"
              className="font-medium text-[32px] flex items-center"
            >
              <span className="text-[#0099DB]">#</span>small-projects
            </p>
            <div className="py-[50px] flex gap-3 flex-wrap justify-between">
              {smallProjects?.map((content, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-full md:max-w-[280px] h-full border border-slate-200"
                >
                  <div className="flex gap-3 border-y p-1 pl-3 flex-wrap text-[#ABB2BF]">
                    {content.fields.technology.map((tech, i) => (
                      <p key={i}>{tech}</p>
                    ))}
                  </div>
                  <div className="p-4 text-[#ABB2BF]">
                    <p className="font-medium text-[24px] text-white">
                      {content.fields.title}
                    </p>
                    <p className="my-[16px]">{content.fields.description}</p>
                    <button
                      className="hover:text-white h-[35px] w-[110px] border border-[#0099DB] hover:bg-[#00567b]"
                      onClick={() => {
                        window.open(content.fields.url);
                      }}
                    >
                      Visit {"~~>"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectsExt;
