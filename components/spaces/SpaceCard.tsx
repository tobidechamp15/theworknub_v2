"use client";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Btn = () => (
  <Button asChild variant="outline" className="mt-4 text-[#F9690E]">
    <Link href="#">Read More</Link>
  </Button>
);

const spaces = [
  {
    img: "/images/hotdesk.jpg",
    title: "Hot Desk",
    description:
      "Your own personal workspace, available for as long as you need. Settle in, stay focused and make it yours.",
  },
  {
    img: "/images/greenroom3.jpg",
    title: "Dedicated Desk",
    description:
      "Hot desk, dedicated desk, private office, meeting room, rest lounge, a conducive and innovative space.",
  },
  {
    img: "/images/team.jpg",
    title: "Meeting Room",
    description:
      "Book the perfect meeting room for your team, fully equipped with everything you need to collaborate and create seamlessly.",
  },
  {
    img: "/images/privateOffice.jpg",
    title: "Private Office",
    description:
      "Step into your own personal offices, designed for focus, comfort, and success.",
  },
];

const SpaceCard = () => {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

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
            staggerChildren: 0.3,
          },
        },
      }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-10 px-4"
    >
      {spaces.map((space, index) => (
        <motion.div
          key={index}
         
          variants={heroVariants}
        >
          <Card className="flex flex-col items-center justify-center gap-5 bg-[#F9690E] py-4 rounded-xl">
            <CardContent className="flex flex-col items-center justify-between h-[450px]">
              <Image
                src={space.img}
                alt={space.title}
                className="p-2 rounded-xl h-[300px] w-full"
                priority
                width={270}
                height={300}
              />
              <div>
                <h1 className="text-left font-bold text-xl text-white uppercase tracking-widest my-2">
                  {space.title}
                </h1>
                <p className="text-white font-light">{space.description}</p>
                <Btn />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SpaceCard;
