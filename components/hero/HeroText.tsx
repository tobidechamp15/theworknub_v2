import Image from "next/image";
import Cta from "../navbar/Cta";
import Line from "@/public/images/handdraw.png";

const HeroText = () => {
  return (
    <div className="px-2 md:px-0 relative">
      <h1 className="capitalize max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
        reimagine your workspace
      </h1>
      <p className="mt-12 max-w-xl text-lg leading-8 text-muted-foreground">
        Nestled in the heart of Ibadan, we offer a flexible, comfortable
        co-working space for you to get work done. Whether you're an
        entrepreneur, freelancer, or team, our space provides all you need to
        thrive.
      </p>
      <div className="flex flex-col md:flex-row gap-6 mt-8">
        <Cta
          link="https://forms.gle/Qo2XG1smyRqqHNNM6"
          className="bg-[#3BEB00] rounded-lg hover:bg-[#69d046] transition-all"
          label="reserve a seat"
        />
        <Cta
          link="http://wa.me/2347077732936"
          label="contact us"
          className="rounded-lg bg-[#f9690e] hover:bg-[#e35f0c] transition-all"
        />
      </div>
      <Image
        src={Line}
        alt="line"
        className="absolute top-32 left-8 object-cover hidden lg:block"
        priority
      />
    </div>
  );
};
export default HeroText;
