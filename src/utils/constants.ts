import { ayventuresImages } from "@/assets/project-img/ayventures/indes";
import { desynworksImages } from "@/assets/project-img/desynworks";
import { houseBanaoImages } from "@/assets/project-img/housebanao";
import { hozoImages } from "@/assets/project-img/hozo";
import { lngImages } from "@/assets/project-img/lng";
import { nerdySocialImages } from "@/assets/project-img/nerdy-social";
import { tasteRushImages } from "@/assets/project-img/taste-rush";
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
  SiVite,
  SiFirebase,
  SiNginx,
  SiChakraui,
  // SiMaterialui,
} from "react-icons/si";

export const Skills = [
  { skillName: "React", icon: FaReact, color: "text-cyan-500" },
  {
    skillName: "Next.js",
    icon: SiNextdotjs,
    color: "text-black dark:text-white",
  },
  { skillName: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { skillName: "JavaScript", icon: FaJsSquare, color: "text-yellow-400" },
  { skillName: "HTML5", icon: FaHtml5, color: "text-orange-600" },
  { skillName: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { skillName: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { skillName: "Chakra UI", icon: SiChakraui, color: "text-teal-500" },
  // { skillName: "Material UI", icon: SiMaterialui, color: "text-blue-500" },
  { skillName: "Redux", icon: SiRedux, color: "text-purple-600" },
  { skillName: "React DnD", icon: FaReact, color: "text-cyan-500" },
  { skillName: "Vite", icon: SiVite, color: "text-purple-400" },

  { skillName: "Node.js", icon: FaNodeJs, color: "text-green-600" },
  {
    skillName: "Express.js",
    icon: SiExpress,
    color: "text-gray-800 dark:text-white",
  },
  { skillName: "MongoDB", icon: SiMongodb, color: "text-green-700" },
  { skillName: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
  {
    skillName: "Prisma ORM",
    icon: SiPrisma,
    color: "text-gray-700 dark:text-white",
  },

  { skillName: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
  { skillName: "Rest API", icon: SiExpress, color: "text-green-500" },
  { skillName: "Git", icon: FaGitAlt, color: "text-orange-500" },
  {
    skillName: "GitHub",
    icon: FaGithub,
    color: "text-gray-800 dark:text-white",
  },
  { skillName: "Linux", icon: FaLinux, color: "text-orange-400" },

  { skillName: "Docker", icon: SiDocker, color: "text-sky-600" },
  { skillName: "Nginx", icon: SiNginx, color: "text-green-600" },
  { skillName: "AWS", icon: FaAws, color: "text-orange-400" },
  {
    skillName: "GitHub Actions",
    icon: SiGithubactions,
    color: "text-purple-500",
  },
];

export const ResumeSections = [
  {
    mainHeading: "Education",
    info: [
      {
        heading: "Deenbandhu Chotu Ram University of Science and Technology",
        subHeading: "Bachelor of Technology in Computer Science, CGPA : 7.0",
        date: "2020 - 2024",
      },
      {
        heading: "Vidya Mandir Public School",
        subHeading: "Class 12th, Science, Percentage: 84.3%",
        date: "2018 - 2019",
      },
    ],
  },
  {
    mainHeading: "Work Experience",
    info: [
      {
        heading: "Software Developer",
        subHeading: "Triangle Syscom Pvt. Ltd.",
        date: "July, 2024 - Present",
        description: [
          "Developed and maintained full-stack web applications using React, TypeScript, Node.js, and MongoDB, delivering responsive and scalable features in production.",
          "Built reusable, accessible UI components using Chakra UI and Material UI (MUI), improving code consistency and reducing development time by 25%.",
          "Integrated drag-and-drop interfaces with React DnD, enhancing UX in admin dashboards and interactive tools.",
          "Implemented server-side APIs using Express.js and connected them to MongoDB using Mongoose, optimizing data retrieval and validation logic.",
          "Designed CI/CD pipelines with GitHub Actions, automating testing, builds, and deployment processes to ensure rapid, error-free releases.",
          "Dockerized full-stack applications for containerized development and deployment, ensuring parity between local and production environments.",
          "Adopted TypeScript across both frontend and backend, enforcing strong typing and reducing runtime errors by 30% through static type checks.",
          "Optimized performance and code-splitting in React apps using lazy loading, memoization, and dynamic imports for better load times and SEO.",
          "Managed application state effectively using built-in React hooks and context API, ensuring clean separation of concerns and reusable business logic.",
          "Collaborated using Git and GitHub for version control, branching strategy, and pull requests; followed Agile/Scrum workflows in team environments.",
          "Wrote modular, testable code with proper linting and formatting, and enforced coding standards with ESLint, Prettier, and Husky pre-commit hooks.",
          "Integrated third-party APIs and services (e.g., Razorpay, Google Maps, and Firebase), expanding feature sets and improving user interaction.",
        ],
      },
      // {
      //   heading: "Frontend Developer Intern",
      //   subHeading: "Web Innovations Ltd.",
      //   date: "2022 - 2023",
      // },
    ],
  },
  // {
  //   mainHeading: "Certifications",
  //   info: [
  //     {
  //       heading: "Full Stack Web Development",
  //       subHeading: "Meta",
  //       date: "2023",
  //     },
  //     {
  //       heading: "AWS Solutions Architect",
  //       subHeading: "Amazon Web Services",
  //       date: "2022",
  //     },
  //   ],
  // },
];

export const Projects = [
  {
    label: "AY Ventures",
    techStack: ["Javascript", "React", "Tailwind CSS", "Chakra UI", "Rest API"],
    shortDescription:
      " AY Ventures is a React-based platform that connects investors with startups, featuring a dynamic onboarding system for companies to submit detailed profiles.",
    longDescription: 
      [
  "Architected a dynamic onboarding system using React and React Hook Form with Yup validations, enabling companies to submit detailed profiles efficiently, with real-time error handling and a 20% reduction in form submission errors.",
  "Designed a responsive, user-friendly interface with Chakra UI, ensuring consistent styling and accessibility across devices, enhancing investor-company interactions through intuitive navigation and visually appealing layouts."
]
    ,
    deployedLink: "https://app.ayventures.in/",
    githubLink: "",
    bannerImg: ayventuresImages[0],
    images: ayventuresImages,
    isPersonal: false,
  },
   {
    label: "Liquid Nitro Games",
    techStack: ["Javascript", "React", "Tailwind CSS"],
    shortDescription:
      " Developed Liquid Nitro Games, a dynamic gaming website using React and Tailwind CSS for a modern, responsive UI, and Spline for immersive 3D model integration.",
    longDescription: [
  "Engineered a responsive frontend with React and Tailwind CSS, creating an intuitive and visually striking interface for a gaming website, optimizing for cross-device compatibility and reducing load times by 15% through efficient component design.",
  "Integrated Spline for seamless 3D model rendering, utilizing **React Suspense** with fallback mechanisms to handle asynchronous loading, ensuring a fluid user experience with minimal interruptions during asset-heavy interactions."
],
    deployedLink: "https://www.liquidnitro.games/",
    githubLink: "",
    bannerImg: lngImages[0],
    images: lngImages,
    isPersonal: false,
  },

 
  {
    label: "House Banao",
    techStack: ["Javascript", "Next.js", "Tailwind CSS", "Rest API"],
    shortDescription:
      " House Banao is a web platform developed with Next.js and Tailwind CSS, enabling users to explore and customize property designs with a fast, optimized, and responsive interface.",
    longDescription: [
      "Users can customize interiors by inputting room size, color schemes, and type, generating personalized images and 3D models.",
      "Built with React, Redux, Masonry, and Tailwind CSS, Desynworks offers a responsive, visually appealing interface for an efficient design process.",
    ],
    deployedLink: "https://www.housebanao.com/",
    githubLink: "",
    bannerImg: houseBanaoImages[0],
    images: houseBanaoImages,
    isPersonal: false,
  },
  {
    label: "Hozo Homes",
    techStack: ["Javascript", "React", "Tailwind CSS", "Rest API", "Firebase"],
    shortDescription:
      "Hozo Homes – A multi-role property management platform with dedicated sections for tenants, landlords, and admin, built using React and Tailwind CSS.",
    longDescription: [
      "Developed a role-based real estate web application with React and Tailwind CSS, featuring separate interactive dashboards for tenants (property browsing), landlords (listing management), and admins (property verification and oversight).",
      "Integrated property search, filtering, and listing workflows with dynamic routing and conditional rendering, ensuring a seamless user experience across roles while maintaining scalability and clean component architecture.",
    ],
    deployedLink: "https://www.hozohomes.com",
    githubLink: "",
    bannerImg: hozoImages[0],
    images: hozoImages,
    isPersonal: false,
  },

   {
    label: "Desynworks",
    techStack: ["Javascript", "React", "Tailwind CSS", "Redux","Firebase", "Rest API"],
    shortDescription:
      " Desynworks is a React application that generates custom interior images and 3D models based on user inputs like size, color, and room type.",
    longDescription: [
      "Users can customize interiors by inputting room size, color schemes, and type, generating personalized images and 3D models.",
      "Built with React, Redux, Masonry, and Tailwind CSS, Desynworks offers a responsive, visually appealing interface for an efficient design process.",
    ],
    deployedLink: "https://app.desynworks.com/auth",
    githubLink: "",
    bannerImg: desynworksImages[0],
    images: desynworksImages,
    isPersonal: false,
  },
    {
    label: "Nerdy Social",
    techStack: ["Javascript", "React", "Firebase", "Tailwind CSS", "Redux"],
    shortDescription:
      "A social media platform for tech enthusiasts to connect, share, and collaborate on projects.",
    longDescription: [
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      " lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
    deployedLink: "https://nerdy-social.netlify.app/",
    githubLink: "",
    bannerImg: nerdySocialImages[0],
    images: nerdySocialImages,
    isPersonal: true,
  },
  {
    label: "Taste Rush",
    techStack: ["Javascript", "React", "Firebase", "Tailwind CSS", "Redux"],
    shortDescription:
      " A React-based frontend food delivery app prototype featuring restaurant listings, search, filters, and cart functionality, powered by Zomato API.",
    longDescription: [
      "Built a food delivery app UI using React and Tailwind CSS to practice core concepts such as component structure, props, state management, and routing.",
      "Fetched live restaurant data via Zomato’s API (with CORS unblocking), implemented search, filter, and an accordion-style food menu with 'add to cart' functionality.",
    ],
    deployedLink: "https://taste-rush.netlify.app/",
    githubLink: "",
    bannerImg: tasteRushImages[0],
    images: tasteRushImages,
    isPersonal: true,
  },
];
