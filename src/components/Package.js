import React, { useEffect, useState } from 'react';
import PackageItem from "./PackageItem";
import { PackageList } from "../constants/Data/PackageList";
import { getAllServices } from "../apis/api";

const Package = () => {
  const [packagelist, setPackageList] = useState([]);
  console.log(packagelist);
  useEffect(() => {
    getAllServices()
      .then(data => {
        setPackageList(data);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
      });
  }, []);

  return (
    <div
      id="Packages"
      className="flex flex-col min-h-[100vh] px-4 justify-center items-center "
    >
      <div data-aos="fade-right">
        <h1 className="max-w-2xl mb-10 text-4xl text-center font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Our <span className="text-[#9dd4e8]">Packages</span>
        </h1>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="grid lg:grid-cols-4 sm:grid-cols-2 w-full place-items-center p-2"
      >
        {PackageList.map((item, index) => {
          return (
            <PackageItem
              key={index}
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
