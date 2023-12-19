import React, { useState } from "react";

// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiSqlite,
} from "react-icons/si";

// about data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Front End Development",
        icons: [
          <FaHtml5 key="html5" className="text-orange-600 bg-white" />,
          <FaCss3 key="css3" className="text-sky-500" />,
          <FaJs key="js" className="text-yellow-500" />,
          <FaReact key="react" className="text-blue-500" />,
          <SiNextdotjs key="next" className="text-black bg-white" />,
          <SiRedux key="redux" className="text-purple-500" />,
          <SiTailwindcss key="tailwind" className="text-sky-500" />,
          <SiBootstrap key="bootstrap" className="bg-white text-purple-600" />,
        ],
      },
      {
        title: "Back End Development",
        icons: [
          <FaNodeJs key="node" className="text-green-500" />,
          <SiExpress key="express" />,
          <SiFirebase key="firebase" className="text-yellow-400" />,
        ],
      },
      {
        title: "Database",
        icons: [
          <SiMongodb key="mongodb" className="text-green-600" />,
          <SiSqlite key="sqlite" className="text-blue-500" />,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Certified Programming Hero Web Development",
        stage: "2022 - 2023",
      },
      {
        title: "Certified Solutya Pvt. Ltd. Complete Internship",
        stage: "07/2023 - 12/2023",
      },
      {
        title: "Certified Computer Course",
        stage: "2017 - 2018",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Software Engineer - Solutya Pvt. Ltd.",
        stage: "07/2023 - 12/2023",
      },
      {
        title: "Web Development Course - Programming Hero",
        stage: "2022 - 2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - Programming Hero",
        stage: "2023",
      },
      {
        title: "CSE - Kishoreganj Polytechnic Institute",
        stage: "2019 - 2023",
      },
      {
        title: "Web Developer - Solutya Pvt. Ltd.",
        stage: "2023",
      },
    ],
  },
  // ... rest of your data
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left ">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute xl:-bottom-[150px] xl:-left-[320px] lg:-bottom-[120px] lg:-left-[170px] md:-bottom-[90px] md:-left-[120px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">sotries</span> birth
            magnificent desings.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Hi there, I'm a versatile full-stack developer proficient in HTML,
            CSS, Tailwind, Bootstrap, and JavaScript. My expertise spans the
            MERN stack, Next.js, Redux, SQLite, and more. With a knack for
            crafting intuitive user interfaces and robust server-side solutions,
            I specialize in building dynamic web applications. I thrive on
            leveraging my diverse skill set to create seamless digital
            experiences, embodying adaptability and innovation in every project.
            Let's work together to bring your ideas to life!
          </motion.p>
          {/* counter */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
              {/* Finished projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-red-600 after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icon */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div
                          key={itemIndex}
                          className={`text-2xl text-white ${icon.class}`}
                        >
                          <div className="relative inline-block group cursor-pointer">
                            {icon}
                            <span className="opacity-0 bg-black text-white text-xs rounded py-1 px-2 absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 translate-y-px transition-opacity duration-300 group-hover:opacity-100">
                              {icon.key}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
