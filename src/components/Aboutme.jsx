import React, { useEffect, useState } from "react";
import Contentful from "../auth/Contentful";

import dots from "../assets/dots.png";

const Aboutme = () => {
  const { getAuthor } = Contentful("aboutMe");
  const [contents, setContents] = useState([]);

  useEffect(() => {
    getAuthor().then((response) => {
      // console.log(response.items[0].fields);
      setContents(response.items[0].fields);
    });
  }, []);

  return (
    <div id="about_me" className="mt-10 pb-10 scroll-mt-16">
      <div className="font-medium text-[32px] flex items-center">
        <h5>
          <span className="text-[#0099DB]">#</span>about_me
        </h5>
        <hr className="ml-5 border-0 h-[1px] w-full md:w-[300px] bg-[#0099DB]" />
      </div>

      <div className="md:flex justify-between gap-20">
        <div className="flex-1 text-[#ABB2BF]">
          <p className="mt-[50px]">
            Hello, i'm Nur Ammar Naufal shortened to{" "}
            <span className="font-medium border-b-2 border-[#0099DB]">Nan</span>
          </p>
          <p className="my-5">
            {contents.paragraph1?.content[0].content[0].value}
          </p>
          <p>
          {contents.paragraph2?.content[0].content[0].value}
          </p>
          <button
            className="border border-[#0099DB] py-1 px-3 mt-5 hover:bg-[#00567b] text-white font-medium"
            onClick={() => {
              window.open(
                "/about-me", "_self",
              );
            }}
          >
            Know more {"->"}
          </button>
        </div>
        <div className="scale-75 md:scale-100">
          <div className="border-b border-[#0099DB] relative">
            <img
              src={contents.photo?.fields.file.url}
              alt="hero"
              className="grayscale"
            />
            <img src={dots} alt="dots" className="absolute bottom-9 right-0" />
            <img src={dots} alt="dots" className="absolute top-0 -z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
