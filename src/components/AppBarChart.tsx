"use client";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "./ui/chart";
type BarChartDataItem = {
  month: string
  desktop: number
  mobile: number
}

type AppBarChartProps = {
  BarchartTitle: string
  BarchartData: BarChartDataItem[]
  BarchartConfig: ChartConfig
}

const AppBarChart = ({
  BarchartTitle,
  BarchartData,
  BarchartConfig,
}: AppBarChartProps) => {

  return (
    <div className="AppBarChart">
        <h1 className="text-lg font-bold text-center mb-5">{BarchartTitle}</h1>
    <ChartContainer config={BarchartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={BarchartData}>
         <CartesianGrid vertical={false} />
         <XAxis
      dataKey="month"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 3)}
    />
    <YAxis
     
      tickLine={false}
      tickMargin={10}
      axisLine={false}
     
    /> 
      <ChartTooltip content={<ChartTooltipContent />} />
      <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
    </div>
  )
}

export default AppBarChart
