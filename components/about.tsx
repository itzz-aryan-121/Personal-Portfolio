"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion, useAnimation } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  const controls = useAnimation();

    

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-3"
      >
        I am <span className="font-bold ">Aryan Tomar</span>, a passionate <span className="font-bold underline">Full-Stack Developer</span>  specializing in web development. My journey in this field has been driven by a deep enthusiasm for creating sophisticated websites and web applications. With a strong proficiency in the MERN stack—MongoDB, Express.js, React, and Node.js—I excel at building dynamic and user-friendly digital experiences. I have extensive experience with database management, particularly with MongoDB, which enables me to design and maintain robust and scalable data solutions. I am particularly adept with React, especially Next.js, which allows me to create seamless and efficient applications. I am committed to staying abreast of the latest industry trends and continually refining my skills to deliver high-quality, innovative solutions. My dedication to web development is reflected in my meticulous attention to detail and my drive to push the boundaries of what’s possible in the digital realm.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {/* <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Figma</span>. I'm also
        learning how to play the guitar. */}
      </motion.p>
    </motion.section>
  );
}
