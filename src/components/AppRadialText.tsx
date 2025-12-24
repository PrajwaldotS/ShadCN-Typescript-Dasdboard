"use client"

import { TrendingUp } from "lucide-react"
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
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
} from "@/components/ui/card"
import {
  ChartContainer,
  type ChartConfig,
} from "@/components/ui/chart"

/* -------------------- TYPES -------------------- */

type RadialTextChartData = Record<string, string | number>

type AppRadialTextChartProps = {
  title: string
  description: string
  chartData: RadialTextChartData[]
  chartConfig: ChartConfig
  valueKey?: string
  nameKey?: string
  centerLabel: string
  startAngle?: number
  endAngle?: number
  innerRadius?: number
  outerRadius?: number
  footerText: string
  footerSubText: string
}

/* -------------------- COMPONENT -------------------- */

export function AppRadialTextChart({
  title,
  description,
  chartData,
  chartConfig,
  valueKey = "visitors",
  nameKey = "browser",
  centerLabel,
  startAngle = 0,
  endAngle = 250,
  innerRadius = 80,
  outerRadius = 110,
  footerText,
  footerSubText,
}: AppRadialTextChartProps) {
  const value =
    typeof chartData?.[0]?.[valueKey] === "number"
      ? (chartData[0][valueKey] as number)
      : 0

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
            dataKey={valueKey}
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[innerRadius + 6, innerRadius - 6]}
            />

            <RadialBar
              dataKey={valueKey}
              background
              cornerRadius={10}
            />

            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (!viewBox || !("cx" in viewBox) || !("cy" in viewBox)) {
                    return null
                  }

                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-4xl font-bold"
                      >
                        {value.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy as number) + 24}
                        className="fill-muted-foreground"
                      >
                        {centerLabel}
                      </tspan>
                    </text>
                  )
                }}
              />
            </PolarRadiusAxis>
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
