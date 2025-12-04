import Link from "next/link";
import Image from "next/image";
import footerLogo from "@/public/images/footerLogo.png";

const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col md:flex-row items-center justify-between p-6 gap-4">
      <div>
        <Link href="/">
          <Image
            src={footerLogo}
            alt="worknub"
            className="h-8 w-40 object-cover"
            priority
          />
        </Link>
      </div>
      <div className="text-center md:text-right max-w-sm my-4">
        <h1 className="font-bold tracking-widest text-xl">Worknub HQ</h1>
        <h1 className="font-mono">
          2nd Floor, Building 2, West One, Opposite Environmental Task Force,
          Agodi GRA, Ibadan Oyo
        </h1>
        <a href="tel:+2347077732936">
          <h1 className="font-bold mt-2 hover:underline">+234 707 773 2936</h1>
        </a>

        <a href="mailto:theworknub@gmail.com">
          <p className="text-sm font-serif mt-4 hover:underline">
            theworknub@gmail.com
          </p>
        </a>
      </div>
    </div>
  );
};
export default Footer;
