import React from "react";
import PackageItem from "./PackageItem";
import { PackageList } from "../constants/Data/PackageList";

const Package = () => {
  return (
    <div className="flex flex-col min-h-[90vh] px-4 justify-center items-center mb-36">
      <h1 className="max-w-2xl mb-10 text-4xl text-center font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        Our <span className="text-[#9dd4e8]">Packages</span>
      </h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 w-full place-items-center p-2">
        {PackageList.map((item) => {
          return (
            <PackageItem
              title={item.title}
              price={item.price}
              description={item.desc}
              time={item.time}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Package;
