import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

import BoomImg from "@/public/Boom.png";
import ChatImg from "@/public/Chat.png";
import ResImg from "@/public/Res.png";

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
    title: "Full-Stack Developer",
    location: "ABES ENGINEERING COLLEGE",
    description:
      "I'm now a full-stack developer.My stack includes React, Next.js, TypeScript, Tailwind, Firebase and MongoDB.I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
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
    tags: ["React", "Next.js", "Clerk", "Tailwind"],
    imageUrl: BoomImg,
    link: "https://video-web-to.vercel.app/"
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
    title: "Geritch Website",
    description:
      "A website for Restaurant where users can see the menu and book a table.",
    tags: ["React", "Tailwind", "Framer"],
    imageUrl: ResImg,
    link: "https://geritch-svg.vercel.app/"
  },
  {
    title: "Real Time Device Tracking",
    description:
      "A real-time device tracking where we can see the live location of our device. It is very much popular nowadays for lost and theft mobile.",
    tags: ["Node.JS","Express.JS","EJS","Socketio"],
    imageURL: ,
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
