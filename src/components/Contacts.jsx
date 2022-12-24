import React from "react";
import { Icon } from "@iconify/react";

const Contacts = () => {
  return (
    <div className="mt-10 pb-10">
      <div className="font-medium text-[32px] flex items-center">
        <h5>
          <span className="text-[#0099DB]">#</span>contacts
        </h5>
        <hr className="ml-5 border-0 h-[1px] w-full md:w-[300px] bg-[#0099DB]" />
      </div>

      <div className="text-[#ABB2BF] flex flex-col md:flex-row mt-10 justify-between">
        <p className="w-80">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </p>
        <div className="w-[230px] h-auto border border-white p-3 mt-9">
          <p className="font-semibold text-[16px] text-white">Message me here</p>
          <div className="flex items-center text-xs flex-sh py-4">
            <Icon icon="mingcute:discord-line" width="20" />
            <p className="ml-1">Nur Ammar Naufal#1925</p>
          </div>
          <div className="flex items-center text-xs flex-sh">
            <Icon icon="clarity:email-solid" width="20" />
            <p className="ml-1">nurammarnaufal@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
