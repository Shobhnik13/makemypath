'use client'
import Link from "next/link"
import Icons from "../global/icons"
import { Button, buttonVariants } from "../ui/button"
import { currentUser } from "@clerk/nextjs/server"
import { ArrowLeft, ArrowRight, Loader } from "lucide-react"
import { cn } from "@/lib/utils"
import { useClerk, UserButton, useUser } from "@clerk/nextjs"
import { useState } from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


const DashboardNavbar = () => {
  const { signOut } = useClerk()
  // console.log(user?.user?.firstName);
  const [loadingLogout, setLoadingLogout] = useState(false)
  const handleSignOut = async () => {
    try {
      setLoadingLogout(true)
      localStorage.removeItem('data')
      localStorage.removeItem('topic')
      localStorage.removeItem('loading')
      await signOut({ redirectUrl: '/' })
    } catch (err: any) {
      console.log('error signing out', err);
    } finally {
      setLoadingLogout(false)
    }
  }

  return (
    <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
      <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl lg:max-w-screen-2xl">
        {/* 1st div  */}
        <div className="flex items-center justify-center gap-x-3">
          <Link href={'/'}><ArrowLeft  className="w-4 h-4"/></Link>
          <span className="text-lg font-medium">Dashboard</span>
        </div>
        {/* 2md div  */}
        {/* 3rd div for user  */}
        <div className="flex items-center gap-4">
          {/* <Button onClick={handleSignOut}>{loadingLogout === true ?<Loader className="w-4 h-4 animate-spin"/> : 'Sign Out'}</Button> */}
          <AlertDialog>
            <AlertDialogTrigger><Button>Sign Out</Button></AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure that you want to logout?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action will log you out from this page and will further redirect to the home page
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction><button onClick={handleSignOut}>{loadingLogout === true ?<Loader className="w-4 h-4 animate-spin"/> : 'Continue'}</button></AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

        </div>
      </div>
    </header>
  )
}

export default DashboardNavbar