"use client";
import { Nav } from "@/utils/links";
import Image from "next/image";
import Link from "next/link";
import bar from "../../public/images/bar.svg";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import cancelIcon from "../../public/images/xmark.svg";
import Cta from "./Cta";

const NavLink = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center rounded-full gap-4 bg-[#3BEB00] px-6 py-2 shadow-lg">
        {Nav.map((link) => (
          <li key={link.href} className="list-none">
            <Link
              href={link.href}
              className="capitalize font-semibold px-2 hover:text-gray-500 text-white transition-all"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <Image
        src={bar}
        alt="bar"
        width={20}
        onClick={() => setIsOpen(!isOpen)}
        height={20}
        className="md:hidden cursor-pointer"
      />

      {/* Sidebar for Mobile Navigation */}
      {isOpen && (
        <motion.div
          ref={sidebarRef}
          initial={{ x: "200%" }} // Start off-screen
          animate={{ x: 0 }} // Slide in
          exit={{ x: "-100%" }} // Slide out when removed
          transition={{ type: "tween", duration: 0.4 }} // Smooth animation
          className="fixed top-0 right-0 w-64 h-full bg-[#3b3a3a] shadow-lg p-4 z-50 md:hidden"
        >
          <button
            className="text-black flex items-center gap-1"
            onClick={() => setIsOpen(false)}
          >
            <Image src={cancelIcon} alt="" width={20} height={20} />
            <span className="sr-only">Close menu</span>
          </button>

          <ul className="flex flex-col  gap-6 mt-6 ">
            {Nav.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                onMouseEnter={() => setHovered(link.label)}
                onMouseLeave={() => setHovered(null)}
                className="flex transition hover:bg-gray-100 py-2 px-4 cursor-pointer rounded-full  gap-3 hover:shadow-md capitalize  font-normal text-[#3BEB00] hover:text-black  "
              >
                <Image
                  src={
                    hovered === link.label ? link.hoverIcon : link.defaultIcon
                  }
                  // src={link.defaultIcon}
                  alt={link.label}
                  width={20}
                  height={20}
                />

                {link.label}
              </Link>
            ))}{" "}
            <Cta
              link="https://forms.gle/Qo2XG1smyRqqHNNM6"
              label="book a space"
              className=" md:hidden"
            />
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default NavLink;
