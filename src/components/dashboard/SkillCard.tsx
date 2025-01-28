'use client'

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

interface SkillCardProps{
    title:any,
    data:any,
    emoji:any
}

const SkillCard = ({title, data, emoji}:SkillCardProps) => {
  return (
    <Card className="h-full w-full"> {/* Added w-full here */}
    <CardHeader>
      <CardTitle className="text-lg text-blue-600 flex items-center gap-2">
        {title} {emoji}
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      {data?.map((item:any) => (
        <div key={item.skill} className="space-y-2">
          <div className="font-medium">{item.skill}</div>
          <div className="text-sm text-gray-400">{item.description}</div>
          <div className="text-sm text-gray-400">{item.timeToLearn}</div>
        </div>
      ))}
    </CardContent>
  </Card>
  )
}

export default SkillCard