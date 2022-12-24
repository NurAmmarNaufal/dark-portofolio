import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { Icon } from "@iconify/react";
import Skills from "./components/Skills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-white font-Fira-code bg-[#282C33] h-full relative">
      <div className="absolute w-[32px] h-[311px] ml-[17px] hidden md:flex flex-col items-center gap-2">
        <hr className="border-0 w-[2px] h-[200px] bg-white mb-3 opacity-60" />
        <Icon icon="mingcute:discord-line" width="27" className="cursor-pointer hover:opacity-100 opacity-60"/>
        <Icon icon="ant-design:instagram-outlined" width="27" className="cursor-pointer hover:opacity-100 opacity-60"/>
        <Icon icon="jam:linkedin-square" width="25" className="cursor-pointer hover:opacity-100 opacity-60"/>
      </div>
      <div id="container" className="md:mx-[100px] lg:mx-[171px] mx-4">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}

export default App;
