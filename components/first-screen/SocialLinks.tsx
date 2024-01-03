import { motion } from "framer-motion";

const SocialsLinks = ({ socials }: { socials: any }) => {
  const boxVariant = {
    hidden: { x: "-100vw" },
    visible: {
      x: 0,
      transition: { delay: 0.5, when: "beforeChildren", staggerChildren: 0.2 },
    },
  };

  const listVariant = {
    hidden: { scale: 0, rotate: -180 },
    visible: { scale: 1, rotate: 0 },
  };
  return (
    <motion.div
      className="flex items-center gap-6"
      variants={boxVariant}
      initial="hidden"
      animate="visible"
    >
      {socials.map((social: any) => (
        <motion.a
          key={social.label}
          href={social.url}
          target="_blank"
          variants={listVariant}
          rel="noopener noreferrer"
          transition={{ duration: 0.2 }}
          className="text-main "
          aria-label={social.label}
          title={social.label}
        >
          {social.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialsLinks;
