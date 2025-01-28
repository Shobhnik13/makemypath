'use client'

import { SkillCard } from '@/components'
import SkeletonComp from '@/components/dashboard/SkeletonComp'
import DashboardNavbar from '@/components/navigation/DashboardNav'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { UserButton, useUser } from '@clerk/nextjs'
import { Item } from '@radix-ui/react-select'
import axios from 'axios'
import { LoaderCircle } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'


const DashboardPage = () => {
  const user = useUser()
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<any>() 
  const [topic, setTopic] = useState<string>('')
  
  
  const fetchData = async () => {
    try {
      setLoading(true)
      // setData({})
      const res = await axios.post<string>('https://makemypath-backend.onrender.com/api/career-guidance', {
        topic: topic,
        userEmail: user.user?.emailAddresses[0].emailAddress,
      })
      setLoading(false)
      setData(res.data) 
      // console.log(data);
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
      {loading?(<SkeletonComp/>):(data ? (
        // overview and desc card 
        <div className='w-full max-w-[90rem] px-4 md:px-8 space-y-8'>
         <Card>
            <CardHeader>
              <CardTitle className='capitalize'>{data.domain}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">{data.overview}</p>
            </CardContent>
          </Card>

          {/* mapping skills in different card for different levels by generalising changes like title, emoji, data of skills that are mapped  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard
              title="Beginner Phase"
              data={data.skillLevels.beginner}
              emoji="🌱"
            />
            <SkillCard
              title="Intermediate Phase"
              data={data.skillLevels.intermediate}
              emoji="📝"
            />
            <SkillCard
              title="Expert Phase"
              data={data.skillLevels.expert}
              emoji="🌲"
            />
          </div>
             {/* resources card */}
             <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-600">
                Learning Resources 🤑 💵
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {data.resources.map((item:any) => (
                <div key={item.name} className="space-y-2">
                  <h3 className="font-medium capitalize">{item.name}</h3>
                  <div className="text-sm text-gray-400 space-y-1">
                    <p>What they provide: {item.description}</p>
                    <p>Type: {item.type}</p>
                    <p>Payment type: {item.cost}</p>
                    <p>Difficulty level: {item.difficulty}</p>
                    <p>Availability: {item.duration}</p>
                    <Link target='_blank' href={`${item.url}`} className="text-green-500 font-bold">
                      Watch here
                    </Link>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

        {/* job paths card */}
        <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-600">
                Career Opportunities 🚀 ✅
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {data.careerPaths.map((item:any) => (
                <div key={item.role} className="space-y-2">
                  <h3 className="font-medium">{item.role}</h3>
                  <div className="text-sm text-gray-400 space-y-1">
                    <div className="flex flex-wrap gap-1">
                      <span>Skills required:</span>
                      {item.requiredSkills.map((skill:any) => (
                        <span key={skill}>{skill},</span>
                      ))}
                    </div>
                    <p>Responsibilities: {item.description}</p>
                    <p>Experience required: {item.requiredExperience} years</p>
                    <p>Growth trajectory: {item.growthTrajectory}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
              {/* tips and presence card */}

              <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-600">
                Professional Development Tips 💫
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-4">Online Presence Platforms</h3>
                  <div className="space-y-4">
                    {data.professionalDevelopment.onlinePresence.platforms.map((item:any) => (
                      <div key={item.name} className="text-sm text-gray-400">
                        <p className="font-medium">{item.name}</p>
                        <p>Purpose: {item.purpose}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-4">Project Suggestions</h3>
                  <div className="space-y-2">
                    {data.professionalDevelopment.onlinePresence.portfolio.projectSuggestions.map((item:any) => (
                      <p key={item} className="text-sm text-gray-400">{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="text-white"></div>
      ))}
    </div>
  )
}

export default DashboardPage
