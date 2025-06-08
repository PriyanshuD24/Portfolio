import MainHeading from "@/components/MainHeading";
import ParaText from "@/components/ParaText";
import SubHeading from "@/components/SubHeading";

import HeadingWrapper from "@/layouts/HeadingWrapper";
import { Skills } from "@/utils/constants";

import Marquee from "react-fast-marquee";
import { BsDatabase } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { FaDocker, FaReact } from "react-icons/fa";

export default function Home() {
  const expertise = [
    {
      label: "Frontend Development",
      description:
        "Crafting beautiful, responsive UIs with modern tools like React, Tailwind, and TypeScript.",
      icon: FaReact,
    },
    {
      label: "Backend Development",
      description:
        "Building fast and scalable APIs using Node.js, Express, and MongoDB.",
      icon: BsDatabase,
    },
    {
      label: "Web Development",
      description:
        "Delivering full-stack web apps that seamlessly blend frontend elegance with backend power.",
      icon: CiGlobe,
    },
    {
      label: "Devops engineering",
      description:
        "Automating deployments and infrastructure using Docker, GitHub Actions, and cloud tools.",
      icon: FaDocker,
    },
  ];
  return (
    <HeadingWrapper heading={"About Me"}>
    <div className="space-y-8  ">
      <div className="space-y-2">
        <ParaText>
        {` I'm a passionate Full Stack Developer with a strong focus on modern frontend technologies. I specialize in building clean, responsive, and accessible interfaces using React, Next.js, Tailwind CSS, MUI, Chakra UI, and drag-and-drop libraries like React DnD. I enjoy turning complex problems into intuitive user experiences.`}


        </ParaText>
        <ParaText>
    {` On the backend, I work comfortably with Node.js, MongoDB (Mongoose), PostgreSQL, and Prisma to develop scalable APIs and data models. I also have hands-on experience with DevOps tools and workflows, including Docker, AWS EC2, and GitHub Actions for automated deployments. I’m driven by a love for building meaningful products, writing maintainable code, and continuously learning better ways to solve problems.`}
        </ParaText>
      </div>
      <div className="space-y-4">
        <MainHeading>{`What I'm Doing`}</MainHeading>
        <div className="grid grid-cols-2 gap-4">
          {expertise.map((item, idx) => (
            <div key={idx} className="flex p-4 rounded-lg bg-gray-400/10 justify-between gap-4 shadow shadow-gray-400/30">
              <div className="text-cyan-500 text-3xl pt-1">
                <item.icon />
              </div>
              <div className="grow flex items-start justify-start gap-2 flex-col">
                <SubHeading className={"font-semibold"}>
                  {item.label}
                </SubHeading>
                <ParaText>{item.description}</ParaText>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <MainHeading>Skills</MainHeading>
        <div className=" space-y-4 ">
          <Marquee autoFill  pauseOnHover speed={30}>
            <div className="flex flex-wrap ">
              {Skills.map((item, idx) => (
                idx< Skills.length/2 &&   <div
                key={idx}
                  className={`w-fit bg-gray-400/10 flex items-center gap-2 ${item.color} mx-2 px-3 py-1 rounded-full shadow-sm shadow-gray-400/20`}
                >
                  <item.icon />
                  <ParaText>{item.skillName}</ParaText>
                </div>
              ))}
            </div>
          </Marquee>
           <Marquee autoFill direction="right" pauseOnHover speed={30}>
            <div className="flex flex-wrap ">
              {Skills.map((item, idx) => (
                idx>= Skills.length/2 &&   <div
                key={idx}
                  className={`w-fit bg-gray-400/10 flex items-center gap-2 ${item.color} mx-2 px-3 py-1 rounded-full shadow-sm shadow-gray-400/20`}
                >
                  <item.icon />
                  <ParaText>{item.skillName}</ParaText>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
    </HeadingWrapper>
  );
}
