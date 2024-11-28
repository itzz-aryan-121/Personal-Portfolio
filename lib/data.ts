import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

import VidImg from "@/public/Vid.png";
import ChatImg from "@/public/Chat.png";
import ResImg from "@/public/Res.png";
import DevImg from "@/public/Dev.png";
import CurImg from "@/public/Cur.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  
  {
    title: "Web Developer",
    location: "Zidio Development",
    description:
      "I'm Working as an Web Developer intern @ Zidio Development.My stack includes React, Next.js, TypeScript, Tailwind, Firebase and MongoDB.I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
  {
    title: "Online Training",
    location : "Ghaziabad, Uttar Pradesh, India",
    description:"6 month Trainee in Full Stack Development from APNA COLLEGE. I have been a part of DELTA Batch 2.0",
    icon: React.createElement(CgWorkAlt),
    date:"31-08-2023 to 31-02-2024"
  },
  {
    title: "Hackathon",
    location: "GL BAJAJ INSTITUTE OF TECHNOLOGY AND MANAGEMENT",
    description:
      "I participated in a hackathon and made a project on a theme  'Health and Fitness'.",
    icon: React.createElement(CgWorkAlt),
    date: "10-05-2023"
  }
] as const;

export const projectsData = [
  {
    title: "Video-Conferencing App",
    description:
      "I worked as a full-stack developer on this startup project. Users can give public feedback to it.",
    tags: ["React","Firebase", "ZeoCloud"],
    imageUrl: VidImg,
    link: "https://video-conferencing-app-tfa3.vercel.app/"
  },
  {
    title: "Real Time Chat Application",
    description:
      "A real-time chat application where users can create rooms and chat with each other. It also has a dark mode.",
    tags: ["React", "Firebase", "Tailwind", "Redux"],
    imageUrl: ChatImg,
    link: "https://message-mingle.vercel.app/"
  },
  
  {
    title: "QR-Code Generator",
    description:
      "A website for Generating QR-Code. These codes can be easily scanned by mobile devices to access the encoded information quickly. ",
    tags: ["Nextjs", "Tailwind", "Shadcn"],
    imageUrl: ResImg,
    link: "https://qr-code-gen-new.vercel.app/"
  },
  {
    title: "Real Time Device Tracking",
    description:
      "A real-time device tracking where we can see the live location of our device. It is very much popular nowadays for lost and theft mobile.",
    tags: ["Node.JS","Express.JS","EJS","Socketio"],
    imageUrl: DevImg ,
    link: "https://realtime-device-track-1-l25r.onrender.com/"
  },
] as const;

export const skillsData = [
  "Frontend: React (Next.js), HTML5, CSS3, JavaScript (ES6+)",
  "Backend: Node.js, Express.js,EJS",
  "Database: MongoDB, MySQL,Firebase,Convex",
  "Tools: Git, VS Code, Postman",
  "Other: Responsive Design, RESTful APIs, Version Control"
] as const;
