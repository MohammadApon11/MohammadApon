"use client"
// links
import Link from "next/link";
import { useState } from "react";

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiGithubLine,
  RiLinkedinLine,
  RiFolderDownloadLine,
} from "react-icons/ri";

const Socials = () => {

  const [downloadLink, setDownloadLink] = useState('/Full%20Stack%20Developer%20Resume%20Of%20Mohammad%20Apon.pdf');

  const handleDownload = () => {
    // Simulate downloading the file when the link is clicked
    const link = document.createElement('a');
    link.href = downloadLink;
    link.download = 'Full Stack Developer Resume Of Mohammad Apon.pdf'; // Set the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.facebook.com/mohammad.apon.426/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={"https://github.com/MohammadApon11"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/mohammad-apon-1b0b88243/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://www.instagram.com/devapon23/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.behance.net/mohammdapon"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiBehanceLine />
      </Link>
      <Link
        href={"https://www.pinterest.com/mohammadapon11/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiPinterestLine />
      </Link>
      <button onClick={handleDownload} className="flex items-center lg:gap-x-3 border lg:px-6 md:px-5 px-3 py-1 rounded-md border-white/50 transition-all duration-300 justify-center overflow-hidden hover:border-accent group">
        <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
          Resume
        </span>
        <RiFolderDownloadLine className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />{" "}
      </button>
    </div>
  );
};

export default Socials;
