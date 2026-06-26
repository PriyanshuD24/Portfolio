import { ayventuresImages } from "@/assets/project-img/ayventures/indes";
import { desynworksImages } from "@/assets/project-img/desynworks";
import { houseBanaoImages } from "@/assets/project-img/housebanao";
import { hozoImages } from "@/assets/project-img/hozo";
import { lngImages } from "@/assets/project-img/lng";
import { nerdySocialImages } from "@/assets/project-img/nerdy-social";
import { tasteRushImages } from "@/assets/project-img/taste-rush";
import { callLouderImages } from "@/assets/project-img/call-louder";
import { airbrickImages } from "@/assets/project-img/airbrick";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaGitAlt,
  FaLinux,
  FaAws,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiDocker,
  SiGithubactions,
  SiPostgresql,
  SiPrisma,
  SiRedux,
  SiFirebase,
  SiNginx,
  SiChakraui,
  SiMui,
  SiReactquery,
  SiShadcnui,
  SiJsonwebtokens,
  SiPostman,
  SiJest,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

export const Skills = [
  // Languages
  { skillName: "JavaScript", icon: FaJsSquare, color: "text-yellow-400" },
  { skillName: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { skillName: "HTML5", icon: FaHtml5, color: "text-orange-600" },
  { skillName: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { skillName: "SQL", icon: FaDatabase, color: "text-cyan-600" },
  { skillName: "C", icon: SiC, color: "text-blue-500" },
  { skillName: "C++", icon: SiCplusplus, color: "text-blue-600" },

  // Frontend
  { skillName: "React", icon: FaReact, color: "text-cyan-500" },
  { skillName: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { skillName: "Redux", icon: SiRedux, color: "text-purple-600" },
  { skillName: "Zustand", icon: FaReact, color: "text-cyan-500" },
  { skillName: "React Query", icon: SiReactquery, color: "text-red-500" },
  { skillName: "TanStack Table", icon: FaReact, color: "text-rose-500" },
  { skillName: "React DnD", icon: FaReact, color: "text-cyan-500" },
  { skillName: "React Flow", icon: FaReact, color: "text-pink-500" },
  { skillName: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { skillName: "shadcn/ui", icon: SiShadcnui, color: "text-zinc-900 dark:text-zinc-50" },
  { skillName: "Material UI (MUI)", icon: SiMui, color: "text-blue-500" },
  { skillName: "Chakra UI", icon: SiChakraui, color: "text-teal-500" },

  // Backend
  { skillName: "Node.js", icon: FaNodeJs, color: "text-green-600" },
  { skillName: "Express.js", icon: SiExpress, color: "text-gray-800 dark:text-white" },
  { skillName: "Rest API", icon: SiExpress, color: "text-green-500" },
  { skillName: "Server-Sent Events (SSE)", icon: SiExpress, color: "text-yellow-600" },
  { skillName: "Worker Threads", icon: FaNodeJs, color: "text-green-600" },
  { skillName: "JWT Authentication", icon: SiJsonwebtokens, color: "text-amber-500" },

  // Databases
  { skillName: "MongoDB", icon: SiMongodb, color: "text-green-700" },
  { skillName: "Mongoose", icon: SiMongodb, color: "text-red-700" },
  { skillName: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
  { skillName: "Prisma ORM", icon: SiPrisma, color: "text-gray-700 dark:text-white" },
  { skillName: "Firebase", icon: SiFirebase, color: "text-yellow-500" },

  // Cloud & DevOps
  { skillName: "AWS", icon: FaAws, color: "text-orange-400" },
  { skillName: "GitHub Actions", icon: SiGithubactions, color: "text-purple-500" },
  { skillName: "Docker", icon: SiDocker, color: "text-sky-600" },
  { skillName: "Postman", icon: SiPostman, color: "text-orange-500" },
  { skillName: "Nginx", icon: SiNginx, color: "text-green-600" },

  // Testing & Tools
  { skillName: "Jest", icon: SiJest, color: "text-red-800" },
  { skillName: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { skillName: "GitHub", icon: FaGithub, color: "text-gray-800 dark:text-white" },
  { skillName: "VS Code", icon: TbBrandVscode, color: "text-blue-500" },
  { skillName: "Linux", icon: FaLinux, color: "text-orange-400" },
];

export const ResumeSections = [
  {
    mainHeading: "Education",
    info: [
      {
        heading: "Deenbandhu Chotu Ram University of Science and Technology",
        subHeading: "Bachelor of Technology in Computer Science",
        date: "2020 - 2024",
      },
      {
        heading: "Vidya Mandir Public School",
        subHeading: "Class 12th, Science — 84.3%",
        date: "2018 - 2019",
      },
    ],
  },
  {
    mainHeading: "Work Experience",
    info: [
      {
        heading: "Full Stack Web Developer",
        subHeading: "AY Tech · Dwarka, Delhi",
        date: "July 2024 – Present",
        description: [
          "Built a production-grade full-stack Sales CRM (Call Louder) managing 2,000+ leads across 20+ agents — architected real-time data streaming via Server-Sent Events (SSE) and offloaded heavy computation to Worker Threads.",
          "Developed Fundist, a fintech investor-startup matching platform serving 1,500+ investors and 150+ startups, with drag-and-drop pitch deck workflows (React DnD), interactive pipeline visualisations (React Flow), and paginated tables (TanStack Table).",
          "Built AirBrick's frontend showcasing 20,000+ interior design images and 32,000+ materials with masonry layouts, lazy loading, 3D/AR previews, a multi-step cost estimator, and e-commerce procurement via MUI.",
          "Engineered RESTful APIs using Node.js and Express.js backed by MongoDB (Mongoose) and PostgreSQL; enforced strong typing throughout with TypeScript, reducing runtime errors significantly.",
          "Implemented role-based access control (RBAC), JWT authentication, appointment scheduling, and optimistic UI updates with React Query and Zustand across multiple client products.",
          "Set up CI/CD pipelines with GitHub Actions, containerised applications with Docker, and deployed to AWS (EC2, S3, CloudFront, Lambda) — ensuring zero-downtime releases.",
          "Integrated Web Push Notifications, third-party payment gateways, and Google Maps API to extend feature sets across production platforms.",
        ],
      },
    ],
  },
  {
    mainHeading: "Achievements",
    info: [
      {
        heading: "Competitive Programming",
        subHeading: "LeetCode · Codeforces · CodeChef",
        date: "Ongoing",
        description: [
          "Solved 700+ DSA problems across LeetCode, Codeforces, and CodeChef, demonstrating strong algorithmic thinking and problem-solving ability.",
        ],
      },
    ],
  },
];

export const Projects = [
  {
    label: "Call Louder",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "React Query",
      "Zustand",
      "shadcn/ui",
      "Server-Sent Events (SSE)",
      "Worker Threads"
    ],
    shortDescription:
      "A production-grade full-stack Sales CRM platform managing 2,000+ leads across 20+ sales agents with real-time data streaming.",
    longDescription: [
      "Architected real-time data streaming using Server-Sent Events (SSE) to update sales agents instantly on lead assignments.",
      "Offloaded heavy background computations to Node.js Worker Threads to prevent main thread blocking during lead generation.",
      "Integrated Web Push Notifications to alert agents on new assignments and follow-ups without requiring them to keep the tab active.",
      "Built granular role-based access control, appointment scheduling, and optimistic UI updates via React Query and Zustand."
    ],
    deployedLink: "",
    githubLink: "",
    bannerImg: callLouderImages[0],
    images: callLouderImages,
    isPersonal: false,
  },
  {
    label: "Fundist",
    techStack: [
      "React.js",
      "React Flow",
      "React DnD",
      "React Query",
      "TanStack Table",
      "Chakra UI"
    ],
    shortDescription:
      "A fintech investor-startup matching platform serving 1,500+ investors and 150+ startups with drag-and-drop workflows and interactive pipelines.",
    longDescription: [
      "Developed the frontend of a matching platform serving 1,500+ investors and 150+ startups with smart matchmaking algorithms.",
      "Built drag-and-drop pitch deck workflows using React DnD and interactive pipeline visualizations with React Flow.",
      "Implemented high-performance paginated tables with TanStack Table and multi-panel admin dashboards for founders/investors."
    ],
    deployedLink: "https://app.fundist.in/",
    githubLink: "",
    bannerImg: ayventuresImages[0],
    images: ayventuresImages,
    isPersonal: false,
  },
  {
    label: "AirBrick",
    techStack: [
      "React.js",
      "Material UI (MUI)",
      "Axios",
      "React Lazy",
      "Masonry Layout"
    ],
    shortDescription:
      "An interior design platform featuring 20,000+ showcase images, 32,000+ materials, and a multi-step cost estimator.",
    longDescription: [
      "Built the frontend of an interior design platform displaying 20,000+ showcase images and 32,000+ materials with lazy loading and masonry layouts.",
      "Developed a multi-step cost estimator, project tracker, and site-visit booking flow with e-commerce procurement.",
      "Designed secure payments and e-commerce workflows across a fully responsive, pixel-perfect MUI component architecture."
    ],
    deployedLink: "",
    githubLink: "",
    bannerImg: airbrickImages[0],
    images: airbrickImages,
    isPersonal: false,
  },
  {
    label: "Liquid Nitro Games",
    techStack: ["JavaScript", "React", "Tailwind CSS"],
    shortDescription:
      "Developed Liquid Nitro Games, a dynamic gaming website using React and Tailwind CSS for a modern, responsive UI, and Spline for immersive 3D model integration.",
    longDescription: [
      "Engineered a responsive frontend with React and Tailwind CSS, creating an intuitive and visually striking interface for a gaming website.",
      "Integrated Spline for seamless 3D model rendering, utilizing React Suspense with fallback mechanisms to handle asynchronous loading."
    ],
    deployedLink: "https://www.liquidnitro.games/",
    githubLink: "",
    bannerImg: lngImages[0],
    images: lngImages,
    isPersonal: false,
  },
  {
    label: "House Banao",
    techStack: ["JavaScript", "Next.js", "Tailwind CSS", "Rest API"],
    shortDescription:
      "House Banao is a web platform developed with Next.js and Tailwind CSS, enabling users to explore and customize property designs.",
    longDescription: [
      "Created customized property discovery pages with dynamic routing and content layout optimizations.",
      "Implemented responsive layouts and fast client-side navigation using Next.js framework features."
    ],
    deployedLink: "https://www.housebanao.com/",
    githubLink: "",
    bannerImg: houseBanaoImages[0],
    images: houseBanaoImages,
    isPersonal: false,
  },
  {
    label: "Hozo Homes",
    techStack: ["JavaScript", "React", "Tailwind CSS", "Rest API", "Firebase"],
    shortDescription:
      "Hozo Homes – A multi-role property management platform with dedicated sections for tenants, landlords, and admin, built using React and Tailwind CSS.",
    longDescription: [
      "Developed a role-based real estate web application with React and Tailwind CSS, featuring separate interactive dashboards.",
      "Integrated property search, filtering, and listing workflows with dynamic routing and conditional rendering."
    ],
    deployedLink: "https://www.hozohomes.com",
    githubLink: "",
    bannerImg: hozoImages[0],
    images: hozoImages,
    isPersonal: false,
  },
  {
    label: "Desynworks",
    techStack: ["JavaScript", "React", "Tailwind CSS", "Redux", "Firebase", "Rest API"],
    shortDescription:
      "Desynworks is a React application that generates custom interior images and 3D models based on user inputs.",
    longDescription: [
      "Users can customize interiors by inputting room size, color schemes, and room type, generating personalized images.",
      "Built with React, Redux, Masonry, and Tailwind CSS, Desynworks offers a responsive, visually appealing interface."
    ],
    deployedLink: "https://app.desynworks.com/auth",
    githubLink: "",
    bannerImg: desynworksImages[0],
    images: desynworksImages,
    isPersonal: false,
  },
  {
    label: "Nerdy Social",
    techStack: ["JavaScript", "React", "Firebase", "Tailwind CSS", "Redux"],
    shortDescription:
      "A social media platform for tech enthusiasts to connect, share, and collaborate on projects.",
    longDescription: [
      "Created responsive dashboards and interactive post feeds using React state management and Tailwind CSS styling.",
      "Implemented social authentication and database updates with Firebase service APIs."
    ],
    deployedLink: "https://nerdy-social.netlify.app/",
    githubLink: "",
    bannerImg: nerdySocialImages[0],
    images: nerdySocialImages,
    isPersonal: true,
  },
  {
    label: "Taste Rush",
    techStack: ["JavaScript", "React", "Firebase", "Tailwind CSS", "Redux"],
    shortDescription:
      "A React-based frontend food delivery app prototype featuring restaurant listings, search, filters, and cart functionality.",
    longDescription: [
      "Built a food delivery app UI using React and Tailwind CSS to practice component state, custom filters, and page routing.",
      "Fetched live restaurant data, implemented searches, and developed an accordion food menu with cart addition mechanics."
    ],
    deployedLink: "https://taste-rush.netlify.app/",
    githubLink: "",
    bannerImg: tasteRushImages[0],
    images: tasteRushImages,
    isPersonal: true,
  },
];
