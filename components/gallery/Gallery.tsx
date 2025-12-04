import PrivateOffice from "@/public/images/privateOffice.jpg";
import Conference from "@/public/images/conference.jpg";
import Dedicated from "@/public/images/dedicatedOffice.jpg";
import HotDesk from "@/public/images/hotdesk.jpg";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-2 ">
      <Image
        src={PrivateOffice}
        alt="hero"
        className="w-full h-[16rem] rounded-xl object-cover"
        priority
      />
      <Image
        src={Conference}
        alt="hero"
        className="w-full h-[16rem] rounded-xl object-cover "
        priority
      />
      <Image
        src={Dedicated}
        alt="hero"
        className="w-full h-[16rem] rounded-xl object-cover "
        priority
      />
      <Image
        src={HotDesk}
        alt="hero"
        className="w-full h-[16rem] rounded-xl object-cover "
        priority
      />
    </div>
  );
};
export default Gallery;
