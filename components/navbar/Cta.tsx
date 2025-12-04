import Link from "next/link"
import { Button } from "../ui/button"

type ButtonProps = {
    className?: string,
    label?: string,
    link: string,
}


const Cta = ({className, label, link}: ButtonProps) => {
  return <Button variant='default' size='lg' className={`bg-[#F9690E] hover:bg-[#f4813a] capitalize rounded-xl ${className} `}>
    <Link href={link}>{label}</Link>
  </Button>
}
export default Cta