import React from "react";
import weatherImg from "../assets/weather.png"
import chatBotImg from "../assets/chatBot.png"
import translatorImg from "../assets/translator.png"
import jerusalemImg from "../assets/jerusalem.webp"

const Projects = () => {

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
        <div className="snap-center flex-shrink-0  w-full md:w-[290px] h-full border border-slate-200 mx-auto">
          <img
            src={weatherImg}
            alt="img"
            className="h-[200px] w-full cursor-pointer"
            onClick={() => {window.open("https://weather-station-two.vercel.app/")}}
          />
          <div className="flex gap-3 border-y p-1 pl-3 flex-wrap">
            <p>React</p>
            <p>Tailwind</p>
            <p>Vite</p>
            <p>openWeatherMap</p>
          </div>
          <div className="p-4 text-[#ABB2BF]">
            <p className="font-medium text-[24px] text-white">Wether Station</p>
            <p className="my-[16px]">
              app for current weather all city around the world and forecast every 3 hours forward
            </p>
            <button className="hover:text-white h-[35px] w-[110px] border border-[#0099DB] hover:bg-[#00567b]" onClick={() => {window.open("https://weather-station-two.vercel.app/")}}>
              Visit {"~~>"}
            </button>
          </div>
        </div>
        <div className="snap-center flex-shrink-0 w-full md:w-[290px] h-full border border-slate-200 mx-auto">
          <img
            src={chatBotImg}
            alt="chatBotImg"
            className="h-[200px] w-full cursor-pointer"
            onClick={() => {window.open("https://chat-bot-open-ai.vercel.app/")}}
          />
          <div className="flex gap-3 border-y p-1 pl-3">
            <p>React</p>
            <p>Tailwind</p>
            <p>Vite</p>
            <p>openAI</p>
          </div>
          <div className="p-4 text-[#ABB2BF]">
            <p className="font-medium text-[24px] text-white">ChatBot chatGPT</p>
            <p className="my-[16px]">
              app for chat with bot by openAI
            </p>
            <button className="hover:text-white h-[35px] w-[110px] border border-[#0099DB] hover:bg-[#00567b]" onClick={() => {window.open("https://chat-bot-open-ai.vercel.app/")}}>
              Visit {"~~>"}
            </button>
          </div>
        </div>
        <div className="snap-center flex-shrink-0 w-full md:w-[290px] h-full border border-slate-200 mx-auto">
          <img
            src={translatorImg}
            alt="img"
            className="h-[200px] w-full cursor-pointer"
            onClick= {() => {window.open('https://google-translate-roan.vercel.app/')}}
          />
          <div className="flex gap-3 border-y p-1 pl-3 flex-wrap">
            <p>React</p>
            <p>Vite</p>
            <p>GoogleTranslateApi</p>
          </div>
          <div className="p-4 text-[#ABB2BF]">
            <p className="font-medium text-[24px] text-white">Translator</p>
            <p className="my-[16px]">
              app for translate languages
            </p>
            <button className="hover:text-white h-[35px] w-[110px] border border-[#0099DB] hover:bg-[#00567b]" onClick= {() => {window.open('https://google-translate-roan.vercel.app/')}}>
              Visit {"~~>"}
            </button>
          </div>
        </div>
        <div className="snap-center flex-shrink-0 w-full md:w-[290px] h-full border border-slate-200 mx-auto">
          <img
            src={jerusalemImg}
            alt="img"
            className="h-[200px] w-full cursor-pointer object-cover"
            onClick= {() => {window.open('https://jerusalem-ten.vercel.app/')}}
          />
          <div className="flex gap-3 border-y p-1 pl-3 flex-wrap">
            <p>React</p>
            <p>Vite</p>
            <p>TailwindCSS</p>
          </div>
          <div className="p-4 text-[#ABB2BF]">
            <p className="font-medium text-[24px] text-white">Jerusalem</p>
            <p className="my-[16px]">
              app for discribe about the 3 religions in Jerusalem
            </p>
            <button className="hover:text-white h-[35px] w-[110px] border border-[#0099DB] hover:bg-[#00567b]" onClick= {() => {window.open('https://jerusalem-ten.vercel.app/')}}>
              Visit {"~~>"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
