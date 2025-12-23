"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

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

type PieChartData = Record<string, string | number>

type AppPieChartProps = {
  title: string
  description: string
  chartData: PieChartData[]
  chartConfig: ChartConfig
  centerLabel: string
  footerText: string
  footerSubText: string
  valueKey?: string
  nameKey?: string
  innerRadius?: number
}

/* -------------------- COMPONENT -------------------- */

export function AppPieChart({
  title,
  description,
  chartData,
  chartConfig,
  centerLabel,
  footerText,
  footerSubText,
  valueKey = "visitors",
  nameKey = "browser",
  innerRadius = 60,
}: AppPieChartProps) {
  const totalValue = React.useMemo(() => {
    return chartData.reduce(
      (acc, curr) => acc + Number(curr[valueKey] ?? 0),
      0
    )
  }, [chartData, valueKey])

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
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Pie
              data={chartData}
              dataKey={valueKey}
              nameKey={nameKey}
              innerRadius={innerRadius}
              strokeWidth={5}
            >
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
                        className="fill-foreground text-3xl font-bold"
                      >
                        {totalValue.toLocaleString()}
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
            </Pie>
          </PieChart>
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
