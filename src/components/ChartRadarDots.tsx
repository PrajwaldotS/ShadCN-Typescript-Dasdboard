"use client"

import { TrendingUp } from "lucide-react"
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

/* -------------------- TYPES -------------------- */

type RadarDotsChartData = Record<string, string | number>

type AppRadarDotsChartProps = {
  title: string
  description: string
  chartData: RadarDotsChartData[]
  chartConfig: ChartConfig
  angleKey?: string
  radarKey?: string
  dotSize?: number
  footerText: string
  footerSubText: string
}

/* -------------------- COMPONENT -------------------- */

export function ChartRadarDots({
  title,
  description,
  chartData,
  chartConfig,
  angleKey = "month",
  radarKey = "desktop",
  dotSize = 4,
  footerText,
  footerSubText,
}: AppRadarDotsChartProps) {
  return (
    <Card>
      <CardHeader className="items-center">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />

            <PolarAngleAxis dataKey={angleKey} />
            <PolarGrid />

            <Radar
              dataKey={radarKey}
              fill={`var(--color-${radarKey})`}
              fillOpacity={0.6}
              dot={{
                r: dotSize,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          {footerText}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground text-center leading-none">
          {footerSubText}
        </div>
      </CardFooter>
    </Card>
  )
}
