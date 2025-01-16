import Link from "next/link"
import Icons from "../global/icons"
import { Button, buttonVariants } from "../ui/button"

const Navbar = () => {
    const user = false
  return (
    <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
        <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl lg:max-w-screen-2xl">
            {/* 1st div  */}
            <div className="flex items-start">
                <Link href="/" className="flex items-center gap-2">
                    <Icons.logo className="w-8 h-8"/>
                    <span className="text-lg font-medium">MakeMyPath</span>
                </Link>
            </div>
            {/* 2md div  */}
            <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <ul className="flex items-center justify-center gap-8">
                            <Link href="#about" className="hover:text-foreground/80 text-sm">About</Link>
                            <Link href="#features" className="hover:text-foreground/80 text-sm">Features</Link>
                            <Link href="#reviews" className="hover:text-foreground/80 text-sm">Reviews</Link>
                         </ul>
            </nav>
            {/* 3rd div for user  */}
            <div className="flex items-center gap-4">
              {
                user?("user is here"):(
                    <>
                    <Link href={'/sign-in'} className={buttonVariants({ size: "sm", variant: "default" })}>
                    Login
                    </Link>
                    </>
                )
              }          
            </div>
        </div>
    </header>
  )
}

export default Navbar