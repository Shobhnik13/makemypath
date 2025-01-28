'use client'

import { Card, CardContent, CardHeader } from "../ui/card"
import { Skeleton } from "../ui/skeleton"

const SkeletonComp = () => {
  return (
    <div className="w-full max-w-[90rem] px-4 md:px-8 space-y-8">
    {/* Overview Card Skeleton */}
    <Card>
      <CardHeader>
        <Skeleton className="h-8 w-48" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4 mt-4" />
      </CardContent>
    </Card>

    {/* Skills Grid Skeleton */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(3)].map((_, index) => (
        <Card key={index} className="h-full">
          <CardHeader>
            <Skeleton className="h-6 w-40" />
          </CardHeader>
          <CardContent className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-24" />
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Resources Card Skeleton */}
    <Card>
      <CardHeader>
        <Skeleton className="h-8 w-64" />
      </CardHeader>
      <CardContent className="space-y-6">
        {[...Array(2)].map((_, index) => (
          <div key={index} className="space-y-2">
            <Skeleton className="h-5 w-48" />
            <div className="space-y-1">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>

    {/* Career Paths Card Skeleton */}
    <Card>
      <CardHeader>
        <Skeleton className="h-8 w-64" />
      </CardHeader>
      <CardContent className="space-y-6">
        {[...Array(2)].map((_, index) => (
          <div key={index} className="space-y-2">
            <Skeleton className="h-5 w-40" />
            <div className="space-y-1">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>

    {/* Professional Development Card Skeleton */}
    <Card>
      <CardHeader>
        <Skeleton className="h-8 w-64" />
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <Skeleton className="h-6 w-48 mb-4" />
            <div className="space-y-4">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="space-y-1">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <Skeleton className="h-6 w-40 mb-4" />
            <div className="space-y-2">
              {[...Array(2)].map((_, index) => (
                <Skeleton key={index} className="h-4 w-3/4" />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
  )
}

export default SkeletonComp