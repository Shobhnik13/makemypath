import { Heart } from "lucide-react"
import Icons from "../global/icons"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-border pt-4 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-8">
                <Link target="_blank" href={'https://x.com/Shobhnik__13'} className="text-neutral-200">Made by <span className="text-[#004be0] hover:text-neutral-200">@shobhnik13</span> ✨</Link>
    </footer>
  )
}

export default Footer