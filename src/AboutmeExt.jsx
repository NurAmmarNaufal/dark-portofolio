import React, { useEffect, useState } from "react";
import logo from "./assets/logo.png";
import dots from "./assets/dots.png";
import { Icon } from "@iconify/react";
import { Footer } from "./components/Footer";
import { motion } from "framer-motion";

import Contentful from "./auth/Contentful";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";

function AboutmeExt() {
  const loc = useLocation();

  const [aboutMe, setAboutMe] = useState([]);
  const [sosmeds, setSosmeds] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      if (i === 0) {
        const { getAuthor } = Contentful("aboutMe");
        getAuthor().then((response) => {
          // console.log(response.items[0].fields);
          setAboutMe(response.items[0].fields);

          //go to hash
          setTimeout(() => {
            if (loc.hash) {
              const targetElement = document.querySelector(loc.hash);
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
              }
            }
          }, 1000);
        });
      } else if (i === 1) {
        const { getAuthor } = Contentful("socialMedia");
        getAuthor().then((response) => {
          // console.log(response.items);
          setSosmeds(response.items);
        });
      } else {
        const { getAuthor } = Contentful("skills");
        getAuthor().then((response) => {
          // console.log("skills ", response.items)
          setSkills(response.items);
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
    <div className="text-white font-Fira-code bg-[#282C33] h-full relative mx-4">
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
      <div id="container" className="md:mx-[100px] lg:mx-[171px]">
        <Navbar />
        {/* who am i */}
        <div className="pt-[70px]">
          <p className="font-medium text-[32px] flex items-center">
            <span className="text-[#0099DB]">/</span>about-me
          </p>
          <div className="md:flex justify-between gap-32 text-[#ABB2BF]">
            <div className="flex-1">
              <p className="pt-2">Who am I ?</p>
              <p className="mt-[50px]">
                Hello, i'm Nur Ammar Naufal shortened to{" "}
                <span className="font-medium border-b-2 border-[#0099DB]">
                  Nan
                </span>
              </p>
              <p className="mt-5">
                {aboutMe.paragraph1?.content[0].content[0].value}
              </p>
              <p className="mt-5">
                {aboutMe.paragraph1?.content[1].content[0].value}
              </p>
              <p className="mt-5">
                {aboutMe.paragraph2?.content[0].content[0].value}
              </p>
              <p className="mt-5">
                {aboutMe.paragraph2?.content[1].content[0].value}
              </p>
            </div>
            <div className="scale-75 md:scale-100">
              <div className="border-b border-[#0099DB] relative">
                <img
                  src={aboutMe.photo?.fields.file.url}
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
          <div className="md:flex gap-5 text-[#ABB2BF]">
            {skills.map((skill, i) => (
              <div key={i} className="mt-2 border border-white">
                <p className="border-b text-white font-semibold px-2 py-1">
                  {skill.fields.title}
                </p>
                <div className="flex flex-wrap">
                  {skill.fields.lists.map((field, i) => (
                    <p key={i} className="py-1 px-2">
                      {field}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* my fun facts */}
        <div id="my-fun-facts" className="pt-[70px]">
          <p className="font-medium text-[32px] flex items-center">
            <span className="text-[#0099DB]">#</span>my-fun-facts
          </p>
          <div className="md:flex md:flex-wrap gap-5 text-[#ABB2BF]">
            {aboutMe?.funFact?.map((fact, i) => (
              <p key={i} className="mt-2 py-1 px-2 border border-white">
                {fact}
              </p>
            ))}
          </div>
        </div>
        {/* my fun facts */}
        <div id="certificate" className="pt-[70px]">
          <p className="font-medium text-[32px] flex items-center">
            <span className="text-[#0099DB]">#</span>certificate
          </p>
          <div className="flex flex-col mt-5 items-start text-[#ABB2BF]">
            {aboutMe?.pdf?.map((pdf, i) => (
              <button
                key={i}
                onClick={() => window.open(pdf.fields.file.url, "_blank")}
              >
                Download PDF {pdf.fields.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutmeExt;
