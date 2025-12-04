import { StaticImageData } from "next/image"; // Import StaticImageData
import homeIcon from "../public/images/home.svg";
import homeHoverIcon from "../public/images/home-hover.svg";
import spaceIcon from "../public/images/spaceIcon.svg";
import spaceHoverIcon from "../public/images/spaceIcon-hover.svg";
import pricingIcon from "../public/images/pricingIcon.svg";
import pricingHoverIcon from "../public/images/pricingIcon-hover.svg";
import galleryIcon from "../public/images/galleryIcon.svg";
import galleryHoverIcon from "../public/images/galleryIcon-hover.svg";

type NavLinks = {
  href: string;
  label: string;
  defaultIcon: StaticImageData;
  hoverIcon: StaticImageData;
};

export const Nav: NavLinks[] = [
  { href: "/", label: "home", defaultIcon: homeIcon, hoverIcon: homeHoverIcon },
  {
    href: "#space",
    label: "spaces",
    defaultIcon: spaceIcon,
    hoverIcon: spaceHoverIcon,
  },
  {
    href: "#pricing",
    label: "pricing",
    defaultIcon: pricingHoverIcon,
    hoverIcon: pricingIcon,
  },
  {
    href: "#gallery",
    label: "gallery",
    defaultIcon: galleryIcon,
    hoverIcon: galleryHoverIcon,
  },
  {
    href: "blogs",
    label: "blogs",
    defaultIcon: galleryIcon,
    hoverIcon: galleryHoverIcon,
  },
];
