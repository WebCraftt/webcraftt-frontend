import React from "react";
import {
  BiLogoReact,
  BiLogoNodejs,
  BiLogoAws,
  BiLogoMongodb,
  BiLogoRedux,
} from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Project = () => {
  const projects = [
    {
      title: "Tracking Application",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ante a turpis tristique.",
      imageUrlLight:
        "https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png",
      imageUrlDark:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png",
      techIcons: [
        <BiLogoReact />,
        <SiNextdotjs />,
        <BiLogoAws />,
        <BiLogoRedux />,
        <BiLogoMongodb />,
        <BiLogoNodejs />,
      ],
      liveWebsiteUrl: "https://example.com/project1",
    },
    {
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ante a turpis tristique.",
      imageUrlLight:
        "https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png",
      imageUrlDark:
        "https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png",
      techIcons: [
        <BiLogoReact />,
        <SiNextdotjs />,
        <BiLogoAws />,
        <BiLogoRedux />,
        <BiLogoMongodb />,
        <BiLogoNodejs />,
      ],
      liveWebsiteUrl: "https://example.com/project2",
    },
    {
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ante a turpis tristique.",
      imageUrlLight:
        "https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png",
      imageUrlDark:
        "https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png",
      techIcons: [
        <BiLogoReact />,
        <SiNextdotjs />,
        <BiLogoAws />,
        <BiLogoRedux />,
        <BiLogoMongodb />,
        <BiLogoNodejs />,
      ],
      liveWebsiteUrl: "https://example.com/project3",
    },
    // Add more projects here...
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
      autoPlay: true,
      autoPlaySpeed: 1000,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
      autoPlay: true,
      autoPlaySpeed: 1000,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      autoPlay: true,
      autoPlaySpeed: 1000,
    },
  };

  return (
    <div className="w-full mx-auto rounded-t-xl relative" id="Portfolio">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <h1
          className="max-w-2xl mb-4 text-4xl text-center m-auto font-extrabold 
      tracking-tight leading-none md:text-4xl xl:text-5xl text-white"
        >
          Our <span className="text-[#9dd4e8]">Portfolio</span>
        </h1>
      </div>
      <p className="text-center sm:w-96 m-auto">
        Lorem ipsum dolor quidem vitae porro quis nobis enim voluptates suscipit
        rerum nam?
      </p>
      <br />
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
      >
        {projects?.map((project, index) => (
          <div key={index} className="carousel-item mx-auto flex w-[60%]">
            <div className="rounded-lg overflow-hidden w-[450px] m-auto bg-gray-800">
              <img
                src={project.imageUrlDark}
                className="hidden dark:block h-[678px] w-[450px] rounded-lg object-cover"
                alt=""
              />
            </div>
            <div className="project-description w-[450px] m-auto  top-[59%] left-[-67.59%] bg-gray-800 p-5 hover:bg-blue-950">
              <h2 className="text-3xl font-bold">{project.title}</h2>
              <p className="text-gray-500">{project.description}</p>
              <br />
              <div className="tech-icons flex items-center">
                <p className="mr-5">Tech We Used:</p>

                {project.techIcons.map((icon, index) => (
                  <div key={index} className="icon text-3xl mr-4">
                    {icon}
                  </div>
                ))}
              </div>
              <br />
              <a
                href={project.liveWebsiteUrl}
                className="view-live-button flex flex-row items-center"
              >
                <p className="mr-5 text-xl text-purple-600 border-2 px-4 bg-white">
                  Live
                </p>
                <FaExternalLinkAlt className="button-icon text-3xl" />
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Project;
