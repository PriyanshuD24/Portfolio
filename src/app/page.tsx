import MainHeading from "@/components/MainHeading";
import ParaText from "@/components/ParaText";
import SubHeading from "@/components/SubHeading";

import HeadingWrapper from "@/layouts/HeadingWrapper";
import { Skills } from "@/utils/constants";

import Marquee from "react-fast-marquee";
import { BsDatabase } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

export default function Home() {
  const expertise = [
    {
      label: "Frontend Development",
      description:
        "Building production-grade UIs with React, Next.js, Redux, Zustand, React Query, React Flow, React DnD, TanStack Table, shadcn/ui, MUI, and Chakra UI.",
      icon: FaReact,
    },
    {
      label: "Backend Development",
      description:
        "Designing scalable REST APIs with Node.js and Express.js. Experienced with real-time SSE, Worker Threads, JWT auth, and MongoDB / PostgreSQL.",
      icon: BsDatabase,
    },
    {
      label: "Full Stack Engineering",
      description:
        "Shipping end-to-end features on CRM, fintech, and e-commerce platforms with measurable business impact across 2+ years in production environments.",
      icon: CiGlobe,
    },
    {
      label: "TypeScript & DevOps",
      description:
        "Strong TypeScript across frontend and backend. CI/CD with GitHub Actions, containerisation with Docker, and cloud deployments on AWS (EC2, S3, CloudFront, Lambda).",
      icon: SiTypescript,
    },
  ];
  return (
    <HeadingWrapper heading={"About Me"}>
    <div className="space-y-8">
      <div className="space-y-3">
        <ParaText className="!text-sm md:!text-base leading-relaxed text-gray-300">
          {`Results-driven Full Stack Developer with 2+ years of experience building scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Proficient in TypeScript, RESTful APIs, real-time systems with Server-Sent Events (SSE), and cloud deployment on AWS.`}
        </ParaText>
        <ParaText className="!text-sm md:!text-base leading-relaxed text-gray-300">
          {`Experienced delivering production-grade CRM, fintech, and e-commerce platforms with measurable business impact — including a Sales CRM managing 2,000+ leads and a fintech platform serving 1,500+ investors. Adept at crafting performant frontends using React ecosystem tools including Next.js, Redux, React Query, React Flow, TanStack Table, shadcn/ui, MUI, and Chakra UI.`}
        </ParaText>
        <ParaText className="!text-sm md:!text-base leading-relaxed text-gray-300">
          {`Strong problem-solver with 700+ DSA problems solved across LeetCode, Codeforces, and CodeChef. Open to Full Stack, Frontend, and Backend engineering roles.`}
        </ParaText>
      </div>
      <div className="space-y-4">
        <MainHeading>{`What I'm Doing`}</MainHeading>
        <div className="grid grid-cols-2 gap-4">
          {expertise.map((item, idx) => (
            <div key={idx} className="flex p-4 rounded-lg bg-gray-400/10 justify-between gap-4 shadow shadow-gray-400/30 hover:bg-gray-400/15 hover:shadow-cyan-500/10 hover:border-cyan-500/20 border border-transparent transition-all duration-300">
              <div className="text-cyan-500 text-3xl pt-1 shrink-0">
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

