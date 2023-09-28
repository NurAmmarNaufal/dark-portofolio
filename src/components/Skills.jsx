import React, { useEffect, useState } from "react";
import Contentful from "../auth/Contentful";
import bg_line from "../assets/logo2.png";
import dots from "../assets/dots.png";
import pattern from "../assets/pattern.png";

const Skills = () => {
  const { getAuthor } = Contentful("skills");
  const [contents, setContents] = useState([]);

  useEffect(() => {
    getAuthor().then((response) => {
      setContents(response.items);
    });
  }, []);

  return (
    <div id="skills" className="pb-10 mt-10 scroll-mt-16">
      <div className="font-medium text-[32px] flex items-center">
        <h5>
          <span className="text-[#0099DB]">#</span>skills
        </h5>
        <hr className="ml-5 border-0 h-[1px] w-full md:w-[300px] bg-[#0099DB]" />
      </div>
      <div className="md:flex md:justify-between">
        <img src={pattern} alt="pattern" className="w-[349px] h-[248px] my-5" />
        <div className="flex gap-5 flex-wrap md:mt-20">
          <div>
            <div className="w-[150px] h-auto border border-white">
              <p className="font-semibold p-2 border-b">{contents[4]?.fields.title}</p>
              <div className="font-normal text-[#ABB2BF] p-2">
                {contents[4]?.fields.lists.map((list, i) => (
                  <p key={i}>{list}</p>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="w-[150px] h-auto border border-white">
              <p className="font-semibold p-2 border-b">{contents[3]?.fields.title}</p>
              <div className="font-normal text-[#ABB2BF] p-2">
                {contents[3]?.fields.lists.map((list, i) => (
                  <p key={i}>{list}</p>
                ))}
              </div>
            </div>
            <div className="w-[150px] h-auto border border-white mt-5">
              <p className="font-semibold p-2 border-b">{contents[0]?.fields.title}</p>
              <div className="font-normal text-[#ABB2BF] p-2 flex flex-wrap gap-3">
                {contents[0]?.fields.lists.map((list, i) => (
                  <p key={i}>{list}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-5 md:inline">
            <div className="w-[150px] h-auto border border-white">
              <p className="font-semibold p-2 border-b">{contents[2]?.fields.title}</p>
              <div className="font-normal text-[#ABB2BF] p-2 flex flex-wrap gap-3">
                {contents[2]?.fields.lists.map((list, i) => (
                  <p key={i}>{list}</p>
                ))}
              </div>
            </div>
            <div className="w-[150px] h-auto border border-white mt-5">
              <p className="font-semibold p-2 border-b">{contents[1]?.fields.title}</p>
              <div className="font-normal text-[#ABB2BF] p-2 flex flex-wrap gap-3">
                {contents[1]?.fields.lists.map((list, i) => (
                  <p key={i}>{list}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
