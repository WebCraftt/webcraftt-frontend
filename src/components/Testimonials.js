import React, { useCallback, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import DotShape from "./Dotshape";

const Testimonial = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.previous();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.next();
  }, []);

  const testimonials = [
    {
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      reviewImg:
        "https://cdn1.designhill.com/assets/dh/images/designhill_logo.svg?ver=2.12.52",
      reviewAlt: "lineicon",
      details:
        "One of the finest agency to work with. They have got really great team who possesses great technical skills. Would like to work with them again.",
      name: "Larry Diamond",
      position: "CEO",
      rating: 5,
    },
    {
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      reviewImg:
        "https://cdn.logojoy.com/wp-content/uploads/2018/05/01104652/799.png",
      reviewAlt: "lineicon",
      details: "Absolutely loved their work. Very talented people.",
      name: "Jackson Wills",
      position: "COO",
      rating: 5,
    },
    {
      image: "https://randomuser.me/api/portraits/men/73.jpg",
      reviewImg:
        "https://cdn1.designhill.com/assets/dh/images/designhill_logo.svg?ver=2.12.52",
      reviewAlt: "lineicon",
      details:
        "Work was delivered in time. Everything was executed in the planned manner. Loved the work. Great work guys!",
      name: "Scott Streit",
      position: "Independent Client",
      rating: 5,
    },
    {
      image: "https://randomuser.me/api/portraits/men/74.jpg",
      reviewImg:
        "https://cdn1.designhill.com/assets/dh/images/designhill_logo.svg?ver=2.12.52",
      reviewAlt: "lineicon",
      details:
        "They do everything they commit. Their team is very active and skilled. Would prefer them for future tasks.",
      name: "Paul Roomi",
      position: "CEO",
      rating: 5,
    },
    // Add more testimonials here...
  ];

  const carouselOptions = {
    responsive: {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
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
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 3000, // 1 second
  };

  return (
    <div className="pt-20 pb-20 lg:pt-[120px] lg:pb-[120px] bg-gray-900">
      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
        <h1 className="max-w-xl mb-5 mx-auto text-4xl text-center m-auto font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
          What Client Say About <span className="text-[#9dd4e8]">WebCraft</span>
        </h1>
      </div>
      <br />
      <div className="container mx-auto">
        <Carousel {...carouselOptions} ref={sliderRef}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative flex justify-center">
              <div className="relative w-full pb-16 md:w-11/12 lg:w-10/12 xl:w-8/12 xl:pb-0">
                <div className="w-full items-center md:flex">
                  <div className="relative mb-12 w-[90%] max-w-[310px] md:mr-12 md:mb-0 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] 2xl:mr-16">
                    <Image
                      className="rounded-lg"
                      src={testimonial.image}
                      alt="image"
                      // layout="responsive"
                      width={310}
                      height={400}
                    />

                    <span className="absolute -bottom-6 -right-6 z-[-1]">
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Add the path for your dot shape */}
                      </svg>
                    </span>
                  </div>
                  <div className="w-full">
                    <div>
                      <DotShape rating={testimonial.rating} />

                      <br />
                      <div className="mb-7">
                        <img
                          src={testimonial.reviewImg}
                          className="w-36"
                          alt={testimonial.reviewAlt}
                        />
                      </div>
                      <p className="text-body-color mb-11 text-base font-medium italic sm:text-lg">
                        {testimonial.details}
                      </p>
                      <h4 className="text-dark text-xl font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-body-color text-base">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
