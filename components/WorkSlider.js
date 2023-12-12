// data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/pro1.png",
          live:"https://inspiring-bonbon-b9bff1.netlify.app/",
        },
        {
          title: "title",
          path: "/pro4.png",
          live:"https://summer-camp-7b372.web.app/",
        },
        {
          title: "title",
          path: "/pro3.png",
          live:"https://toy-house-open.web.app/",
        },
        {
          title: "title",
          path: "/pro2.png",
          live:"https://lighthearted-pudding-722f69.netlify.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/pro5.png",
          live:"https://applecorner-client-solutya.vercel.app/",
        },
        {
          title: "title",
          path: "/pro6.png",
          live:"https://chef-recipes-hunter.web.app/",
        },
        {
          title: "title",
          path: "/pro7.png",
          live:"https://duaruqyah-cloned.vercel.app/",
        },
        {
          title: "title",
          path: "/pro8.png",
          live:"https://taskinator-own.vercel.app/",
        },
      ],
    },
  ],
};
// import sweper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";

// next image
import Image from "next/image";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <Link href={image.live} className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={index}>
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt=""
                        className="xl:max-w-[380px] xl:h-[210px] lg:max-w-[470px] lg:h-[270px] md:max-w-[370px] md:h-[210px] sm:max-w-[297px] sm:h-[176px] max-w-[250px] h-[115px] rounded-md"
                      />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-200">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title port 1 */}
                          <div className="delay-100">LIVE</div>
                          {/* title port 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJECT
                          </div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
