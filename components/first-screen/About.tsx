"use client";

import {
  easeInOut,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { frantz, ttnorms } from "../../app/fonts";

import { SOCIALS } from "@/statics/data";
import SocialsLinks from "./SocialLinks";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center center", "end start"],
  });

  const xRight = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 1], [1, 0]), {
    stiffness: 200,
    damping: 60,
    mass: 5,
  });

  return (
    <section>
      <div
        ref={ref}
        className=" flex flex-col section p-1  md:p-14 min-h-screen bg-gradient-to-t from-black/30 to-black/0"
      >
        <div className="flex items-center justify-between">
          <Brand />
          <SocialsLinks socials={SOCIALS} />
        </div>
        <div
          className={`flex flex-col my-auto ${frantz.className} leading-[160px]`}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <HeadingText delay={0.2} text="Frontend" style={{ x: xLeft }} />
            <Paragraph
              style={{ opacity: opacity }}
              css="text-left md:text-right ml-auto"
              text=" I am a Frontend Developer with a passion for building and developing
      frontend applications and everything that goes into it."
            />
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center gap-6">
            <Paragraph
              style={{ opacity: opacity }}
              css="text-right md:text-left"
              text="I have 2 years of experience in building websites and web
            applications. I am currently working as a Frontend Developer"
            />
            <HeadingText
              delay={0.2}
              text="Developer"
              css="text-[#F95938]"
              position="right"
              style={{ x: xRight }}
            />
          </div>
        </div>
        <ScreenFooter />
      </div>
    </section>
  );
};

const Paragraph = ({
  css,
  text,
  style,
}: {
  css: string;
  text: string;
  style?: any;
}) => {
  return (
    <motion.div
      className={`text-[10px] md:text-xs overflow-hidden font-medium text-main opacity-80 max-w-[400px] uppercase ${css} leading-5 ${ttnorms.className}`}
      style={style}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0, 1] }}
          key={index}
          transition={{ duration: 0.5, ease: easeInOut, delay: index * 0.05 }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Brand = () => {
  return (
    <>
      <p className={`text-sm md:text-xl font-bold text-main uppercase `}>
        I am
      </p>
      <p className={`text-md md:text-2xl font-bold text-main uppercase  `}>
        [ Stefan Rotari ]
      </p>
    </>
  );
};

const HeadingText = ({
  delay,
  text,
  css = "text-main",
  position,
  style,
}: {
  delay: number;
  text: string;
  css?: string;
  position?: string;
  style?: any;
}) => {
  const wrapperVariant = {
    hidden: { x: "-100vw" },
    visible: {
      x: 0,
      transition: {
        delay: delay,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariant = {
    hidden: { scale: 0, rotate: 90 },
    visible: { scale: 1, rotate: 0 },
  };

  return (
    <motion.div
      className={`flex items-center gap-5 ${
        position === "right" ? "ml-auto" : "mr-auto"
      }`}
      variants={wrapperVariant}
      initial="hidden"
      animate="visible"
      style={style}
    >
      {text?.split("").map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariant}
          className={`text-7xl md:text-[160px] letter-outline  font-bold uppercase ${css} ${frantz.className}`}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const ScreenFooter = () => {
  return (
    <div className="flex items-center justify-between mt-auto">
      <motion.div
        className={`text-[8px] md:text-sm font-medium text-main text-left uppercase tracking-[8px] relative`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        - scroll down -
      </motion.div>
      <motion.p
        className={`text-[8px] md:text-sm font-medium text-right text-main uppercase tracking-[8px]`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        INOVATION & DESIGN
      </motion.p>
    </div>
  );
};

export default About;
