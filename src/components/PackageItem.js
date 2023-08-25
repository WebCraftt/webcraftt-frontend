import Link from "next/link";
import React from "react";

const PackageItem = (props) => {
  const description = props.details;
  console.log(props);
  return (
    <div
      className="group flex flex-col bg-[#FFFFFF] py-3 px-2 rounded-[15px] 
    h-[520px] lg:min-w-[90%] lg:max-w-[80%] md:min-w-[90%] md:max-w-[90%] w-[95%]
     sm:mt-5 sm:mx-5 lg:mt-0 my-2 items-center lg:transition-[3s] 
     lg:hover:scale-[110%] text-[#1e2338] lg:hover:bg-[#1e2338] lg:hover:text-white"
    >
      <div className="min-w-[70%] rounded-lg flex justify-center py-3 px-4 self-start text-lg">
        <b> {props.title} </b>
      </div>
      <div className="min-w-[50%] rounded-lg flex justify-center py-2 px-4 mb-4 lg:group-hover:text-[#7744d9] text-5xl">
        <b> {props.price} </b>
        <span className="text-sm self-end">/month</span>
      </div>
      <div className="rounded-lg py-2 px-4 mb-2  w-full flex-1 overflow-auto">
        {description.map((item, key) => {
          return (
            <li key={key} className="flex items-start">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400 mr-3 mt-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              {item}
            </li>
          );
        })}
        <br />
        <b>
          Delivery Time: <span>{props.time}</span>
        </b>
      </div>
      <Link
        href={`/services/${props.id}`}
        className="inline-flex items-center justify-center px-5 py-3
         text-base font-medium text-center text-gray-900 border border-gray-900 rounded-lg
          lg:group-hover:text-white lg:group-hover:border-gray-600 lg:hover:bg-[#7744d9]"
      >
        Purchase Now
      </Link>
    </div>
  );
};

export default PackageItem;
