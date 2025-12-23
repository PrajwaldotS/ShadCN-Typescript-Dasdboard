"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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

type StepChartData = Record<string, string | number>

type AppStepChartProps = {
  title: string
  description: string
  chartData: StepChartData[]
  chartConfig: ChartConfig
  xKey?: string
  areaKey?: string
  footerText: string
  footerSubText: string
}

/* -------------------- COMPONENT -------------------- */

export function AppStepChart({
  title,
  description,
  chartData,
  chartConfig,
  xKey = "month",
  areaKey = "desktop",
  footerText,
  footerSubText,
}: AppStepChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey={xKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) =>
                typeof value === "string" ? value.slice(0, 3) : value
              }
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Area
              dataKey={areaKey}
              type="step"
              fill={`var(--color-${areaKey})`}
              fillOpacity={0.4}
              stroke={`var(--color-${areaKey})`}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>

      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              {footerText}
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground leading-none">
              {footerSubText}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
