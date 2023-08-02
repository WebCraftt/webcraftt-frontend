import React from "react";
import Image from "next/image";

const TeamCard = (props) => {
  return (
    <div
      key={props.key}
      className="group flex flex-col h-fit w-[65%] md:w-[70%] 
      border border-[#9dd4e8] rounded-[15px] 
      my-4 py-4
      m-auto
      items-center justify-start
      text-white lg:transition-[3s] 
     lg:hover:scale-[110%] lg:hover:shadow-md lg:hover:shadow-[#7744d9] lg:hover:border-[#7744d9]"
    >
      <div className="flex justify-start items-start overflow-hidden lg:h-[25vh] lg:w-[70%] h-[20vh] w-[60%] rounded-lg">
        <Image src={props.image} />
      </div>
      <div className="mt-4 text-lg">{props.name}</div>
      <div className="text-[#9dd4e8]">
        <b>{props.role}</b>
      </div>
      <div className="">{props.email}</div>
    </div>
  );
};

export default TeamCard;
