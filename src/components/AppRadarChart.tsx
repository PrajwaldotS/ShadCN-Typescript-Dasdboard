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

type RadarChartData = Record<string, string | number>

type AppRadarChartProps = {
  title: string
  description: string
  chartData: RadarChartData[]
  chartConfig: ChartConfig
  angleKey?: string
  radarKey?: string
  footerText: string
  footerSubText: string
}

/* -------------------- COMPONENT -------------------- */

export function AppRadarChart({
  title,
  description,
  chartData,
  chartConfig,
  angleKey = "month",
  radarKey = "desktop",
  footerText,
  footerSubText,
}: AppRadarChartProps) {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
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
              content={<ChartTooltipContent hideLabel />}
            />

            <PolarGrid
              className={`fill-(--color-${radarKey}) opacity-20`}
            />

            <PolarAngleAxis dataKey={angleKey} />

            <Radar
              dataKey={radarKey}
              fill={`var(--color-${radarKey})`}
              fillOpacity={0.5}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          {footerText}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          {footerSubText}
        </div>
      </CardFooter>
    </Card>
  )
}
