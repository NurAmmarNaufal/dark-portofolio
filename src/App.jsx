import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { Icon } from "@iconify/react";
import Skills from "./components/Skills";
import Aboutme from "./components/Aboutme";
import Contacts from "./components/Contacts";
import { Footer } from "./components/Footer";

function App() {

  return (
    <div className="text-white font-Fira-code bg-[#282C33] h-full relative">
      <div className="w-[32px] h-[311px] ml-[17px] hidden md:flex flex-col items-center gap-2 fixed">
        <hr className="border-0 w-[2px] h-[200px] bg-white mb-3 opacity-60" />
        <Icon
          icon="ri:github-fill"
          width="25"
          className="cursor-pointer hover:opacity-100 opacity-60"
          onClick={() => {window.open('https://github.com/NurAmmarNaufal')}}
        />
        <Icon
          icon="jam:linkedin-square"
          width="25"
          className="cursor-pointer hover:opacity-100 opacity-60"
          onClick={() => {window.open('https://www.linkedin.com/in/nur-ammar-naufal-363609117/')}}
        />
        <Icon
          icon="ant-design:instagram-outlined"
          width="27"
          className="cursor-pointer hover:opacity-100 opacity-60"
          onClick={() => {window.open('https://www.instagram.com/nurammarnaufal19/')}}
        />        
      </div>
      <div id="container" className="md:mx-[100px] lg:mx-[171px] mx-4">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Aboutme />
        <Contacts />
      </div>
      <Footer />
    </div>
  );
}

export default App;
