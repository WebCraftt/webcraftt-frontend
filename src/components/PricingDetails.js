import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import { getSingleService } from "../apis/api";
import Loading from "./Loading";
import BuyDetails from "./BuyDetails";

const PricingDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [service, setService] = useState({});
  const images = service?.image;
  const [loading, setLoading] = useState(false);
  const [webdetails, setWebDetails] = useState(false);
  const BASE_URL = "https://webcraft-server.vercel.app/api/v1";



  useEffect(() => {
    setLoading(true); // Start loading when the effect starts
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/services/${id}`);
        const data = await response.json();
        console.log(data);
        setService(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching service:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
   
      <div>
        <Navbar />
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <div className="text-white bg-gray-800">
            <div className="relative pt-6">
              {webdetails && (
                <div className="absolute left-0 right-0 z-50 p-6 bg-slate-800">
                  <BuyDetails setWebDetails={setWebDetails} 
                    service={service}
                   />
                </div>
              )}

              {/* Image gallery */}
              <div className="max-w-2xl mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                <div className="hidden overflow-hidden rounded-lg aspect-h-4 aspect-w-3 lg:block">
                  {images && images[0] ? (
                    <img
                      src={images[0]}
                      alt="Two each of gray, white, and black shirts laying flat."
                      className="object-cover object-center w-full h-full"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                  <div className="overflow-hidden rounded-lg aspect-h-2 aspect-w-3">
                    {images && images[1] ? (
                      <img
                        src={images[1]}
                        alt="Two each of gray, white, and black shirts laying flat."
                        className="object-cover object-center w-full h-full"
                      />
                    ) : (
                      ""
                    )}{" "}
                  </div>
                  <div className="overflow-hidden rounded-lg aspect-h-2 aspect-w-3">
                    {images && images[2] ? (
                      <img
                        src={images[2]}
                        alt="Two each of gray, white, and black shirts laying flat."
                        className="object-cover object-center w-full h-full"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                  {images && images[3] ? (
                    <img
                      src={images[3]}
                      alt="Two each of gray, white, and black shirts laying flat."
                      className="object-cover object-center w-full h-full"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {/* Product info */}
              <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {service?.name}
                  </h1>
                </div>
                {/* Options */}
                <div className="mt-4 lg:row-span-3 lg:mt-0">
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-3xl tracking-tight text-white">
                    {service?.price}
                  </p>
                  {/* Reviews */}
                  <div className="mt-6">
                    <h3 className="sr-only">Reviews</h3>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {/* Active: "text-white", Default: "text-gray-200" */}
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-gray-200"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="sr-only">4 out of 5 stars</p>
                      <a
                        href="#"
                        className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        117 reviews
                      </a>
                    </div>
                  </div>
                  <button
                    className="flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => setWebDetails(true)}
                  >
                    Get The Service
                  </button>
                </div>

                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                  <div>
                    <h3 className="sr-only">Description</h3>
                    <div className="space-y-6">
                      <ul className="text-base text-white">
                        {service &&
                          service.details?.map((detail, index) => (
                            <li key={index}>{detail}</li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

  );
};

export default PricingDetails;
