import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="font-medium text-[32px] flex items-center">
          <h5>
            <span className="text-[#0099DB]">#</span>projects
          </h5>
          <hr className="ml-5 border-0 h-[1px] w-[20px] md:w-[300px] bg-[#0099DB]" />
        </div>
        <div className="text-[16px] font-medium flex cursor-pointer">
          <p>Slide {"~~>"}</p>
        </div>
      </div>

      {/* card */}
      <div className="py-[50px] flex gap-3 overflow-x-auto md:overflow-x-hidden snap-x snap-mandatory">
        <div className="snap-center flex-shrink-0 w-full md:w-[290px] h-auto border border-slate-200 mx-auto">
          <img
            src="https://source.unsplash.com/1000x900/?clouds"
            alt="img"
            className="h-[200px] w-full"
          />
          <div className="flex gap-3 border-y p-1 pl-3">
            <p>HTML</p>
            <p>Js</p>
            <p>C++</p>
          </div>
          <div className="p-4 text-[#ABB2BF]">
            <p className="font-medium text-[24px] text-white">Wether Station</p>
            <p className="my-[16px]">
              app for current weather and forecast every 3 hours forward
            </p>
            <button className="hover:text-white h-[35px] w-[110px] border border-[#0099DB] hover:bg-[#00567b]">
              Visit {"~~>"}
            </button>
          </div>
        </div>
        <div className="snap-center flex-shrink-0 w-full md:w-[290px] h-auto border border-slate-200 mx-auto">
          <img
            src="https://source.unsplash.com/1000x900/?cat"
            alt="img"
            className="h-[200px] w-full"
          />
          <div className="flex gap-3 border-y p-1 pl-3">
            <p>HTML</p>
            <p>Js</p>
            <p>C++</p>
          </div>
          <div className="p-4 text-[#ABB2BF]">
            <p className="font-medium text-[24px] text-white">Wether Station</p>
            <p className="my-[16px]">
              app for current weather and for cast everu 3 hours forward
            </p>
            <button className="hover:text-white h-[35px] w-[110px] border border-[#0099DB] hover:bg-[#00567b]">
              Visit {"~~>"}
            </button>
          </div>
        </div>
        <div className="snap-center flex-shrink-0 w-full md:w-[290px] h-auto border border-slate-200 mx-auto">
          <img
            src="https://source.unsplash.com/1000x900/?savana"
            alt="img"
            className="h-[200px] w-full"
          />
          <div className="flex gap-3 border-y p-1 pl-3">
            <p>HTML</p>
            <p>Js</p>
            <p>C++</p>
          </div>
          <div className="p-4 text-[#ABB2BF]">
            <p className="font-medium text-[24px] text-white">Wether Station</p>
            <p className="my-[16px]">
              app for current weather and for cast everu 3 hours forward
            </p>
            <button className="hover:text-white h-[35px] w-[110px] border border-[#0099DB] hover:bg-[#00567b]">
              Visit {"~~>"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
