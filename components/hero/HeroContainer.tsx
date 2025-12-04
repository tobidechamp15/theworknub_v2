"use client";
import HeroImage from "@/components/hero/HeroImage";
import HeroText from "@/components/hero/HeroText";
import Focus from "@/public/images/focustext.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useEffect } from "react";

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const HeroContainer = () => {
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
      className="relative bg-[#EAFFE3] md:py-20 py-6 min-h-[90vh] h-full hero-bg"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-24 px-4">
        <HeroText />
        <HeroImage />
      </div>
      <motion.span
        variants={projectVariants}
        className="absolute w-[18rem] bottom-0 right-8 object-cover hidden lg:block"
      >
        <Image
          src={Focus}
          alt="line"
          className="absolute w-[18rem] bottom-0 left-8 object-cover hidden lg:block"
          priority
        />
      </motion.span>
    </motion.div>
  );
};

export default HeroContainer;
