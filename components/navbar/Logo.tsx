import Image from "next/image"
import Link from "next/link"
import LogoImg from '@/public/images/logo1.png'


const Logo = () => {
  return (
    <Link href='/'>
        <Image
            src={LogoImg}
            alt="worknub"
            className="h-8 w-40 object-cover"
            priority
        />
    </Link>
  )
}
export default Logo