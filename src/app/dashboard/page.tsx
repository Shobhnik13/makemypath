'use client'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import axios from 'axios'
import React from 'react'

const page = () => {
    const fetchData = async()=>{
        const data = await axios.post('http://localhost:3000/api/Generate',{topic:'deep learning'})
        // const jsonData = JSON.parse(data.data)
        console.log(data.data)
    }
  return (
    <div className='flex '>
        <UserButton/> 
        <Button onClick={fetchData}>Hiii</Button>
    </div>
  )
}

export default page