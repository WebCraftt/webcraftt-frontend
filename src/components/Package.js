import React, { useEffect, useState } from 'react';
import PackageItem from "./PackageItem";
import { PackageList } from "../constants/Data/PackageList";
import { getAllServices } from "../apis/api";

const Package = () => {
  const [packagelist, setPackageList] = useState([]);
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
        <h1 className="max-w-2xl mb-10 text-4xl text-center font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">

          Our <span className="text-[#9dd4e8]">Packages</span>
        </h1>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="grid w-full p-2 lg:grid-cols-4 sm:grid-cols-2 place-items-center"
      >
        {packagelist.map((item, index) => {
          return (
            <PackageItem
              key={index}
              title={item.name}
              price={item.price}
              details={item.details}
              time={item.time}
              id={item._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Package;
