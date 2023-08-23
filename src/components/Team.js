import React from "react";
import TeamCard from "./TeamCard";
import { TeamMembersList } from "../constants/Data/TeamMembers";
import Carousel from "react-multi-carousel";

const Team = () => {
  const carouselOptions = {
    // Customize carousel options here
    responsive: {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
      },
    },
  };
  return (
    <div className="bg-gray-900 min-h-fit pt-[110px] mb-4 " id="Team">
      <div data-aos="zoom-in-up">
        <h1
          className="max-w-2xl mb-4 text-4xl text-center m-auto font-extrabold 
      tracking-tight leading-none md:text-4xl xl:text-5xl text-white"
        >
          Our <span className="text-[#9dd4e8]">Team</span>
        </h1>
      </div>

      <div data-aos="zoom-in" data-aos-duration="2000">
        <Carousel
          {...carouselOptions}
          className="max-w-screen-xl py-8 mx-auto text-center md:py-16"
        >
          {TeamMembersList.map((member, key) => {
            return (
              <TeamCard
                key={key}
                image={member.image}
                name={member.name}
                role={member.role}
                email={member.email}
              />
            );
          })}
        </Carousel>
      </div>
      <div
        className="mb-4 text-center m-auto w-fit px-5 py-3 border border-[#9dd4e8] rounded-lg
          lg:group-hover:text-white lg:hover:border-none lg:hover:bg-[#7744d9]"
      >
        <a href="#">See All Members</a>
      </div>
    </div>
  );
};

export default Team;
