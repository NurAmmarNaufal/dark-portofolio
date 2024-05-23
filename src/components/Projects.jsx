import React, { useEffect, useState } from "react";
import Contentful from "../auth/Contentful";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigation = useNavigate();

  const { getAuthor } = Contentful("detailProject");
  const [contents, setContents] = useState([]);

  const [state, setState] = useState(-1);
  const [stateCek, setStateCek] = useState(-1);

  useEffect(() => {
    getAuthor().then((response) => {
      // console.log(response.items);
      setContents(response.items);
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setStateCek(state);
    }, 300);
  }, [state]);

  return (
    <div id="projects" className="scroll-mt-16 lg:px-10">
      <div className="flex items-center justify-between">
        <div className="font-medium text-[32px] flex items-center">
          <h5>
            <span className="text-[#0099DB]">#</span>projects
          </h5>
          <hr className="ml-5 border-0 h-[1px] w-[20px] md:w-[300px] bg-[#0099DB]" />
        </div>
        <p
          className="text-[16px] font-medium flex cursor-pointer"
          onClick={() => navigation("/projects")}
        >
          View All {"~~>"}
        </p>
      </div>
      {/* <div className="py-[50px] grid grid-cols-2 w-full gap-10">
        <div className="flex flex-col">
          {projects.map((project, i) => (
            <div
              key={i}
              className="hover:border-l  cursor-pointer border-white flex mb-2 px-1"
              onClick={() => setState(i)}
            >
              <p>{i + 1}.</p>
              <p>{project}</p>
            </div>
          ))}
        </div>
        {state >= 0 && (
          <div className={`relative overflow-hidden`}>
            <div
              className={`border-l border-white h-full absolute -translate-y-[100%] top-0 ${
                stateCek == state && "-translate-y-[0%] duration-1000"
              }`}
            />
            <div className="pl-2">
              <p>{detail[state]}</p>
              <button className="hover:text-white mt-5 h-[35px] w-[110px] border border-[#0099DB] hover:bg-[#00567b]">
                Visit {"~~>"}
              </button>
            </div>
          </div>
        )}
      </div> */}

      {/* card */}
      <div className="py-[50px] flex gap-3 overflow-x-auto lg:overflow-x-auto snap-x snap-mandatory scrollbar scrollbar-thumb-slate-500 scrollbar-track-slate-300">
        {contents?.map((content, i) => (
          <div
            key={i}
            className="snap-center flex-shrink-0  w-full md:w-[280px] h-full border border-slate-200 mx-auto"
          >
            <img
              src={content?.fields?.gallery[0]?.fields.file.url}
              alt="img"
              className="w-full object-contain"
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
                {content?.fields?.description.content[0].content[0].value.split(' ').slice(0, 10).join(' ')}...
              </p>
              <button
                className="hover:text-white h-[35px] w-[110px] border border-[#0099DB] hover:bg-[#00567b]"
                onClick={() => {
                  navigation('/projects/complete-project', {state: {data: contents[i]}})
                }}
              >
                Detail {"~~>"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
