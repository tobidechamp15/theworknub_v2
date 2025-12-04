"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Cta from "../navbar/Cta";
import chairIcon from "@/public/images/chairIcon.png";

const pricingOptions = [
  {
    title: "Shared Spaces",
    subtitle: "(Non-Membership)",
    features: [
      "Access to Hot Desk Area",
      "Limited Access to Lounge Area",
      "Complimentary Wi-Fi",
    ],
    pricing: [
      { label: "Daily", price: "#3,500" },
      { label: "Weekly", price: "#17,500" },
      { label: "Monthly", price: "#70,000" },
    ],
  },
  {
    title: "Private Desk",
    subtitle: "(Single Membership)",
    features: [
      "Dedicated Desk Reserved For You",
      "Limited Access to Premium Lounge Area",
      "Free Wi-Fi",
      "Membership Onboarding",
    ],
    pricing: [
      { label: "Daily", price: "#5,500" },
      { label: "Weekly", price: "#27,500" },
      { label: "Monthly", price: "#110,000" },
    ],
  },
  {
    title: "Private Office",
    subtitle: "(Membership Plan)",
    features: [
      "Assigned Private Office (Max 3 persons)",
      "Access to assigned Private office",
      "Unlimited access to the premium lounge",
      "Membership Onboarding",
      "Free Wi-Fi",
      "Complimentary Coffee",
    ],
    pricing: [
      { label: "Daily", price: "#5,500" },
      { label: "Monthly", price: "#220,000" },
    ],
  },
  {
    title: "Conference/Meeting Room",
    subtitle: "(Hour Based)",
    features: [
      "Book a meeting room for presentations, meetings, and brainstorming sessions.",
      "Teleconferencing",
      "12 Executive Seating Space",
    ],
    pricing: [{ label: "Hourly", price: "#36,000" }],
  },
  {
    title: "Event Hall",
    subtitle: "(Hour Based)",
    features: [
      "Spacious event hall suitable for meetings, workshops, and presentations",
      "High-speed internet and teleconferencing facilities",
      "Projector & large display screen available",
      "Air-conditioned comfort",
      "On-site support staff for setup and assistance",
    ],
    pricing: [
      { label: "1st Hour", price: "₦85,000" },
      { label: "Subsequent Hour", price: "₦60,000" },
    ],
  },
];

// Variants with proper TypeScript types
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const PricingCard = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-wrap items-center justify-center gap-10 px-4"
    >
      {pricingOptions.map((option, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col justify-between gap-5 bg-[#EAFFE3] py-10 px-3 rounded-xl min-h-[450px] w-full max-w-[350px] shadow-lg"
        >
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2 justify-center">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={chairIcon}
                  alt="chair"
                  className="bg-[#F9690E] h-10 w-10 p-2 rounded-xl"
                  priority
                />
              </motion.div>
              <h1 className="text-[13px] font-bold">{option.title}</h1>
              <p className="text-[13px] font-thin">{option.subtitle}</p>
            </div>
            <ul className="list-disc px-4">
              {option.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="text-sm"
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            {option.pricing.map((price, i) => (
              <motion.h1
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex items-center justify-between"
              >
                {price.label} <span className="font-bold">{price.price}</span>
              </motion.h1>
            ))}
          </div>
          <motion.div whileTap={{ scale: 0.9 }}>
            <Cta
              link="https://forms.gle/Qo2XG1smyRqqHNNM6"
              label="Book a space"
              className="bg-[#F9690E] hover:bg-[#fe7723] py-4"
            />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PricingCard;
