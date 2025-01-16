import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import React from 'react'

const page = () => {

  return (
    <div><UserButton/> </div>
  )
}

export default page