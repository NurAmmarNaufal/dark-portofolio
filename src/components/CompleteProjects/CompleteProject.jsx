import React, { useState, useEffect } from "react";
import logo from "./../../assets/logo.png";
import { Icon } from "@iconify/react";
import { Footer } from "../Footer";
import { motion } from "framer-motion";

import Contentful from "../../auth/Contentful";
import { useLocation, useNavigate } from "react-router-dom";

const CompleteProject = () => {
  const navigation = useNavigate();

  const detailProject = useLocation().state.data.fields;
  const [sosmeds, setSosmeds] = useState([]);

  const [imgPrev, setImgPrev] = useState(false);
  const [imgPrevUrl, setImgPrevUrl] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0 });

    const { getAuthor } = Contentful("socialMedia");
    getAuthor().then((response) => {
      // console.log(response.items);
      setSosmeds(response.items);
    });
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
        {/* <Navbar /> */}
        <div className="fixed flex justify-between w-full xl:w-[1280px] top-0 pt-6 h-[50px] bg-[#282C33] z-[99] lg:px-10">
          <a
            className="flex items-center cursor-pointer"
            onClick={() => navigation("/")}
            title="back"
          >
            <img src={logo} alt="logo" className="w-4 h-4" />
            <p className="text-base ml-2 font-medium tracking-widest">Nan</p>
          </a>
          <div>
            <div
              className={`text-[#ABB2BF] text-[16px] hidden md:flex items-center md:gap-5`}
            >
              <select
                name=""
                id=""
                disabled
                className="cursor-pointer bg-transparent w-12"
                onChange={lang}
              >
                <option value="en">EN</option>
                <option value="id">ID</option>
              </select>
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
                <a href="/" className="hover:text-white">
                  <span className="text-[#0099DB]">#</span>Home
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

        <div className=" lg:px-10">
          <div className="pt-[70px]">
            <p className="font-medium text-[32px] flex items-center">
              <span className="text-[#0099DB]">/</span>
              <span
                className="hover:cursor-pointer hover:text-[#0099DB]"
                title="back"
                onClick={() => window.history.back()}
              >
                projects
              </span>
              <span className="text-[#0099DB]">/</span>detail
            </p>
          </div>
          <article
            id="complete-apps"
            className="pt-10 flex flex-col items-center"
          >
            {/* title */}
            <p className="font-medium text-[32px] flex items-center">
              {detailProject.title}
            </p>
            {/* deskripsi */}
            <div className="text-justify text-[#ABB2BF] mt-5">
              {detailProject?.description?.content?.map((context, i) => (
                <div key={i}>
                  <p>{context.content[0].value}</p>
                  <br />
                </div>
              ))}
            </div>
            {/* link */}
            {detailProject?.link !== undefined && (
              <button
                className="h-[37px] w-[148px] border-[#0099DB] border mb-[20px] md:mb-[66px] font-medium text-[16px] hover:bg-[#00567b] self-start text-[#ABB2BF]"
                title="demo the project"
                onClick={() => window.open(detailProject?.link)}
              >
                Demo
              </button>
            )}
            <div className="flex gap-5 flex-wrap justify-around">
              {detailProject?.gallery?.map((img, i) => (
                <div
                  key={i}
                  className="w-[400px] object-contain cursor-pointer"
                  onClick={() => {
                    setImgPrevUrl(img.fields.file.url);
                    setImgPrev(true);
                  }}
                >
                  <img src={img.fields.file.url} />
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
      <Footer />

      {/* popup image */}
      {imgPrev && (
        <div className="bg-black/50 fixed inset-0 z-[100] flex justify-center items-center">
          <div className="h-[90%] w-[90%] relative">
            <div
              className="absolute -top-3 -right-3 bg-white h-8 w-8 border-2 rounded-full flex items-center justify-center cursor-pointer"
              title="close"
              onClick={() => setImgPrev(false)}
            >
              <p className="text-black text-[40px]">×</p>
            </div>
            <img src={imgPrevUrl} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CompleteProject;
