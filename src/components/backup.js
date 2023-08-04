import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        '"WebCraft is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."',
      author: "Micheal Gough",
      position: "CEO at Google",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      quote:
        '"WebCraft is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."',
      author: "Micheal Gough",
      position: "CEO at Google",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      quote:
        '"WebCraft is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."',
      author: "Micheal Gough",
      position: "CEO at Google",
      image: "https://randomuser.me/api/portraits/men/95.jpg",
    },
    {
      quote:
        '"WebCraft is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."',
      author: "Micheal Gough",
      position: "CEO at Google",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    // Add more testimonials here...
  ];

  const carouselOptions = {
    // Customize carousel options here
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
    Infinity: true,
    autoPlay: true,
    autoPlaySpeed: 1000, // 1 second
  };

  return (
    <div className="bg-white dark:bg-gray-900 h-[90vh] flex items-center justify-center w-full">
      <div className="pt-36">
        <h1 className="max-w-xl mx-auto text-4xl text-center m-auto font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          What Client Say About <span className="text-[#9dd4e8]">WebCraft</span>
        </h1>
        <div className="max-w-xl m-auto px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <Carousel
            {...carouselOptions}
            className="max-w-screen-xl py-8 mx-auto text-center md:py-16"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full mx-auto px-2 md:px-0">
                <svg
                  className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-xl font-medium text-gray-900 dark:text-white">
                    {testimonial.quote}
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <div className="relative w-12 h-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt="profile picture"
                      // layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                      {testimonial.position}
                    </div>
                  </div>
                </figcaption>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
