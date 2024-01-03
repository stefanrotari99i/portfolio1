"use client";

import { frantz, ttnorms } from "@/app/fonts";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import { useRef } from "react";

const ProjectsWrapperTitle = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start start"],
  });

  const xLeft = useSpring(useTransform(scrollYProgress, [0, 1], [-800, 0]), {
    stiffness: 200,
    damping: 60,
    mass: 5,
  });
  const xRight = useSpring(useTransform(scrollYProgress, [0, 1], [800, 0]), {
    stiffness: 200,
    damping: 60,
    mass: 5,
  });
  return (
    <div
      className="h-[40vh] flex flex-col justify-center items-center"
      ref={targetRef}
    >
      <div className="flex items-center gap-10">
        <motion.h2
          className={`text-6xl md:text-9xl text-center origin-center font-bold text-[#F95938] uppercase tracking-widest ${frantz.className}`}
          style={{ x: xLeft }}
        >
          [Recent
        </motion.h2>
        <motion.h2
          className={`text-6xl md:text-9xl text-center origin-center font-bold text-main uppercase tracking-widest ${frantz.className}`}
          style={{ x: xRight }}
        >
          Projects]
        </motion.h2>
      </div>
      <p
        className={`text-xs text-main uppercase tracking-widest text-center ${ttnorms.className}`}
      >
        check out my projects
      </p>
    </div>
  );
};

export default ProjectsWrapperTitle;
