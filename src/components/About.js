import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      className=" bg-gray-900 h-screen flex justify-center items-center"
      id="HeroPage"
    >
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <div data-aos="fade-right">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              Make Your Business One Step Higher With{" "}
              <span className="text-[#9dd4e8]">WebCraft</span>
            </h1>
          </div>
          <p
            data-aos="zoom-in"
            className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400"
          >
            We help people get their business to the next level!
          </p>
          <a
            href="#Packages"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg focus:ring-4  border-gray-700 hover:bg-gray-700 focus:ring-gray-800 mr-3"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div
          data-aos="zoom-in"
          className="hidden lg:mt-0 lg:col-span-5 lg:flex"
        >
          <img
            src="https://mambaui.com/assets/svg/Business_SVG.svg"
            alt="mockup"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
