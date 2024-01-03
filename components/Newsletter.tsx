"use client";

import { frantz, ttnorms } from "@/app/fonts";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import { SOCIALS } from "@/statics/data";
import SocialsLinks from "./first-screen/SocialLinks";

const Newsletter = () => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  const mainVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.04,
      },
    },
  };

  const letterVariant = {
    hidden: { y: 300 },
    visible: { y: 0 },
  };

  return (
    <motion.section className="flex flex-col items-center justify-center bg-gradient-to-t from-black to-black/20 py-8 px-2">
      <motion.div
        ref={ref}
        className={`text-main text-6xl md:text-[200px] font-bold text-center overflow-hidden tracking-widest uppercase ${frantz.className} relative `}
        variants={mainVariant}
        initial="hidden"
        animate={controls}
      >
        {"Newsletter".split("").map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={letterVariant}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
      <div className="flex flex-col items-center justify-center">
        <p
          className={`text-center text-main text-xs md:text-sm ${ttnorms.className}`}
        >
          Subscribe to my newsletter to get updates on my latest projects and
          articles.
        </p>
        <motion.input
          type="text"
          className={`bg-transparent border-b-2 backdrop-blur-sm border-[#F9DBC1] text-main text-center max-w-96 w-full py-4 mt-8 focus:outline-none ${ttnorms.className} placeholder:text-[#F9DBC1]/70`}
          placeholder="Email"
          whileFocus={{ scale: 1.05 }}
        />
        <motion.button
          className={`bg-transparent border-2 border-[#F9DBC1] text-main text-center max-w-96 py-4 w-full mt-8 focus:outline-none relative ${ttnorms.className} backdrop-blur-sm`}
          whileHover={{
            backgroundColor: "#F9DBC1",
            scale: 1.05,
            color: "#1f1f1f",
            transition: {
              duration: 0.2,
              ease: "easeInOut",
            },
          }}
          whileFocus={{
            scale: 1.05,
            color: "#1f1f1f",
            backgroundColor: "#F9DBC1",
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          Subscribe
        </motion.button>
        <p
          className={`text-center text-main opacity-50 text-xs ${ttnorms.className} mt-4 mb-8`}
        >
          * No spam, unsubscribe at any time.
        </p>
      </div>
      <SocialsLinks socials={SOCIALS} />
    </motion.section>
  );
};

export default Newsletter;
