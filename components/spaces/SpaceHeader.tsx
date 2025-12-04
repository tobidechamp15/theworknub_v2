"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const projectVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 2 } },
};
const h1Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 2 } },
};
const SpaceHeader = () => {
   const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 }); // Correct use of useInView

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={heroVariants}
      className="px-4"
    >
      <motion.h1
        variants={h1Variants}
        className="capitalize font-bold text-4xl tracking-tight sm:text-5xl mt-6"
      >
        our co-working space
      </motion.h1>
      <motion.p variants={projectVariants} className="mt-6  max-w-4xl text-lg leading-8">
        Book a Hot Desk for the day, a Dedicated Desk for as long as you want or
        a Meeting Room for your team
      </motion.p>
    </motion.div>
  );
};
export default SpaceHeader;
