'use client'
import Link from "next/link"
import Icons from "../global/icons"
import { Button, buttonVariants } from "../ui/button"
import { currentUser } from "@clerk/nextjs/server"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { UserButton, useUser } from "@clerk/nextjs"

const DashboardNavbar = () => {
    const user = useUser()
    // console.log(user?.user?.firstName);
    
  return (
    <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
        <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl lg:max-w-screen-2xl">
            {/* 1st div  */}
            <div className="flex items-center justify-center gap-x-1">
                    <span className="text-lg font-medium">Dashboard</span>
            </div>
            {/* 2md div  */}
            {/* 3rd div for user  */}
            <div className="flex items-center gap-4">
              <UserButton/>
            </div>
        </div>
    </header>
  )
}

export default DashboardNavbar