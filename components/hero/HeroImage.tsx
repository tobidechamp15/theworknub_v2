import Image from 'next/image'
import heroImg from '@/public/images/cowork.jpg'
import { Card, CardContent } from '../ui/card'

const HeroImage = () => {
  return (
     <div className='hidden md:block'>
        <Image src={heroImg} alt='hero' className='w-full h-[25rem] shadow-2xl rounded-2xl object-cover' priority />
    </div>
)}
export default HeroImage