'use client'
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import axios from 'axios'
import React, { useState } from 'react'

const DashboardPage = () => {
    const user = useUser()
    const [loading, setLoading] = useState(false)
    // console.log(user.user?.emailAddresses[0].emailAddress)
    const fetchData = async()=>{
        try{
            setLoading(true)
        const data = await axios.post('http://localhost:5000/api/career-guidance',{
            topic:'Full stack DEV',
            userEmail:user.user?.emailAddresses[0].emailAddress
        })
        setLoading(false)
        console.log(data.data)
        }catch(err:any){
            console.log(err);
            setLoading(false)
        }
    }
  return (
    <div className='flex '>
        <UserButton/> 
        <Button onClick={fetchData}>{loading?('loading...'):'click me'}</Button>
    </div>
  )
}

export default DashboardPage