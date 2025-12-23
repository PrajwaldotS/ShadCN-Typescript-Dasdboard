"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

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

type SidebarChartData = Record<string, string | number>

type SidebarChartProps = {
  title: string
  description: string
  chartData: SidebarChartData[]
  chartConfig: ChartConfig
  categoryKey?: string
  valueKey?: string
  footerText: string
  footerSubText: string
}

/* -------------------- COMPONENT -------------------- */

export function Sidebarchart({
  title,
  description,
  chartData,
  chartConfig,
  categoryKey = "department",
  valueKey = "placed",
  footerText,
  footerSubText,
}: SidebarChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{ right: 16 }}
          >
            <CartesianGrid horizontal={false} />

            <YAxis
              dataKey={categoryKey}
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              hide
            />

            <XAxis dataKey={valueKey} type="number" hide />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />

            <Bar
              dataKey={valueKey}
              layout="vertical"
              fill={`var(--color-${valueKey})`}
              radius={4}
            >
              <LabelList
                dataKey={categoryKey}
                position="insideLeft"
                offset={8}
                className="fill-(--color-label)"
                fontSize={12}
              />
              <LabelList
                dataKey={valueKey}
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
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
