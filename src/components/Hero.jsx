import Contentful from "../auth/Contentful";
import bg_line from "../assets/logo2.png";
import dots from "../assets/dots.png";

import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const Hero = () => {
  const { getAuthor } = Contentful("author");

  const [content, setContent] = useState();
  const [loadingQuotes, setLoadingQuotes] = useState();

  const famousQuotes = [
    {
      author: "Nan",
      content:
        "if today impossible, tomorrow i'm_possible, the day after tomorrow i'm master !",
    },
    {
      author: "Steve Jobs",
      content: "The only way to do great work is to love what you do.",
    },
    {
      author: "Winston Churchill",
      content:
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    },
    {
      author: "Sam Levenson",
      content: "Don’t watch the clock; do what it does. Keep going.",
    },
    {
      author: "Theodore Roosevelt",
      content: "Believe you can and you're halfway there.",
    },
    {
      author: "William James",
      content: "Act as if what you do makes a difference. It does.",
    },
    {
      author: "Norman Vaughan",
      content: "Dream big and dare to fail.",
    },
    {
      author: "Wayne Gretzky",
      content: "You miss 100% of the shots you don’t take.",
    },
    {
      author: "Nelson Mandela",
      content: "It always seems impossible until it’s done.",
    },
    {
      author: "C.S. Lewis",
      content:
        "Hardships often prepare ordinary people for an extraordinary destiny.",
    },
    {
      author: "Eleanor Roosevelt",
      content:
        "The future belongs to those who believe in the beauty of their dreams.",
    },
    {
      author: "Thomas Edison",
      content:
        "I have not failed. I've just found 10,000 ways that won't work.",
    },
    {
      author: "Abraham Lincoln",
      content: "The best way to predict the future is to create it.",
    },
    {
      author: "Theodore Roosevelt",
      content: "Do what you can, with what you have, where you are.",
    },
    {
      author: "Eleanor Roosevelt",
      content:
        "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    },
    {
      author: "Mahatma Gandhi",
      content: "You must be the change you wish to see in the world.",
    },
    {
      author: "Albert Einstein",
      content: "In the middle of every difficulty lies opportunity.",
    },
    {
      author: "Dalai Lama",
      content:
        "Happiness is not something ready made. It comes from your own actions.",
    },
    {
      author: "Albert Einstein",
      content: "Strive not to be a success, but rather to be of value.",
    },
    {
      author: "George Addair",
      content: "Everything you’ve ever wanted is on the other side of fear.",
    },
    {
      author: "Les Brown",
      content:
        "Shoot for the moon. Even if you miss, you'll land among the stars.",
    },
  ];

  const [quote, setQuote] = useState(famousQuotes[0]);

  const random = async () => {
    setLoadingQuotes(true);

    const randomQuote =
      famousQuotes[Math.floor(Math.random() * famousQuotes.length)];
    setQuote(randomQuote);
    setLoadingQuotes(false);
  };

  useEffect(() => {
    getAuthor().then((response) => {
      setContent(response.items[0].fields);
    });
  }, []);

  return (
    <div id="home" className="scroll-mt-16 lg:px-10">
      <div className="mt-[62px] md:flex pb-10">
        <div className="md:mt-[100px]">
          <div className="flex items-center">
            <p className="text-[44px] font-semibold">Hi</p>
            <p className="text-[44px] animate-wave py-2">👋</p>
            <p className="text-[44px] font-semibold">,</p>
          </div>
          <p className="text-[44px] font-semibold">
            I'm Ammar a <span className="text-[#0099DB]">full-stack </span>{" "}
            developer
            {/* and{" "}
            <span className="text-[#0099DB]"> full-stack developer </span>{" "} */}
          </p>
          <p className="text-[#ABB2BF] mt-[25px] md:w-[50%]">
            {content?.description.content[0].content[0].value}
          </p>
          <a href="#contacts">
            <button
              className="h-[37px] w-[148px] border-[#0099DB] border mt-[20px] md:mt-[66px] font-medium text-[16px] hover:bg-[#00567b]"
              title="contact me via email"
            >
              Contact me !!
            </button>
          </a>
        </div>
        <div>
          <div className="mt-8 flex items-center justify-center h-[250px] md:h-[364px] md:w-[433px] relative">
            <img
              src={content?.photo.fields.file.url}
              alt="hero"
              className="grayscale h-[250px] md:h-[364px] md:w-[433px] z-50"
            />
            <img
              src={bg_line}
              alt="bg_line"
              className="absolute w-[80px] top-20 left-14 md:w-[150px] opacity-80 md:left-10 md:top-32"
            />
            <img
              src={dots}
              alt="dots"
              className="absolute z-50 bottom-0 right-10 md:bottom-12"
            />
          </div>
          <div className="h-[58px] border-solid border-white border flex items-center">
            <div className="w-4 h-4 bg-[#0099DB] ml-2" />
            <p className="font-medium text-[16px] text-[#ABB2BF] pl-2">
              {content?.currentlyWorking}{" "}
              <span
                className="font-semibold text-white cursor-pointer hover:border-[#0099DB] hover:border-b-2 uppercase"
                onClick={() => {
                  window.open(`${content?.institutionLink}`);
                }}
              >
                {content?.institution}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end mt-10 md:mt-24 justify-center md:mx-28 pb-10">
        <div className="w-full  border border-white relative">
          <div title="click to make a change">
            <Icon
              icon="pepicons-pop:reload"
              className={`float-right m-2 cursor-pointer hover:-rotate-180 duration-500 ${
                loadingQuotes ? "animate-spin" : null
              }`}
              width="20"
              onClick={random}
            />
          </div>
          <Icon
            icon="material-symbols:format-quote-rounded"
            color="#abb2bf"
            rotate={2}
            className="absolute w-10 h-10 -top-6 bg-[#282C33] left-2"
          />
          <Icon
            icon="material-symbols:format-quote-rounded"
            color="#abb2bf"
            className="absolute w-10 h-10 -bottom-6 bg-[#282C33] right-2"
          />
          <p className="p-5 text-right text-[16px] md:text-[24px] font-normal">
            {quote?.content}
          </p>
        </div>
        <p className="p-3 border-x border-b border-white text-[16px] md:text-[24px] font-normal pt-5 md:pt-3">
          - {quote?.author}
        </p>
      </div>
    </div>
  );
};

export default Hero;
