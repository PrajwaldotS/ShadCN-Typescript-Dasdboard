"use client"

import { TrendingUp, TrendingDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export type TrendType = "up" | "down"

export type SectionCard = {
  id: number
  description: string
  value: string
  trend: {
    type: "up" | "down"
    percentage: string
  }
  highlight: string
  subtext: string
}

type SectionCardsProps = {
  cards: SectionCard[]
}

export function SectionCards({ cards }: SectionCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {cards.map((card) => {
        const TrendIcon =
          card.trend.type === "up" ? TrendingUp : TrendingDown

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
                  {card.trend.percentage}
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
  )
}
