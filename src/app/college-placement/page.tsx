import { AppAreaChart } from "@/components/AppAreaChart"
import Appradialchart from "@/components/Appradialchart"
import { SectionCards } from "@/components/ui/sectioncard"
import {  Sidebarchart } from "@/components/Sidebarchart"
import { AppPieChart } from "@/components/AppPiechart"
import { ChartConfig } from "@/components/ui/chart"

// bar chart data and config
const placementData = [
  { department: "CSE", placed: 186 },
  { department: "ISE", placed: 305 },
  { department: "ECE", placed: 237 },
  { department: "EEE", placed: 173 },
  { department: "ME", placed: 209 },
  { department: "CE", placed: 154 },
]

const placementConfig = {
  placed: {
    label: "Students Placed",
    color: "#16a34a",
  },
  label: {
    color: "var(--background)",
  },
} satisfies ChartConfig
/* ---------------- SECTION CARD DATA (PLAIN OBJECTS ONLY) ---------------- */

export const placementStatsCards = [
  {
    id: 1,
    description: "Total Students Placed",
    value: "1,248",
    trend: {
      type: "up",
      percentage: "+9.6%",
    },
    highlight: "Increase in overall placement rate",
    subtext: "More students secured offers across all departments",
  },
  {
    id: 2,
    description: "Highest Package Offered",
    value: "₹ 28 LPA",
    trend: {
      type: "up",
      percentage: "+12.4%",
    },
    highlight: "New record package this academic year",
    subtext: "Top offers from product-based and MNC companies",
  },
  {
    id: 3,
    description: "Students Still Unplaced",
    value: "312",
    trend: {
      type: "down",
      percentage: "-6.8%",
    },
    highlight: "Reduction in unplaced student count",
    subtext: "Improved training and pre-placement preparation",
  },
]
// area chart data and config
const chartData = [
  { month: "January", desktop: 34, mobile: 16 },
  { month: "February", desktop: 42, mobile: 21 },
  { month: "March", desktop: 61, mobile: 29 },
  { month: "April", desktop: 56, mobile: 27 },
  { month: "May", desktop: 72, mobile: 33 },
  { month: "June", desktop: 81, mobile: 38 },
  
];
const chartConfig = {
  desktop: {
    label: "On-Campus Placements",
    color: "#16a34a", // green (success)
  },
  mobile: {
    label: "Off-Campus Placements",
    color: "#2563eb", // blue
  },
} satisfies ChartConfig;
// pie chart data and config can be added here similarly
const pieData = [
  { browser: "Placed", visitors: 275, fill: "#020a58" },
  { browser: "Unplaced", visitors: 200, fill: "#cf322f" },
  { browser: "Internship", visitors: 287, fill: "#f26113" },
  { browser: "Probation", visitors: 170, fill: "#ffc61b" },
  { browser: "Others", visitors: 190, fill: "#16a34a" },
];

const pieConfig = {
  visitors: { label: "Offers" },
  it: { label: "IT Services", color: "var(--chart-1)" },
  product: { label: "Product Companies", color: "var(--chart-2)" },
  core: { label: "Core Engineering", color: "var(--chart-3)" },
  service: { label: "Service-Based", color: "var(--chart-4)" },
  others: { label: "Others", color: "var(--chart-5)" },
} satisfies ChartConfig;
// radial chart data and config can be added here similarly
const placementRaidalData = [
  { browser: "placed", visitors: 320, fill: "#020a58" },
  { browser: "internship", visitors: 280, fill: "#cf322f" },
  { browser: "unplaced", visitors: 210, fill: "#f26113" },
  { browser: "higherStudies", visitors: 190, fill: "#ffc61b" },
  { browser: "probation", visitors: 120, fill: "#16a34a" },
];
const placementRaidalConfig = {
  visitors: { label: "Students" },
  placed: { label: "Placed", color: "#22c55e" },
  internship: { label: "Internship", color: "#3b82f6" },
  unplaced: { label: "Unplaced", color: "#f97316" },
  higherStudies: { label: "Higher Studies", color: "#8b5cf6" },
  probation: { label: "Probation", color: "#ef4444" },
} satisfies ChartConfig;


/* ---------------- PAGE ---------------- */

export default function Page() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 ">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2">
        
         <SectionCards cards={placementStatsCards} />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-3">
        <Sidebarchart
            title="Department-wise Students Placed"
            description="Current Academic Year"
            chartData={placementData}
            chartConfig={placementConfig}
            footerText="Placement performance remains strong"
            footerSubText="Current Academic Year · Placement Office Data"
          />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-4">
       <AppAreaChart
              title="Monthly Placement Trend"
              description="Visualization of student placements over time, comparing on-campus and off-campus recruitment outcomes."
              chartData={chartData}
              chartConfig={chartConfig}
              footerText="Steady increase in placements driven by core company recruitment drives"
              footerSubText="January – June · Current Academic Year"
            />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg ">
        <AppPieChart
              title="Placement Offers Distribution"
              description="Current Academic Year"
              chartData={pieData}
              chartConfig={pieConfig}
              centerLabel="Offers"
              footerText="Increase in offers driven by IT and product-based companies"
              footerSubText="Distribution of placement offers across industry sectors"
            />
        <Appradialchart
                title="Student Placement Status Distribution"
                description="Breakdown of students based on current placement outcomes"
                chartData={placementRaidalData}
                chartConfig={placementRaidalConfig}
                footerText="Majority of students secured full-time or internship opportunities"
                footerSubText="Current Academic Year · Placement Cell Analysis"
              />

        
      </div>
      

      
     

      
    </div>
  )
}
