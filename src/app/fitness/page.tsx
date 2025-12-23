import { AppAreaChart } from "@/components/AppAreaChart"
import AppBarChart from "@/components/AppBarChart"
import Appradialchart from "@/components/Appradialchart"
import CardList from "@/components/Cardlist"
import Cardlist from "@/components/Cardlist"
import { ChartRadarDots }   from "@/components/ChartRadarDots"
import { ChartConfig } from "@/components/ui/chart"
import { SectionCards } from "@/components/ui/sectioncard"

export type TrendType = "up" | "down"

/* ---------------- BAR CHART DATA ---------------- */
/* Workout type comparison */
const BarchartTitle = [
  "Workout Type Comparison"
]
const BarchartData = [
  { month: "January", desktop: 42, mobile: 28 },
  { month: "February", desktop: 55, mobile: 36 },
  { month: "March", desktop: 63, mobile: 41 },
  { month: "April", desktop: 58, mobile: 39 },
  { month: "May", desktop: 71, mobile: 46 },
  { month: "June", desktop: 78, mobile: 52 },
]

const BarchartConfig = {
  desktop: {
    label: "Strength Training Sessions",
    color: "#e76f51", // green
  },
  mobile: {
    label: "Cardio Sessions",
    color: "#f4a261", // blue
  },
} satisfies ChartConfig

/* ---------------- SECTION CARDS DATA ---------------- */

const securityStatsCards = [
  {
    id: 1,
    description: "Total Workouts Completed",
    value: "1,248",
    trend: {
      type: "up",
      percentage: "+9.6%",
    },
    highlight: "Increase in overall workout consistency",
    subtext: "Users maintained regular training schedules",
  },
  {
    id: 2,
    description: "Calories Burned",
    value: "45,678 kcal",
    trend: {
      type: "up",
      percentage: "+11.9%",
    },
    highlight: "Higher training intensity recorded",
    subtext: "Improved endurance and strength sessions",
  },
]

/* ---------------- AREA CHART DATA ---------------- */
/* Calories burned trend */

const chartData = [
  { month: "monday", desktop: 320, mobile: 180 },
  { month: "tuesday", desktop: 380, mobile: 210 },
  { month: "wednesday", desktop: 450, mobile: 260 },
  { month: "thursday", desktop: 420, mobile: 240 },
  { month: "friday", desktop: 510, mobile: 290 },
  { month: "saturday", desktop: 560, mobile: 320 },
  { month: "sunday", desktop: 560, mobile: 320 },
]

const chartConfig = {
  desktop: {
    label: "Calories Burned (Strength)",
    color: "#e76f51",
  },
  mobile: {
    label: "Calories Burned (Cardio)",
    color: "#e9c46a",
  },
} satisfies ChartConfig

/* ---------------- RADIAL CHART DATA ---------------- */
/* Workout distribution */

const threatData = [
  { browser: "strength", visitors: 320, fill: "#e76f51" },
  { browser: "cardio", visitors: 280, fill: "#f4a261" },
  { browser: "hiit", visitors: 210, fill: "#e9c46a" },
  { browser: "yoga", visitors: 190, fill: "#2a9d8f" },
  { browser: "stretching", visitors: 120, fill: "#264653" },
]

const threatConfig = {
  visitors: { label: "Workout Sessions" },
  strength: { label: "Strength", color: "#e76f51" },
  cardio: { label: "Cardio", color: "#f4a261" },
  hiit: { label: "HIIT", color: "#e9c46a" },
  yoga: { label: "Yoga", color: "#2a9d8f" },
  stretching: { label: "Stretching", color: "#264653" },
} satisfies ChartConfig
// radar dots chart data and config can be added here similarly
const radarDotsData = [
  { month: "Strength Training", desktop: 82 },
  { month: "Cardio", desktop: 68 },
  { month: "HIIT", desktop: 75 },
  { month: "Yoga", desktop: 54 },
  { month: "Core Workout", desktop: 70 },
  { month: "Stretching", desktop: 46 },
];
const radarDotsConfig = {
  desktop: {
    label: "Workout Intensity Score",
    color: "#2a9d8f", // fitness-friendly teal
  },
} satisfies ChartConfig;
// section card detail with image wala data can be added here similarly
const popularContent = [
  {
    id: 1,
    title: "Strength Training Sessions",
    badge: "High Intensity",
    image:
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 4300,
  },
  {
    id: 2,
    title: "Cardio Workouts",
    badge: "Endurance",
    image:
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 5100,
  },
  {
    id: 3,
    title: "HIIT Training",
    badge: "Intense",
    image:
      "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 2900,
  },
];
const latestTransition = [
  {
    id: 1,
    title: "Morning Cardio Session",
    badge: "Cardio",
    image:
      "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 5200,
  },
  {
    id: 2,
    title: "Core Strength Workout",
    badge: "Strength",
    image:
      "https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 4500,
  },
  {
    id: 3,
    title: "Yoga & Recovery Session",
    badge: "Recovery",
    image:
      "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 5700,
  },
];



/* ---------------- PAGE ---------------- */

export default function Page() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-4">
      
      {/* KPI Cards */}
      <div className="bg-primary-foreground p-4 rounded-lg">
        <SectionCards cards={securityStatsCards} />
      </div>

      {/* Area Chart */}
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart
          title="Calorie Burn Trend"
          description="Monthly comparison of calories burned through strength training and cardio workouts."
          chartData={chartData}
          chartConfig={chartConfig}
          footerText="Consistent increase driven by regular workouts"
          footerSubText="January – June 2024 · Fitness Activity Overview"
        />
      </div>

      {/* Radar Chart */}
      <div className="bg-primary-foreground p-4 rounded-lg">
       <ChartRadarDots
            title="Workout Intensity Distribution"
            description="Analysis of training intensity across different workout types"
            chartData={radarDotsData}
            chartConfig={radarDotsConfig}
            footerText="High intensity sessions increased this period"
            footerSubText="Last 30 Days · Fitness Activity Summary"
          />

      </div>

      {/* Radial Chart */}
      <div className="bg-primary-foreground p-4 rounded-lg">
        <Appradialchart
          title="Workout Type Distribution"
          description="Breakdown of workout sessions by training category"
          chartData={threatData}
          chartConfig={threatConfig}
          footerText="Strength and cardio workouts dominate training routines"
          footerSubText="January – June 2024 · Fitness Tracker Analysis"
        />
      </div>

     

      {/* Activity List */}
      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList
            title="Latest Security Events"
            items={latestTransition}
          />
      </div>
       {/* Bar Chart */}
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart
          BarchartTitle={BarchartTitle}
          BarchartData={BarchartData}
          BarchartConfig={BarchartConfig}
        />
      </div>

    </div>
  )
}
