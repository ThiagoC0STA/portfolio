import type { Metadata } from "next";

export const links = {
  sourceCode: "https://github.com/ThiagoC0STA/portfolio",
  ownerName: "Thiago Costa",
  ownerEmail: "rodclikedev@gmail.com",
} as const;

export const siteConfig: Metadata = {
  title: `${links.ownerName} | Front-end Developer`,
  description: "Front-end Developer specializing in React, Next.js, Flutter and React Native. Creating modern and responsive digital experiences for web and mobile applications.",
  keywords: [
    // Technical Skills
    "frontend developer",
    "react developer",
    "next.js developer",
    "react native developer",
    "typescript developer",
    "javascript developer",
    "web developer",
    "mobile developer",
    
    // Technologies
    "react",
    "react.js",
    "next.js",
    "react native",
    "typescript",
    "javascript",
    "tailwindcss",
    "styled-components",
    "framer motion",
    "three.js",
    
    // Specialties
    "web development",
    "mobile development",
    "web applications",
    "mobile applications",
    "responsive interfaces",
    "ui/ux",
    "front-end",
    "frontend development",
    
    // Location
    "brazil developer",
    "brazil frontend developer",
    "freelance frontend",
    
    // Services
    "website development",
    "app development",
    "frontend consulting",
    "web solutions",
    "mobile solutions",
    
    // Qualities
    "clean code",
    "performance",
    "accessibility",
    "responsiveness",
    "modern",
    "innovative",
    
    // Additional Tech Stack
    "redux",
    "context api",
    "hooks",
    "rest api",
    "graphql",
    "jest",
    "testing",
    "git",
    "github",
    "responsive design",
    "progressive web apps",
    "single page applications"
  ] as Array<string>,
  authors: {
    name: links.ownerName,
    url: "https://github.com/ThiagoC0STA",
  },
} as const;
