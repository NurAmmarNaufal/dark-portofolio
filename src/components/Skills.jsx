import React from "react";
import bg_line from "../assets/logo2.png";
import dots from "../assets/dots.png";
import pattern from "../assets/pattern.png";

const Skills = () => {
  return (
    <div className="pb-10 mt-10">
      <div className="font-medium text-[32px] flex items-center">
        <h5>
          <span className="text-[#0099DB]">#</span>skills
        </h5>
        <hr className="ml-5 border-0 h-[1px] w-full md:w-[300px] bg-[#0099DB]" />
      </div>
      <div className="md:flex justify-between">
        <img src={pattern} alt="pattern" className="w-[349px] h-[248px] my-5" />
        <div className="flex gap-5 flex-wrap md:mt-20">
          <div>
            <div className="w-[150px] h-auto border border-white">
              <p className="font-semibold p-2 border-b">Languages</p>
              <div className="font-normal text-[#ABB2BF] p-2">
                <p>JavaScript</p>
                <p>C++</p>
                <p>Python</p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[150px] h-auto border border-white">
              <p className="font-semibold p-2 border-b">Databases</p>
              <div className="font-normal text-[#ABB2BF] p-2">
                <p>PostgresSQL</p>
                <p>Firebase</p>
              </div>
            </div>
            <div className="w-[150px] h-auto border border-white mt-5">
              <p className="font-semibold p-2 border-b">Other</p>
              <div className="font-normal text-[#ABB2BF] p-2 flex flex-wrap gap-3">
                <p>HTML</p>
                <p>CSS</p>
                <p>REST</p>
                <p>SCSS</p>
              </div>
            </div>
          </div>
          <div className="flex gap-5 md:inline">
            <div className="w-[150px] h-auto border border-white">
              <p className="font-semibold p-2 border-b">Tools</p>
              <div className="font-normal text-[#ABB2BF] p-2 flex flex-wrap gap-3">
                <p>VSCode</p>
                <p>GitHub</p>
                <p>Vercel</p>
                <p>Figma</p>
              </div>
            </div>
            <div className="w-[150px] h-auto border border-white mt-5">
              <p className="font-semibold p-2 border-b">Framework</p>
              <div className="font-normal text-[#ABB2BF] p-2 flex flex-wrap gap-3">
                <p>React-JS</p>
                <p>Next.js</p>
                <p>Express.js</p>
                <p>TailwindCSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
