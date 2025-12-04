import SpaceCard from "./SpaceCard"
import SpaceHeader from "./SpaceHeader"
import Image from "next/image"
import  Text from '@/public/images/textDesignGroup2.png'


const SpacesContainer = () => {
  return (
    <section className="bg-white py-10 relative " id='space'>
        <div className="container flex flex-col gap-5 ">
            <SpaceHeader />
            <SpaceCard />
        </div>
        <Image
            src={Text}
            alt="line"
            className="absolute bottom-10 right-0 object-cover hidden lg:block w-[20rem]"
            priority
        />
    </section>
  )
}
export default SpacesContainer