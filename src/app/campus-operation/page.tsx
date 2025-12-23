import App from 'next/app'
import React from 'react'
import { AppLinechart } from '@/components/AppLinechart'
import { ChartRadialText } from '@/components/AppRadialText'
import { AppRadarChart } from '@/components/AppRadarChart'
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { AppStepChart } from '@/components/AppStepChart'
const placementCards = [
  {
    id: 1,
    description: "Total Students Placed",
    value: "1,248",
    trendType: "up",
    percentage: "+9.6%",
    highlight: "Increase in overall placement rate",
    subtext: "More students secured offers across all departments",
  },
  {
    id: 2,
    description: "Highest Package Offered",
    value: "₹ 28 LPA",
    trendType: "up",
    percentage: "+12.4%",
    highlight: "New record package this academic year",
    subtext: "Top offers from product-based and MNC companies",
  },
  {
    id: 3,
    description: "Students Still Unplaced",
    value: "312",
    trendType: "down",
    percentage: "-6.8%",
    highlight: "Reduction in unplaced student count",
    subtext: "Improved training and pre-placement preparation",
  },
]

const page = () => {
  return (
    <div >
<div className="grid bg-primary-foreground p-4 m-2 rounded-lg gap-4 px-4 lg:px-6 lg:grid-cols-3 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">

  {placementCards.map((card) => {
    const TrendIcon = card.trendType === "up" ? TrendingUp : TrendingDown

    return (
      <Card key={card.id} className="@container/card">
        <CardHeader>
          <CardDescription>{card.description}</CardDescription>

          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {card.value}
          </CardTitle>

          <CardAction>
            <Badge variant="outline" className="flex items-center gap-1">
              <TrendIcon className="size-4" />
              {card.percentage}
            </Badge>
          </CardAction>
        </CardHeader>

        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="flex items-center gap-2 font-medium">
            {card.highlight}
            <TrendIcon className="size-4" />
          </div>

          <div className="text-muted-foreground">
            {card.subtext}
          </div>
        </CardFooter>
      </Card>
    )
  })}

</div>


       <div className='grid lg:grid-cols-6 grid-rows-[220px] gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-3'>
        <div className='lg:col-span-4 col-span-6 row-span-2 bg-primary-foreground p-4 rounded-lg '><AppLinechart  /></div>
        <div className='lg:col-span-2 col-span-6 row-span-2 bg-primary-foreground p-4 rounded-lg '><ChartRadialText/></div>
        <div className='lg:col-span-2 col-span-6 row-span-2 bg-primary-foreground p-4 rounded-lg '><AppRadarChart/></div>
        <div className='lg:col-span-4 col-span-6 row-span-4 bg-primary-foreground p-4 rounded-lg '><AppStepChart/></div>

       </div>
        
    </div>
  )
}

export default page
