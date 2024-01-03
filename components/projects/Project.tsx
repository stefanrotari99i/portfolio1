"use client";

import { useScroll, useSpring, useTransform, useVelocity } from "framer-motion";

import Image from "next/image";
import { motion } from "framer-motion";
import { ttnorms } from "@/app/fonts";
import { useRef } from "react";

const Project = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    stiffness: 200,
    damping: 60,
    mass: 5,
  });
  const scale = useTransform(smoothVelocity, [-1000, 0, 1000], [0.8, 1, 0.8]);
  const opacity = useTransform(smoothVelocity, [-1000, 0, 1000], [0.9, 1, 0.9]);

  return (
    <motion.article
      ref={ref}
      className="group w-screen md:w-[400px] p-2 article  overflow-hidden relative rounded-3xl "
      initial={{ rotate: 0 }}
      whileHover={{
        y: -20,
        transformOrigin: "center",
        rotate: [0, 3, -3],
        transition: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          ease: "easeInOut",
        },
      }}
      style={{ scale, opacity }}
      transition={{
        type: "tween",
        stiffness: 200,
        damping: 60,
        mass: 5,
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className="h-[40vh] w-full relative">
        <Image
          src={"/img.webp"}
          alt="Picture of the author"
          fill
          className="object-cover rounded-2xl "
        />
      </div>
      <p
        className={`uppercase group-hover:text-[#F95938] transition-all duration-300 text-xs tracking-widest font-medium text-main mt-4 ml-4 line-clamp-1 ${ttnorms.className}`}
      >
        &gt; URL Shortener with Next.js
      </p>
    </motion.article>
  );
};

export default Project;
