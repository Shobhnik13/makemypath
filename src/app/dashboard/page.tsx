'use client'

import DashboardNavbar from '@/components/navigation/DashboardNav'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { UserButton, useUser } from '@clerk/nextjs'
import { Item } from '@radix-ui/react-select'
import axios from 'axios'
import { LoaderCircle } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const DashboardPage = () => {
  const user = useUser()
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<any>() 
  const [topic, setTopic] = useState<string>('')

  const fetchData = async () => {
    try {
      setLoading(true)
      // setData({})
      const res = await axios.post<string>('http://localhost:5000/api/career-guidance', {
        topic: topic,
        userEmail: user.user?.emailAddresses[0].emailAddress,
      })
      setLoading(false)
      setData(res.data) 
      // const skill =  data.skillLevels.beginner
      console.log(data);
      // console.log(skill);
      setTopic('')
    } catch (err) {
      console.log(err)
      setLoading(false)
      setTopic('')
    }
  }
  
 
  return (
    <div className="flex flex-col items-center bg-black min-h-screen p-8">
        <DashboardNavbar/>
      <div className="p-10 text-2xl md:text-3xl lg:text-4xl font-bold leading-snug lg:px-14 text-center text-white mb-8">
        <h1>{`Hi, ${user ? `${user.user?.firstName} 👋` : `User 👋`} `}</h1>
      </div>
      <div className="flex w-full max-w-md items-center space-x-2 px-8 flex-col mb-6">
        <Input
          type="text"
          required
          placeholder="Enter the topic here"
          className="w-full mb-4 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <Button
          disabled={loading || !topic}
          onClick={fetchData}
          className="w-full my-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
        >
          {loading ? <LoaderCircle className="animate-spin" /> : `Generate`}
        </Button>
      </div>

      {/* Render markdown content with proper centering and increased font size */}
      {data ? (
        <div>
          <div className='text-xl capitalize mb-4'>
            {data.domain}
          </div>
          <div className='text-gray-400 mb-4'>
            {data.overview}
          </div>
          {/* mapping skills  */}
          {/* beginner  */}
          <div className=''>
            <div className='font-bold text-lg text-[#2564ebff] py-2 border-b border-foreground/20 '>
            Beginner phase 🌱
            </div>
            <div className='pt-4 flex flex-col justify-center gap-y-4 text-foreground/70'>
              {data.skillLevels.beginner.map((item:any)=>(
                <div key={item.skill} className=''>
                    <div>
                      {item.skill}
                    </div>
                    <div>
                      {item.description}
                    </div>
                    <div>
                      {item.timeToLearn}
                    </div>
                </div>
              ))}
            </div>
          </div>

            {/* intermediate  */}
            <div className=''>
            <div className='font-bold text-lg text-[#2564ebff] py-2 border-b border-foreground/20 '>
            Intermediate phase  📝
            </div>
            <div className='pt-4 flex flex-col justify-center gap-y-4 text-foreground/70'>
              {data.skillLevels.intermediate.map((item:any)=>(
                <div key={item.skill} className=''>
                    <div>
                      {item.skill}
                    </div>
                    <div>
                      {item.description}
                    </div>
                    <div>
                      {item.timeToLearn}
                    </div>
                </div>
              ))}
            </div>
          </div>

          {/* expert  */}
          <div className=''>
            <div className='font-bold text-lg text-[#2564ebff] py-2 border-b border-foreground/20 '>
            Expert phase 🌲
            </div>
            <div className='pt-4 flex flex-col justify-center gap-y-4 text-foreground/70'>
              {data.skillLevels.expert.map((item:any)=>(
                <div key={item.skill} className=''>
                    <div>
                      {item.skill}
                    </div>
                    <div>
                      {item.description}
                    </div>
                    <div>
                      {item.timeToLearn}
                    </div>
                </div>
              ))}
            </div>
          </div>
             {/* resources  */}
             <div className='mt-14 '>
              <div className='text-xl font-bold text-[#2564ebff] py-2 border-b border-foreground/20'>
              Resources from where you can learn and earn 🤑 💵
              </div>
             <div className='pt-4 flex flex-col justify-center gap-y-4 text-foreground/70'>
              {data.resources.map((item:any)=>(
                <div key={item.name}>
                    <div className='capitalize'>
                      {item.name}
                    </div>
                    <div className='capitalize'>
                      What they provide : {item.description}
                    </div>
                    <div className='capitalize'>
                      Type : {item.type}
                    </div>
                    <div className='capitalize'>
                      Payment type : {item.cost}
                    </div>
                    <div className='capitalize'>
                      Difficulty level : {item.difficulty}
                    </div>
                    <div className='capitalize'>
                      Availability : {item.duration}
                    </div>
                    <Link href={`${item.url}`} target='_blank' className='text-green-500 font-bold'>
                      Watch here 
                    </Link>
                </div>
              ))}
             </div>
        </div>
        {/* job paths  */}
        <div className='mt-14'>
          <div className='text-xl font-bold text-[#2564ebff] py-2 border-b border-foreground/20'>
            Wohoo!! You are a master in the game now, you can try to apply for these particular roles  🚀 ✅
          </div>
          <div className='capitalize pt-4 flex flex-col justify-center gap-y-4 text-foreground/70'>
              {data.careerPaths.map((item:any)=>(
                <div key={item.role}>
                    <div>
                      {item.role}
                    </div>
                    <div className='flex'>
                      Skills required for the role : 
                      {item.requiredSkills.map((item2:any)=>(
                        <div className='px-1' key={item2}>
                          {item2},
                        </div>
                      ))}
                    </div>
                    <div>
                      Responsibilities : {item.description}
                    </div>
                    <div>
                      Experience required : {item.requiredExperience} years
                    </div>
                    <div>
                      growth trajectory : {item.growthTrajectory}
                    </div>
                </div>
              ))}
          </div>
        </div>
              {/* tips and presence  */}

        <div className='mt-14'>
          <div className='text-xl font-bold text-[#2564ebff] py-2 border-b border-foreground/20'>
            Tips to stand out among crowd  💫
          </div>
          <div className='capitalize pt-4 flex flex-col justify-center gap-y-4 text-foreground/70'>
              Build your online presence among these platforms by posting your daily progress and sharing informative content
            {data.professionalDevelopment.onlinePresence.platforms.map((item:any)=>(
              <div key={item.name}>
                <div>
                  {item.name}
                </div>
                  <div>
                    Purpose : {item.purpose}
                  </div>
              </div>
            ))}
          </div>
          <div className='capitalize pt-8 flex flex-col justify-center gap-y-1 text-foreground/70'>
          Some useful project ideas 
            {data.professionalDevelopment.onlinePresence.portfolio.projectSuggestions.map((item:any)=>(
              <div className='' key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>            
        </div>
      ) : (
        <div className="text-white">No data available</div>
      )}
    </div>
  )
}

export default DashboardPage
