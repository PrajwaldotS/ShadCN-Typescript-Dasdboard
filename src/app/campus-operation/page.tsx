import { AppLineChart } from '@/components/AppLinechart'
import { AppRadialTextChart} from '@/components/AppRadialText'
import { AppRadarChart } from '@/components/AppRadarChart'
import { ChartConfig } from '@/components/ui/chart'
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { AppStepChart } from '@/components/AppStepChart'
// card detaails
const campusOperationCards = [
  {
    id: 1,
    description: "Total Energy Consumption",
    value: "1.92 MWh",
    trendType: "down",
    percentage: "-7.4%",
    highlight: "Reduction in overall energy usage",
    subtext: "Energy efficiency improved across academic and residential blocks",
  },
  {
    id: 2,
    description: "Campus Utilization Rate",
    value: "84%",
    trendType: "up",
    percentage: "+5.1%",
    highlight: "Improved classroom and lab occupancy",
    subtext: "Optimized timetables increased facility utilization",
  },
  {
    id: 3,
    description: "Pending Maintenance Requests",
    value: "38",
    trendType: "down",
    percentage: "-11.6%",
    highlight: "Faster resolution of maintenance issues",
    subtext: "Preventive maintenance reduced repeat complaints",
  },
];
// line chart data 
const lineData = [
  { month: "January", desktop: 420, mobile: 310 },
  { month: "February", desktop: 460, mobile: 330 },
  { month: "March", desktop: 520, mobile: 370 },
  { month: "April", desktop: 500, mobile: 360 },
  { month: "May", desktop: 580, mobile: 410 },
  { month: "June", desktop: 630, mobile: 450 },
];


const lineConfig = {
  desktop: {
    label: "Electricity Consumption",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Water Consumption",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;
// radial chart data
const radialTextData = [
  { browser: "utilization", visitors: 84, fill: "var(--color-safari)" },
]

const radialTextConfig = {
  visitors: { label: "Utilization %" },
  safari: { label: "Campus Utilization", color: "var(--chart-2)" },
} satisfies ChartConfig;
// radar chart data
const radarData = [
  { month: "Energy Efficiency", desktop: 86 },
  { month: "Water Management", desktop: 85 },
  { month: "Classroom Utilization", desktop: 37 },
  { month: "Lab Availability", desktop: 3 },
  { month: "Maintenance Response", desktop: 9 },
  { month: "Safety Compliance", desktop: 64 },
]

const radarConfig = {
  desktop: {
    label: "Performance Metrics",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig
// step chart data
const stepData = [
  { month: "January", desktop: 42 },
  { month: "February", desktop: 58 },
  { month: "March", desktop: 73 },
  { month: "April", desktop: 61 },
  { month: "May", desktop: 48 },
  { month: "June", desktop: 26 },
];
const stepConfig = {
  desktop: {
    label: "Resolved Maintenance Requests",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

// main page component
const page = () => {
  return (
    <div >
<div className="grid bg-primary-foreground p-4 m-2 rounded-lg gap-4 px-4 lg:px-6 lg:grid-cols-3 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">

  {campusOperationCards.map((card) => {
    const TrendIcon = card.trendType === "up" ? TrendingUp : TrendingDown

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
              {card.percentage}
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


       <div className='grid lg:grid-cols-6 grid-rows-[220px] gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-3'>
        <div className='lg:col-span-4 col-span-6 row-span-2 bg-primary-foreground p-4 rounded-lg '><AppLineChart
                title="Campus Resource Consumption Trend"
                description="January – June 2024"
                chartData={lineData}
                chartConfig={lineConfig}
                lines={[
                  { dataKey: "desktop", strokeVar: "desktop" },
                  { dataKey: "mobile", strokeVar: "mobile" },
                ]}
                footerText="Resource usage increased during peak academic months"
                footerSubText="Electricity and water consumption across campus facilities"
              /></div>
        <div className='lg:col-span-2 col-span-6 row-span-2 bg-primary-foreground p-4 rounded-lg '><AppRadialTextChart
              title="Campus Utilization Rate"
              description="January – June 2024"
              chartData={radialTextData}
              chartConfig={radialTextConfig}
              centerLabel="Utilization"
              footerText="Improved space usage across classrooms and laboratories"
              footerSubText="Average utilization rate during active academic months"
            /></div>
        <div className='lg:col-span-2 col-span-6 row-span-2 bg-primary-foreground p-4 rounded-lg '><AppRadarChart
              title="Campus Operations Performance"
              description="Comparison of key operational metrics across campus facilities"
              chartData={radarData}
              chartConfig={radarConfig}
              footerText="Overall operational efficiency improved this semester"
              footerSubText="Performance scores based on internal facility audits"
            /></div>
        <div className='lg:col-span-4 col-span-6 row-span-4 bg-primary-foreground p-4 rounded-lg '><AppStepChart
                title="Maintenance Resolution Progress"
                description="Step-wise increase in resolved maintenance requests over time"
                chartData={stepData}
                chartConfig={stepConfig}
                footerText="Consistent improvement in maintenance turnaround efficiency"
                footerSubText="January – June 2024 · Campus Facilities Management"
              />
          </div>

       </div>
        
    </div>
  )
}

export default page
