import { Testimonial } from "@/components/ui/infinite-moving-cards";
import { FiLink } from "react-icons/fi";
import {
  SiBabel,
  SiBootstrap,
  SiChakraui,
  SiCss3,
  SiDart,
  SiEslint,
  SiExpo,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJquery,
  SiKotlin,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostcss,
  SiPrettier,
  SiReact,
  SiRedux,
  SiSass,
  SiSolid,
  SiStyledcomponents,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-3",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  // {
  //   id: 3,
  //   title: "My tech stack",
  //   description: "I constantly try to improve",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //   imgClassName: "",
  //   titleClassName: "justify-center",
  //   img: "",
  //   spareImg: "",
  // },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  // {
  //   id: 5,
  //   title: "Currently building a JS Animation library",
  //   description: "The Inside Scoop",
  //   className: "md:col-span-3 md:row-span-2",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //   titleClassName: "justify-center md:justify-start lg:justify-center",
  //   img: "/b5.svg",
  //   spareImg: "/grid.svg",
  // },
  // {
  //   id: 6,
  //   title: "Do you want to start a project together?",
  //   description: "",
  //   className: "lg:col-span-5 md:col-span-3 md:row-span-1",
  //   imgClassName: "",
  //   titleClassName: "justify-center md:max-w-full text-center",
  //   img: "",
  //   spareImg: "",
  // },
] as const;

// Mapeamento das techs para componentes de ícone
const techIconMap: Record<string, any> = {
  HTML5: SiHtml5,
  CSS3: SiCss3,
  JavaScript: SiJavascript,
  React: SiReact,
  "React Native": SiReact,
  "Next.js": SiNextdotjs,
  Figma: SiFigma,
  "Tailwind css": SiTailwindcss,
  Typescript: SiTypescript,
  Flutter: SiFlutter,
  Dart: SiDart,
  Firebase: SiFirebase,
  Swift: SiSwift,
  Kotlin: SiKotlin,
  Redux: SiRedux,
  "Styled components": SiStyledcomponents,
  Syncfusion: FiLink,
};

const techColorMap: Record<string, string> = {
  HTML5: "#e44d26",
  CSS3: "#1572b6",
  JavaScript: "#f7df1e",
  React: "#61dafb",
  "React Native": "#61dafb",
  "Next.js": "#fff",
  Figma: "#a259ff",
  "Tailwind css": "#38bdf8",
  Typescript: "#3178c6",
  Flutter: "#02569B",
  Dart: "#0175C2",
  Firebase: "#FFCA28",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Redux: "#764abc",
  "Styled components": "#db7093",
  Syncfusion: "#7a63ff",
};

function getIconList(techs: string) {
  return techs
    .split(/,| and | e |\//i)
    .map((t) => t.trim())
    .filter(Boolean)
    .map((t) => ({
      Icon: techIconMap[t],
      color: techColorMap[t] || "#fff",
    }))
    .filter((item) => item.Icon); // Remove undefined caso não encontre o ícone
}

// Novo array projects
export const projects = [
  {
    id: 10,
    title: "Beauty Right Back",
    des: "Salons management system",
    img: "/projects/brb.png",
    iconLists: getIconList(
      "HTML5, CSS3, JavaScript, React, Next.js, Figma, Tailwind css"
    ),
    link: "https://beautyrightback.com/",
    type: "web",
  },
  {
    id: 9,
    title: "Ambev - Tergo project",
    des: "Social media agency",
    img: "/projects/ambev.png",
    iconLists: getIconList(
      "Cubit, Flutter, Clean Architecture, Firebase, Figma"
    ),
    link: "",
    type: "mobile",
  },
  {
    id: 8,
    title: "Cnp Midia - I am the CEO 🫡",
    des: "Social media agency",
    img: "/projects/cnpmidia.png",
    iconLists: getIconList(
      "HTML5, CSS3, JavaScript, Figma, Tailwind css, Design advanced"
    ),
    link: "https://cnpmidia.com/",
    sourceCode: "https://github.com/ThiagoC0STA/cnpmidia",
    type: "web",
  },
  {
    id: 4,
    title: "La costa",
    des: "Insurance broker website",
    img: "/projects/lacosta.png",
    iconLists: getIconList("HTML5, CSS3, JavaScript, Figma"),
    link: "https://lacostacorretora.netlify.app/",
    sourceCode: "https://github.com/ThiagoC0STA/lacosta",
    type: "web",
  },
  {
    id: 7,
    title: "Zytro - (Web and mobile app)",
    des: "A 3d app design system",
    img: "/projects/zytro.png",
    iconLists: getIconList(
      "HTML5, CSS3, JavaScript, React, Next.js, Figma, Tailwind css, React native"
    ),
    link: "https://www.zytro.co.uk/",
    type: "both",
  },
  {
    id: 1,
    title: "360 ERP - (Web)",
    des: "Full erp system",
    img: "/projects/360erp.png",
    iconLists: getIconList(
      "HTML5, CSS3, JavaScript, React, Next.js, Figma, Tailwind css"
    ),
    link: "https://app.360erp.com.br/",
    type: "web",
  },
  {
    id: 6,
    title: "360 ERP - (App)",
    des: "Full erp system",
    img: "/projects/360app.webp",
    iconLists: getIconList(
      "Flutter, Dart, C++, swift, kotlin, Figma, Tailwind css"
    ),
    link: "https://apps.apple.com/br/app/360-erp/id1540511289",
    type: "mobile",
  },
  {
    id: 2,
    title: "Metaverse - Animation study",
    des: "Study for animations",
    img: "/projects/metaverse.png",
    iconLists: getIconList(
      "HTML5, CSS3, JavaScript, React, Next.js, Figma, Styled components, Framer-Motion"
    ),
    link: "https://metaverse-landing-page-three.vercel.app/",
    sourceCode: "https://github.com/ThiagoC0STA/Metaverse-landing-page",
    type: "web",
  },
  {
    id: 3,
    title: "Cash build - Real Estate",
    des: "Real estate website",
    img: "/projects/cashbuild.png",
    iconLists: getIconList(
      "HTML5, CSS3, JavaScript, React, Figma, Next.js, Typescript, Styled components"
    ),
    link: "https://cash-build.vercel.app/",
    sourceCode: "https://github.com/ThiagoC0STA/Cash-build",
    type: "web",
  },
  {
    id: 5,
    title: "Shoppy - Admin Dashboard",
    des: "Admin dashboard",
    img: "/projects/admin.png",
    iconLists: getIconList("HTML5, CSS3, JavaScript, React, Tailwind Css"),
    link: "https://admin-dashboard-thiagoc0sta.vercel.app/",
    sourceCode: "https://github.com/ThiagoC0STA/admin-dashboard",
    type: "web",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: [
      `Thiago is one of the best professionals you can have on a team. He's highly proactive and knows exactly how to take ownership of a front-end project, using the best structures and practices in the market to ensure quality and scalability.`,
      `He's capable of leading projects independently, managing meetings effectively, and delivering outstanding results. Communication with Thiago is always clear, and he consistently demonstrates a strong sense of responsibility...`,
    ],
    name: "Pedro M.",
    title: "Software Engineer",
    image: "/testimonials/pedro-morais.png",
  },
  {
    quote: [
      `Thiago demonstrated excellent HTML skills and was a pleasure to collaborate with. His technical expertise and professionalism made the development process smooth and efficient.`,
    ],
    name: "Jacob F.",
    title: "CEO",
  },
  {
    quote: [
      "I had the opportunity to work with Thiago and I can confidently say he is an extremely competent and committed professional. His work as a front-end developer was always marked by quality, attention to detail, and sharp technical skills.",
      "Thiago consistently delivered solutions with clarity and admirable care for the user experience. It was clear how much he mastered what he did and how seriously he took every delivery...",
    ],
    name: "Flavio Gimenez",
    title: "Software Engineer",
    image: "/testimonials/flavio-g.png",
  },
  {
    quote: [
      `Thiago was very quick to understand our needs and completed our work within the time limits and deadline given. I would highly recommend Thiago.`,
    ],
    name: "Ben B.",
    title: "CEO",
  },
  {
    quote: [
      `I had the pleasure of working with Thiago Costa at BRB, where he consistently impressed me with his frontend skills and problem-solving mindset. He writes clean, efficient code and is always ready to support the team. A reliable and talented developer—any team would benefit from having him on board.`,
    ],
    name: "Nur U.",
    title: "Software Engineer",
    image: "/testimonials/nur-u.png",
  },
  {
    quote: [
      `Thiago is an outstanding developer — always dedicated to crafting new solutions and bringing fresh ideas to the table. His ability to build systems from scratch, manage time effectively, and maintain a strong team dynamic clearly stand out in his work.`,
    ],
    name: "Gustavo S.",
    title: "Software Engineer",
    image: "/testimonials/gustavo-g.png",
  },
  {
    quote: [
      `Working with Thiago was an excellent experience. He was meticulous with the details and delivered the project within the agreed timeframe. The communication was flawless throughout the process, and the React code he developed was well-structured and easy to understand. Additionally, Thiago consistently checked in on the project's progress, ensuring everything met expectations. Being able to track the progress through Vercel was a great advantage. I will definitely do business with him again in the future.`,
    ],
    name: "Rafael C.",
    title: "CEO",
  },
  {
    quote: [
      `I had the pleasure of working with Thiago at Wansoft and got to witness his incredible problem-solving skills firsthand. In my opinion, that's the most important quality a developer can have.`,
      `I saw him tackle every challenge thrown his way, and when he didn't know the answer, he always found a way to figure it out.`,
    ],
    name: "Diego A.",
    title: "Software Engineer",
    image: "/testimonials/diego-a.png",
  },
  {
    quote: [
      `Thiago was a pleasure to work with. He efficiently met the exact requirements of our project. While there were some minor scheduling challenges due to the case's complexity, he consistently kept us updated and ultimately exceeded our expectations. His communication was excellent`,
    ],
    name: "Patrick J.",
    title: "CEO",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer - BRB (BeautyRightBack)",
    desc: "Collaborated with the team on innovative project creation and maintenance, focusing on digital solutions and effective communication.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Web Developer - Upwork",
    desc: "Built responsive websites, innovative digital solutions, and ensured clear communication with global clients.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Front end developer - SCARATTI SOLUTIONS AND TI",
    desc: "Developed and maintained web projects, solved problems, and collaborated with the team.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Mid-Level Full Stack Developer - WanSoft Brazil",
    desc: "Developed innovative digital solutions, both independently and as part of a team, ensuring clear communication.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/ThiagoC0STA",
  },
  {
    name: "Upwork",
    img: "/upwork-white.svg",
    link: "https://www.upwork.com/freelancers/thiagoc14?mp_source=share",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/rodcdev/",
  },
  {
    name: "Email",
    img: "/mail.svg",
    link: "mailto:rodclikedev@gmail.com",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Vue.js", "AWS", "MongoDB"],
} as const;

export const frontendTechsRow1 = [
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "#e44d26",
    subtitle: "Markup",
    doc: "https://developer.mozilla.org/docs/Web/HTML",
  },
  {
    name: "CSS3",
    icon: SiCss3,
    color: "#1572b6",
    subtitle: "Style",
    doc: "https://developer.mozilla.org/docs/Web/CSS",
  },
  {
    name: "Sass",
    icon: SiSass,
    color: "#cc6699",
    subtitle: "Preprocessor",
    doc: "https://sass-lang.com/documentation",
  },
  {
    name: "PostCSS",
    icon: SiPostcss,
    color: "#dd3a0a",
    subtitle: "Tooling",
    doc: "https://postcss.org/",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "#38bdf8",
    subtitle: "Utility CSS",
    doc: "https://tailwindcss.com/docs",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "#7952b3",
    subtitle: "UI Kit",
    doc: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
  },
  {
    name: "Chakra UI",
    icon: SiChakraui,
    color: "#319795",
    subtitle: "UI Kit",
    doc: "https://chakra-ui.com/docs",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#f7df1e",
    subtitle: "Language",
    doc: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178c6",
    subtitle: "Language",
    doc: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "React.js",
    icon: SiReact,
    color: "#61dafb",
    subtitle: "Library",
    doc: "https://react.dev/learn",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#fff",
    subtitle: "Framework",
    doc: "https://nextjs.org/docs",
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "#764abc",
    subtitle: "State",
    doc: "https://redux.js.org/introduction/getting-started",
  },
  {
    name: "Expo",
    icon: SiExpo,
    color: "#fff",
    subtitle: "Mobile",
    doc: "https://docs.expo.dev/",
  },
  {
    name: "React Native",
    icon: SiReact,
    color: "#61dafb",
    subtitle: "Mobile",
    doc: "https://reactnative.dev/docs/getting-started",
  },
  {
    name: "Flutter",
    icon: SiFlutter,
    color: "#02569B",
    subtitle: "Mobile",
    doc: "https://docs.flutter.dev/",
  },
  {
    name: "Dart",
    icon: SiDart,
    color: "#0175C2",
    subtitle: "Language",
    doc: "https://dart.dev/guides",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    subtitle: "Version Control",
    doc: "https://git-scm.com/doc",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#fff",
    subtitle: "Code Hosting",
    doc: "https://docs.github.com/en",
  },
];

export const frontendTechsRow2 = [
  {
    name: "SolidJS",
    icon: SiSolid,
    color: "#2c4f7c",
    subtitle: "Framework",
    doc: "https://www.solidjs.com/docs",
  },
  {
    name: "jQuery",
    icon: SiJquery,
    color: "#0769ad",
    subtitle: "Library",
    doc: "https://api.jquery.com/",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#3c873a",
    subtitle: "Runtime",
    doc: "https://nodejs.org/en/docs",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#fff",
    subtitle: "Backend",
    doc: "https://expressjs.com/en/starter/installing.html",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    subtitle: "Database",
    doc: "https://www.mongodb.com/docs/",
  },
  {
    name: "Babel",
    icon: SiBabel,
    color: "#f9dc3e",
    subtitle: "Tooling",
    doc: "https://babeljs.io/docs/en/",
  },
  {
    name: "ESLint",
    icon: SiEslint,
    color: "#4b32c3",
    subtitle: "Linting",
    doc: "https://eslint.org/docs/latest/",
  },
  {
    name: "Prettier",
    icon: SiPrettier,
    color: "#f7b93e",
    subtitle: "Formatting",
    doc: "https://prettier.io/docs/en/index.html",
  },
  {
    name: "Jest",
    icon: SiJest,
    color: "#c21325",
    subtitle: "Testing",
    doc: "https://jestjs.io/docs/getting-started",
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "#a259ff",
    subtitle: "Design",
    doc: "https://help.figma.com/hc/en-us",
  },
  {
    name: "Zustand",
    icon: SiRedux,
    color: "#fff",
    subtitle: "State",
    doc: "https://docs.pmnd.rs/zustand/getting-started/introduction",
  },
  {
    name: "Integration",
    icon: FiLink,
    color: "#0074c1",
    subtitle: "API",
    doc: "https://restfulapi.net/",
  },
];
