import FeaturesCard from "./FeaturesCard";
import FeaturesText from "./FeaturesText";
import Create from "@/public/images/createText.png";
import Image from "next/image";

const Features = () => {
  return (
    <section className="relative bg-black px-10 py-20">
      <div className="container flex flex-col items-center justify-center gap-6">
        <FeaturesText />
        <FeaturesCard />
      </div>
      <Image
        src={Create}
        alt="line"
        className="absolute w-[18rem] bottom-0 left-96 object-cover hidden lg:block"
        priority
      />
    </section>
  );
};
export default Features;
