import Image from 'next/image';
import React from 'react';
import { BiLogoReact, BiLogoNodejs, BiLogoAws, BiLogoMongodb, BiLogoRedux } from 'react-icons/bi';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Project = () => {
    const projects = [
        {
            title: 'Mobile Application',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ante a turpis tristique.',
            imageUrlLight: 'https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png',
            imageUrlDark: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png',
            techIcons: [<BiLogoReact />, <SiNextdotjs />, <BiLogoAws />, <BiLogoRedux />, <BiLogoMongodb />, <BiLogoNodejs />],
            liveWebsiteUrl: 'https://example.com/project1',
        },
        {
            title: 'Project 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ante a turpis tristique.',
            imageUrlLight: 'https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png',
            imageUrlDark: 'https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png',
            techIcons: [<BiLogoReact />, <SiNextdotjs />, <BiLogoAws />, <BiLogoRedux />, <BiLogoMongodb />, <BiLogoNodejs />],
            liveWebsiteUrl: 'https://example.com/project2',
        },
        {
            title: 'Project 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ante a turpis tristique.',
            imageUrlLight: 'https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png',
            imageUrlDark: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png',
            techIcons: [<BiLogoReact />, <SiNextdotjs />, <BiLogoAws />, <BiLogoRedux />, <BiLogoMongodb />, <BiLogoNodejs />],
            liveWebsiteUrl: 'https://example.com/project3',
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
        <div className="relative w-full mx-auto rounded-t-xl h-screen flex items-center ">
            <Carousel responsive={responsive}>
                {projects?.map((project, index) => (
                    <div key={index} className="carousel-item mx-auto w-full flex justify-center flex-wrap dark:bg-gray-800 items-center p-5">
                        <div className="rounded-lg overflow-hidden m-auto bg-white dark:bg-gray-800">
                            <Image src={project.imageUrlDark} className="hidden dark:block h-[700px] w-[400px] rounded-lg object-cover" alt="" />
                        </div>
                        <div className="project-description w-[450px] m-auto">
                            <h2 className='text-3xl font-bold'> {project.title}</h2>
                            <p className='text-gray-500'>{project.description}</p>
                            <br />
                            <div className="tech-icons flex text-2xl">
                                {project.techIcons.map((icon, index) => (
                                    <div key={index} className="icon">
                                        {icon}
                                    </div>
                                ))}
                            </div>
                            <a href={project.liveWebsiteUrl} className="view-live-button">
                                <FaExternalLinkAlt className="button-icon" />
                                View Live Website
                            </a>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Project;
