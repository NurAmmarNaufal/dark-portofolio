import React, { useState, useRef, useEffect } from "react";
import Contentful from "../auth/Contentful";
import { Icon } from "@iconify/react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const form = useRef();
  const [menu, setMenu] = useState(true);
  const [status, setStatus] = useState("Send");

  const [contents, setContents] = useState([]);
  const [sosmed, setSosmed] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        const { getAuthor } = Contentful("contacts");
        getAuthor().then((response) => {
          setContents(response.items[0].fields);
        });
      } else {
        const { getAuthor } = Contentful("socialMedia");
        getAuthor().then((response) => {
          // console.log(response.items);
          setSosmed(response.items);
        });
      }
    }
  }, []);

  const push = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    console.log("sending email...");
    emailjs
      .sendForm(
        "service_5nnq4y4",
        "template_elwr35n",
        form.current,
        "aJPJQph_Tnec-cxMu"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("sended");
          setTimeout(() => {
            setMenu(!menu);
          }, 1000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contacts" className="mt-10 pb-10 scroll-mt-16 relative">
      <div className="font-medium text-[32px] flex items-center">
        <h5>
          <span className="text-[#0099DB]">#</span>contacts
        </h5>
        <hr className="ml-5 border-0 h-[1px] w-full md:w-[300px] bg-[#0099DB]" />
      </div>

      <div className="text-[#ABB2BF] flex flex-col md:flex-row mt-10 justify-between">
        <p className="w-80">{contents?.description}</p>
        <div className="w-[230px] h-auto border border-white p-3 mt-9">
          <p className="font-semibold text-[16px] text-white">
            Message me here
          </p>
          {sosmed.map((media, i) => {
            if (media?.fields.socialMediaTitle === "email") {
              return (
                <div
                key={i}
                  className="flex items-center text-xs flex-sh cursor-pointer hover:text-white mt-4"
                  title="send message via email"
                  onClick={() => {
                    setMenu(!menu);
                  }}
                >
                  <Icon icon={media.fields.urlIcon} width="20" />
                  <p className="ml-1">{media.fields.socialMediaUrl}</p>
                </div>
              );
            }
          })}
        </div>
      </div>

      {/* <div>
        <div className="fixed w-screen h-screen top-0 left-0 bg-black z-[100] opacity-75"></div> */}
      <div
        className={`w-3/4 h-auto  mx-auto border border-white bg-[#282C33] z-[101] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ${
          menu ? "hidden" : "fixed"
        } p-2 md:w-auto md:h-auto`}
      >
        <Icon
          icon="ic:round-close"
          color="white"
          className="w-[24px] h-[24px] cursor-pointer float-right"
          onClick={() => {
            setMenu(!menu);
          }}
        />
        <div>
          <form
            ref={form}
            onSubmit={push}
            className="flex flex-col gap-5 px-5 w-full text-sm pb-5"
          >
            <label htmlFor="name" className="flex flex-col">
              Name
              <input
                type="text"
                id="name"
                name="user_name"
                className="bg-[#31353d] pl-1"
                required
              />
            </label>
            <label htmlFor="email" className="flex flex-col">
              Email
              <input
                type="email"
                id="email"
                name="user_email"
                className="bg-[#31353d] pl-1"
                required
              />
            </label>
            <label htmlFor="message" className="flex flex-col">
              Your message
              <textarea
                name="message"
                id="message"
                rows="8"
                className="bg-[#31353d] p-1"
                required
              />
            </label>
            <button
              type="submit"
              className="w-full border border-[#0099DB] hover:bg-[#00567b] hover:border-[#31353d] py-1"
            >
              {status}
            </button>
          </form>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Contacts;
