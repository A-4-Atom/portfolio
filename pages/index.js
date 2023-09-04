import Header from "../components/header";
import PersonalDetails from "../components/personal-details";
import Skills from "../components/skills";
import ProjectsContainer from "../components/projects-container";
import ContactMe from "../components/contact-me";
import { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

const Portfolio = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const mouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <motion.div
      className="relative bg-white w-full flex flex-col items-center justify-start gap-[12px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <PersonalDetails />
      <Skills />
      <ProjectsContainer />
      <ContactMe />
      <motion.div
        className="cursor md:hidden"
        style={{ x: mouseX, y: mouseY }}
        transition={{ ease: "easeInOut", duration: 0.2, delay: 0.5 }}
      ></motion.div>
    </motion.div>
  );
};

export default Portfolio;
