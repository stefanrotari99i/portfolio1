"use client";

import { Environment, OrbitControls } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";
import { Suspense } from "react";

export const Scene = () => {
  return (
    <Canvas>
      <Suspense fallback={"Loading..."}>
        <Model />
        <Environment preset="sunset" />
        <OrbitControls
          autoRotate
          enableDamping={true}
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          zoomSpeed={0.3}
          panSpeed={0.1}
        />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
