import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import logo from "../assets/logo.png";

import Contentful from "../auth/Contentful";

export const Footer = () => {
  
  const [contents, setContents] = useState([]);
  const [paragraphFooter, setParagraphFooter] = useState();

  useEffect(() => {
    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        const { getAuthor } = Contentful("socialMedia");
        getAuthor().then((response) => {
          // console.log(response.items);
          setContents(response.items);
        });
      } else {
        const { getAuthor } = Contentful("aboutMe");
        getAuthor().then((response) => {
          // console.log(response.items[0].fields.paragraphFooter.content[0].content[0].value);
          setParagraphFooter(response.items[0].fields.paragraphFooter.content[0].content[0].value);
        });
      }
    }
  }, []);

  return (
    <div className="mt-10 pb-1">
      <hr className="border-0 h-[2px] w-full bg-[#ABB2BF]" />
      <div className="md:mx-[100px] lg:mx-[171px] mx-4 my-5">
        <div className="md:flex md:justify-between mt-10">
          <div className="flex flex-col ">
            <div className="flex items-center ">
              <img src={logo} alt="logo" className="w-5 h-5" />
              <p className="text-[24px] ml-2 font-medium tracking-widest">
                Nan
              </p>
            </div>
            <p className="my-5">
              {paragraphFooter}
            </p>
          </div>
          <div className="my-5">
            <p className="font-medium text-[20px] mb-2">Media</p>
            <div className="flex gap-3 items-center">
              {contents.map((content, i) => {
                if (content.fields.socialMediaTitle !== "email") {
                  return (
                    <div key={i}>
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
          </div>
        </div>
        <p className="text-[#ABB2BF] text-[10px] md:text-[13px] flex justify-center md:mt-10">
          By Nur Ammar Naufal. Made with ❤️, 2023.
        </p>
      </div>
    </div>
  );
};
