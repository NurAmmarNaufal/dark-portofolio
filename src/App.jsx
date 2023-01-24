import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { Icon } from "@iconify/react";
import Skills from "./components/Skills";
import Aboutme from "./components/Aboutme";
import Contacts from "./components/Contacts";
import { Footer } from "./components/Footer";


import Contentful from "./auth/Contentful";

function App() {

  const { getAuthor } = Contentful("socialMedia");
  const [contents, setContents] = useState([]);

  useEffect(() => {
    getAuthor().then((response) => {
      // console.log(response.items);
      setContents(response.items);
    });
  }, []);

  return (
    <div className="text-white font-Fira-code bg-[#282C33] h-full relative">
      <div className="w-[32px] h-[311px] ml-[17px] hidden md:flex flex-col items-center gap-2 fixed">
        <hr className="border-0 w-[2px] h-[200px] bg-white mb-3 opacity-60" />
        {contents.map((content, i) => {
          if (content.fields.socialMediaTitle !== "email") {
            return (
              <div>
                <Icon
                  icon={content?.fields.urlIcon}
                  width="25"
                  className="cursor-pointer hover:opacity-100 opacity-60"
                  onClick={() => {
                    window.open(content?.fields.socialMediaUrl);
                  }}
                />
              </div>
            );
          }
        })}
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
