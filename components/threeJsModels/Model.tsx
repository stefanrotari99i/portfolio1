/* trunk-ignore-all(prettier) */
import { easeInOut, useSpring, useTransform } from "framer-motion";

import { motion } from "framer-motion-3d";
import { useGLTF } from "@react-three/drei";
import { useScroll } from "framer-motion";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/untitled.glb") as any;
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const rotateY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, Math.PI / 0.8]),
    {
      stiffness: 200,
      damping: 60,
      mass: 5,
    }
  );
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 1], [0.006, 0.01]),
    {
      stiffness: 200,
      damping: 60,
      mass: 5,
    }
  );

  return (
    <group {...props} dispose={null} position={[0, -1, 0]}>
      <motion.group
        scale={scale}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        rotateY={rotateY as any}
      >
        <motion.group rotation={[-Math.PI / 2, 0, 0]} scale={120}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_Material001_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes?.body_Material002_0.geometry}
            material={materials["Material.002"]}
          />
        </motion.group>
        <motion.group
          position={[-357.404, 392.646, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={39.706}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere002_Material001_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere002_Material002_0.geometry}
            material={materials["Material.002"]}
          />
        </motion.group>
        <motion.group
          position={[199.634, 566.883, -221.001]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={39.706}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere007_Material001_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere007_Material002_0.geometry}
            material={materials["Material.002"]}
          />
        </motion.group>
        <motion.mesh
          castShadow
          receiveShadow
          geometry={nodes.waves_Material002_0.geometry}
          material={materials["Material.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.8]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.waves1_Material002_0.geometry}
          material={materials["Material.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.waves2_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[92.464, 15.529, 2.112]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        />
        <motion.mesh
          castShadow
          receiveShadow
          geometry={nodes.particles_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[489.69, 793.811, 355.293]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={20.408}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 0.03 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: easeInOut,
          }}
        />
        <motion.mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[375.469, 427.948, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.402}
          animate={{ rotateY: Math.PI / 2 }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: easeInOut,
          }}
        />
        <motion.mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[375.469, 427.948, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={60.324}
        />
        <motion.mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere004_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[375.469, 427.948, 0]}
          rotation={[-0.688, 0, 0]}
          scale={[104.129, 81.609, 0]}
          animate={{ rotateX: 6, rotateY: 6 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: easeInOut,
          }}
        />
        <motion.mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere005_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[-341.988, 460.196, -117.028]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.402}
          animate={{ rotateX: 6, rotateY: 6 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: easeInOut,
          }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere006_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-341.988, 460.196, -117.028]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={60.324}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere009_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[507.522, 667.594, -214.475]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.881}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere010_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-287.442, 585.792, -311.857]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.881}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere011_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-553.462, 331.074, -379.067]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={11.437}
        />
        <motion.mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere003_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-357.404, 392.646, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
          animate={{ rotateX: 6, rotateY: 6 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: easeInOut,
          }}
        />
        <motion.mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere008_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[199.634, 566.883, -221.001]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
          animate={{ rotateX: 6, rotateY: 6 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: easeInOut,
          }}
        />
      </motion.group>
    </group>
  );
}

useGLTF.preload("/models/scene.glb");
