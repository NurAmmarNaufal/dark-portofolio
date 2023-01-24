import React, { useEffect, useState } from "react";
import Contentful from "../auth/Contentful";

const Projects = () => {
  const { getAuthor } = Contentful("projects");
  const [contents, setContents] = useState([]);

  useEffect(() => {
    getAuthor().then((response) => {
      // console.log(response.items);
      setContents(response.items);
    });
  }, []);

  return (
    <div id="projects" className="scroll-mt-16">
      <div className="flex items-center justify-between">
        <div className="font-medium text-[32px] flex items-center">
          <h5>
            <span className="text-[#0099DB]">#</span>projects
          </h5>
          <hr className="ml-5 border-0 h-[1px] w-[20px] md:w-[300px] bg-[#0099DB]" />
        </div>
        <div className="text-[16px] font-medium flex cursor-pointer md:hidden">
          <p>Slide {"~~>"}</p>
        </div>
      </div>

      {/* card */}
      <div className="py-[50px] flex gap-3 overflow-x-auto lg:overflow-x-auto snap-x snap-mandatory scrollbar scrollbar-thumb-slate-500 scrollbar-track-slate-300">
        {contents?.map((content, i) => (
          <div key={i} className="snap-center flex-shrink-0  w-full md:w-[290px] h-full border border-slate-200 mx-auto">
            <img
              src={content.fields.thumbnail.fields.file.url}
              alt="img"
              className="h-[200px] w-full cursor-pointer"
              onClick={() => {
                window.open(content.fields.url);
              }}
            />
            <div className="flex gap-3 border-y p-1 pl-3 flex-wrap">    
              <p>{content.fields.tech}</p>
            </div>
            <div className="p-4 text-[#ABB2BF]">
              <p className="font-medium text-[24px] text-white">
                {content.fields.title}
              </p>
              <p className="my-[16px]">
                {content.fields.description.content[0].content[0].value}
              </p>
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
  );
};

export default Projects;
