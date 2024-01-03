/* trunk-ignore-all(prettier) */
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import Project from "./Project";
import ProjectsWrapperTitle from "./ProjectsWrapperTitle";
import ResizeObserver from "resize-observer-polyfill";
import { useScrollPercentage } from "react-scroll-percentage";

const ProjectsWrapper = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  const scrollPerc = useMotionValue(0);

  useLayoutEffect(() => {
    scrollRef.current && setScrollRange(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  const onResize = useCallback((entries: [any]) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries: any) =>
      onResize(entries)
    );
    if (ghostRef.current) {
      resizeObserver.observe(ghostRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const [containerRef, percentage] = useScrollPercentage({
    threshold: 0.1,
  });

  useEffect(() => {
    scrollPerc.set(percentage);
    /* trunk-ignore(eslint/react-hooks/exhaustive-deps) */
  }, [percentage]);

  const transform = useTransform(
    scrollPerc,
    [0, 1],
    [0, -scrollRange + viewportW]
  );
  const physics = { damping: 14, mass: 1, stiffness: 60 };
  const spring = useSpring(transform, physics);

  return (
    <div
      ref={containerRef}
      className="relative container-projects bg-gradient-radial from-[#000000] to-[#00000000] "
    >
      <div className="sticky top-0 left-0 right-0 will-change-transform ">
        <ProjectsWrapperTitle />
        <motion.section
          ref={scrollRef}
          style={{ x: spring }}
          className="relative h-[50vh] flex items-center px-[30vw] thumbnails-container"
        >
          <div className="relative flex gap-10 mr-20 mb-0 wrapper">
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
        </motion.section>
      </div>
      <div
        ref={ghostRef}
        style={{ height: scrollRange }}
        className="w-screen px-52"
      />
    </div>
  );
};

export default ProjectsWrapper;
