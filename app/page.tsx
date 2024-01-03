import About from "@/components/first-screen/About";
import Cursor from "@/components/Cursor";
import Newsletter from "@/components/Newsletter";
import ProjectsWrapper from "@/components/projects/ProjectsWrapper";
import Scene from "@/components/threeJsModels/ThreeScene";
export default function Home() {
  return (
    <>
      <Cursor />
      <About />
      <div className="fixed top-0 left-0 w-screen h-screen  z-[-1]">
        <Scene />
      </div>

      <ProjectsWrapper />
      <Newsletter />
    </>
  );
}
