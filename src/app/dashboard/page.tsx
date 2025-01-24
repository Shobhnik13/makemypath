'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { UserButton, useUser } from '@clerk/nextjs'
import axios from 'axios'
import { LoaderCircle } from 'lucide-react'
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const DashboardPage = () => {
  const user = useUser()
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<string>('') 
  const [topic, setTopic] = useState<string>('')

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await axios.post<string>('https://makemypath-backend.onrender.com/api/career-guidance', {
        topic: topic,
        userEmail: user.user?.emailAddresses[0].emailAddress,
      })
      setLoading(false)
      setData(res.data) // Set the markdown response from backend
      setTopic('')
    } catch (err) {
      console.log(err)
      setLoading(false)
      setTopic('')
    }
  }

  return (
    <div className="flex flex-col items-center bg-black min-h-screen p-8">
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
        <Card className="w-full max-w-7xl mx-auto my-4 border border-gray-600 rounded-lg">
          <CardContent className="bg-black text-white p-8">
            <div className="prose w-full max-w-none text-base md:text-lg lg:text-xl space-y-8 text-gray-400">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {data}
              </ReactMarkdown>
            </div>
          </CardContent>  
        </Card>
      ) : (
        <div className="text-white">No data available</div>
      )}
    </div>
  )
}

export default DashboardPage
