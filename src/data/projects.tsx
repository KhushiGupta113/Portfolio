import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiQt,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  cpp: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  qt: {
    title: "Qt",
    bg: "black",
    fg: "white",
    icon: <SiQt />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
};
const projects: Project[] = [
  {
    id: "codelens",
    category: "Platform",
    title: "CodeLens : Hackathon Assessment Platform",
    src: "/assets/projects-screenshots/CodeLens.png",
    screenshots: [],
    live: "https://codelens.42web.io/Frontend/",
    github: "https://github.com/KhushiGupta113/INT219-INT220-Project",
    skills: {
      frontend: [PROJECT_SKILLS.tailwind, PROJECT_SKILLS.js],
      backend: [],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono">
            CodeLens is a secure online assessment platform for hackathon
            candidates—proctored tests, automated scoring, and analytics. Built
            with PHP, MySQL, and Tailwind CSS.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <ul className="list-disc ml-6 mt-4 font-mono">
            <li>
              Admins can create and manage tests; candidates take monitored
              assessments with timers and detailed results.
            </li>
            <li>
              Session-based auth, PDO/MySQL backend, and a responsive UI with
              real-time monitoring and reporting.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "exam-paper-generator",
    category: "Web Application",
    title: "Exam Paper Generator",
    src: "/assets/projects-screenshots/ExamGen.png",
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    github: "https://github.com/shivangishrey0/ExamPaper-Generator",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A full-stack web application to generate structured and customizable
            question papers from CSV datasets, with a React frontend and Express
            + MongoDB backend.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <ul className="list-disc ml-6 mt-4 font-mono">
            <li>
              Built a dynamic question generation system supporting multiple
              formats (MCQs, descriptive) with configurable difficulty levels and
              question distribution for flexible paper creation.
            </li>
            <li>
              Implemented efficient CSV parsing, data processing, and validation
              pipelines, along with RESTful APIs and a modular backend
              architecture to ensure high data integrity, scalability, and
              maintainability.
            </li>
            <li>
              Designed a clean, user-friendly UI supporting organized layouts and
              intuitive navigation for an enhanced user experience.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "addressbook",
    category: "Desktop App",
    title: "AddressBook",
    src: "/assets/projects-screenshots/addressbook.png",
    screenshots: [],
    github: "https://github.com/KhushiGupta113/AddressBook",
    skills: {
      frontend: [PROJECT_SKILLS.cpp, PROJECT_SKILLS.qt],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            AddressBook is a desktop contact manager built with C++ and the Qt
            Framework. It supports adding, editing, deleting, sorting, and
            exporting contacts in a polished desktop interface.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <ul className="list-disc ml-6 mt-4 font-mono">
            <li>
              Created a responsive Qt-based desktop UI for contact management,
              including search, edit, and delete workflows.
            </li>
            <li>
              Implemented structured data handling with C++ for reliable storage
              and smooth user interaction.
            </li>
            <li>
              Added export functionality so contacts can be saved for later use
              and shared easily.
            </li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;
