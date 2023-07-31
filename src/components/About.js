import Image from "next/image";
import React from "react";

const About = () => {
  const random =
    " For those who are interested in finding random paragraphs, that's exactly what this webpage provides. If both a random word and a random sentence aren't quite long enough for your needs, then a random paragraph might be the perfect solution. Once you arrive at this page, you'll see a random paragraph. If you need another one, all you need to do is click on the button. If you happen to need several random paragraphs all at once, you can use this other paragraph generator. Below you can find a number of ways that this generator can be used.";
  return (
    //Parent Container
    <div className="flex min-h-[90vh] justify-center items-center px-4">
      {/* Content Wrapper */}
      <div className="grid lg:grid-cols-2 min-h-[50vh] w-full place-items-center">
        {/* Text Grid */}
        <div className="flex flex-col md:px-6 min-h-[90%] rounded-xl w-full justify-center py-4">
          <text className="font-sans md:font-serif text-3xl mb-4 self-left ">
            Paragraph Title
          </text>
          <text className="font-sans md:font-serif lg:text-xl text-left">
            {random}
          </text>
          <button
            className="w-fit p-3 rounded-lg self-left mt-5 mb-5 bg-[#1c4966]/[20]"
            onClick={() => console.log("Button Works")}
          >
            Explore More
          </button>
        </div>
        {/* Image Grid */}
        <div className="flex md:h-[90%] md:w-[90%] rounded-md w-full items-center">
          {/* Image Wrapper */}
          <div className="flex h-full overflow-hidden justify-center items-center rounded-xl">
            <img
              src="https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283"
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
