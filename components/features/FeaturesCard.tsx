"use client";
import Image from "next/image";
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
const features = [
  {
    id: 1,
    title: "Conductive Workspace",
    description:
      "Enjoy a fully equipped space with hot desks, private offices, meeting rooms, and a cozy lounge designed for productivity.",
    icon: "/images/Office icon.png",
  },
  {
    id: 2,
    title: "High-Speed Wi-Fi",
    description:
      "Stay connected with free, fast, and reliable internet for seamless browsing, streaming, and work sessions.",
    icon: "/images/Wi-Fi icon.png",
  },
  {
    id: 3,
    title: "Uninterrupted Power Supply",
    description:
      "Experience a stable and consistent electricity supply, ensuring uninterrupted work and productivity.",
    icon: "/images/Light-icon.png",
  },
  {
    id: 4,
    title: "Spacious Parking Area",
    description:
      "Park with ease in our large, secure parking space, providing convenience for all visitors.",
    icon: "/images/Car-icon.png",
  },
];

const FeaturesCard = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 }); // Correct use of useInView

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.4,
          },
        },
      }}
      className="flex flex-wrap items-center justify-center gap-10 px-4"
    >
      {features.map((feature) => (
        <motion.div
          variants={projectVariants}
          key={feature.id}
          className="flex flex-col items-center justify-between min-h-[400px] max-w-[300px] flex-1 bg-[#EAFFE3] p-10 rounded-xl"
        >
          <Image
            src={feature.icon}
            alt={feature.title}
            width={80}
            height={80}
            className="bg-[#F9690E] h-20 w-20 p-4 rounded-xl"
            priority
          />
          <h1 className="font-bold text-xl text-center uppercase tracking-widest">
            {feature.title}
          </h1>
          <p className="text-center font-semibold">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeaturesCard;
