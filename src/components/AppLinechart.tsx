"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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

type LineConfig = {
  dataKey: string
  strokeVar: string
}

type LineChartData = Record<string, string | number>

type AppLineChartProps = {
  title: string
  description: string
  chartData: LineChartData[]
  chartConfig: ChartConfig
  xKey?: string
  lines: LineConfig[]
  footerText: string
  footerSubText: string
}

/* -------------------- COMPONENT -------------------- */

export function AppLineChart({
  title,
  description,
  chartData,
  chartConfig,
  xKey = "month",
  lines,
  footerText,
  footerSubText,
}: AppLineChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
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

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            {lines.map((line) => (
              <Line
                key={line.dataKey}
                dataKey={line.dataKey}
                type="monotone"
                stroke={`var(--color-${line.strokeVar})`}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
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
