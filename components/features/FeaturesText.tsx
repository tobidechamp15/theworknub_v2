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
const FeaturesText = () => {
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
      className="text-white "
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={heroVariants}
    >
      <motion.h1
        variants={projectVariants}
        className="capitalize font-bold text-4xl tracking-tight sm:text-5xl text-center mt-6"
      >
        not your regular co-working space
      </motion.h1>
      <motion.p
        variants={h1Variants}
        className="mt-12 max-w-2xl mx-auto text-center text-lg leading-8 text-muted"
      >
        Our co-working space is designed to inspire creativity and foster
        collaboration, offering modern amenities like high-speed internet,
        ergonomic workstations, relaxation lounges, private offices and meeting
        rooms. Whether you're an entrepreneur, freelancer or part of a team,
        you'll find the perfect environment to focus, connect and grow in a
        vibrant community of professionals.
      </motion.p>
    </motion.div>
  );
};
export default FeaturesText;
