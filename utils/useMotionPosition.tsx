"use client";

import { useEffect, useState } from "react";
const useMotionPosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = (ev) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return mousePosition;
};

export default useMotionPosition;
