"use client"

import { TrendingUp } from "lucide-react"
import {
  PolarGrid,
  RadialBar,
  RadialBarChart,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "./ui/chart"

/* -------------------- TYPES -------------------- */

type RadialChartData = Record<string, string | number>

type AppRadialChartProps = {
  title: string
  description: string
  chartData: RadialChartData[]
  chartConfig: ChartConfig
  valueKey?: string
  nameKey?: string
  innerRadius?: number
  outerRadius?: number
  footerText: string
  footerSubText: string
}

/* -------------------- COMPONENT -------------------- */

const Appradialchart = ({
  title,
  description,
  chartData,
  chartConfig,
  valueKey = "visitors",
  nameKey = "browser",
  innerRadius = 30,
  outerRadius = 100,
  footerText,
  footerSubText,
}: AppRadialChartProps) => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
          >
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent hideLabel nameKey={nameKey} />
              }
            />
            <PolarGrid gridType="circle" />
            <RadialBar dataKey={valueKey} />
          </RadialBarChart>
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

export default Appradialchart
