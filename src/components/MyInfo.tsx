import React from "react";
import MainHeading from "./MainHeading";
import ParaText from "./ParaText";
import avatar from "@/assets/avatar.png";
import Image from "next/image";
import { Button } from "./ui/button";

import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";
import { FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import Link from "next/link";
import CvBtn from "./CvBtn";

const MyInfo = () => {
  const info = [
    {
      label: "Email",
      icon: <IoMailOutline />,
      value: "codepriyanshu@gmail.com",
    },
    {
      label: "Phone",
      icon: <IoCallOutline />,
      value: "+91 7982846607",
    },
    {
      label: "Location",
      icon: <IoLocationOutline />,
      value: "Faridabad, Haryana, India",
    },
  ];

  const links = [
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/priyanshu-dhawan-a515a61b7/",
    },
    {
      icon: FiGithub,
      link: "https://github.com/PriyanshuD24",
    },
    {
      icon: SiLeetcode,
      link: "https://leetcode.com/u/deadIsAlive/",
    },
    {
      icon: SiCodeforces,
      link: "https://codeforces.com/profile/deadIsAlive",
    },
    {
      icon: FaMediumM,
      link: "https://medium.com/@dhawan.priyanshu",
    },
  ];
  return (
    <div className=" w-[320px]   sticky top-4 sm:top-8  h-fit bg-[#1E1E1F]  rounded-xl shadow border border-gray-100/10 p-4 md:p-6 space-y-3">
      <div className="flex items-center flex-col justify-center gap-4 border-b-[1px] border-gray-100/10 pb-3">
        <div className="bg-[#373738] p-1 rounded-xl w-fit mx-auto ">
          {/* image */}
          <Image
            src={avatar}
            alt="Avatar"
            className="rounded-full w-32 object-cover  mx-auto"
            // width={128}
            // height={128}
          />
        </div>
        <MainHeading className={"text-center"}>Priyanshu Dhawan</MainHeading>
        <ParaText
          className={"bg-[#373738]/70 w-fit rounded-xl px-2 py-1 mx-auto text-center"}
        >
          Full Stack Developer · MERN
        </ParaText>
      </div>
      <div className="space-y-3">
        {info.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <Button variant="secondary" size="icon" className="size-9">
              {item.icon}
            </Button>
            <Link
              href={
                item.label === "Email"
                  ? `mailto:${item.value}?subject=Regarding Portfolio Contact`
                  : item.label === "Phone"
                  ? `tel:${item.value}`
                  : item.label === "Location"
                  ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      item.value
                    )}`
                  : "#"
              }
              target={item.label === "Location" ? "_blank" : undefined}
              className="space-y-0.5 hover:text-cyan-400 transition-colors"
            >
              <ParaText className={"uppercase text-gray-400"}>
                {item.label}
              </ParaText>
              <ParaText>{item.value}</ParaText>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 justify-center mt-12">
        {links.map((link, idx) => (
          <Link key={idx} href={link.link} target="_blank">
            <Button variant="secondary" size="icon" className="size-6 ">
              {/* <ChevronRightIcon /> */}
              <link.icon />
            </Button>
          </Link>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-center">
        <CvBtn />
      </div>
    </div>
  );
};

export default MyInfo;
