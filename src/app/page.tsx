import { AppAreaChart } from "@/components/AppAreaChart"
import AppBarChart from "@/components/AppBarChart"
import Appradialchart from "@/components/Appradialchart"
import CardList from "@/components/Cardlist"
import Cardlist from "@/components/Cardlist"
import { ChartRadarDots }  from "@/components/ChartRadarDots"
import { ChartConfig } from "@/components/ui/chart"
import { SectionCards } from "@/components/ui/sectioncard"

export type TrendType = "up" | "down"

/* ---------------- BAR CHART DATA ---------------- */
const BarchartTitle = [
  "Types of Cyber Attacks"
]
const BarchartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const BarchartConfig = {
  desktop: {
    label: "Enterprise Network Attacks",
    color: "#dc2626",
  },
  mobile: {
    label: "Mobile / Endpoint Attacks",
    color: "#f97316",
  },
} satisfies ChartConfig

/* ---------------- SECTION CARDS DATA (PLAIN OBJECTS ONLY) ---------------- */

const securityStatsCards = [
  {
    id: 1,
    description: "Total Threat Detections",
    value: "$ 12,450",
    trend: {
      type: "up",
      percentage: "+14.2%",
    },
    highlight: "Reduction in high-severity incidents",
    subtext: "Improved mitigation and response effectiveness",
  },
  {
    id: 2,
    description: "Protected Endpoints",
    value: "$ 45,678",
    trend: {
      type: "down",
      percentage: "-11.9%",
    },
    highlight: "Expanded endpoint security coverage",
    subtext: "Devices actively monitored by SOC tools",
  },
]
// area chart data and config can be added here similarly
const chartData = [
  { month: "January", desktop: 340, mobile: 160 },
  { month: "February", desktop: 420, mobile: 210 },
  { month: "March", desktop: 610, mobile: 290 },
  { month: "April", desktop: 560, mobile: 270 },
  { month: "May", desktop: 720, mobile: 330 },
  { month: "June", desktop: 810, mobile: 380 },
]

const chartConfig = {
  desktop: {
    label: "Network & Server Attacks",
    color: "#dc2626",
  },
  mobile: {
    label: "Endpoint & Mobile Attacks",
    color: "#f97316",
  },
} satisfies ChartConfig
// radial chart data and config can be added here similarly
const threatData = [
  { browser: "malware", visitors: 320, fill: "#FFD41D" },
  { browser: "phishing", visitors: 280, fill: "#FFA240" },
  { browser: "ransomware", visitors: 210, fill: "#D73535" },
  { browser: "ddos", visitors: 190, fill: "#41644A" },
  { browser: "insider", visitors: 120, fill: "#FF4646" },
]

const threatConfig = {
  visitors: { label: "Detected Incidents" },
  malware: { label: "Malware", color: "#FFD41D" },
  phishing: { label: "Phishing", color: "#FFA240" },
  ransomware: { label: "Ransomware", color: "#D73535" },
  ddos: { label: "DDoS Attacks", color: "#41644A" },
  insider: { label: "Insider Threats", color: "#FF4646" },
} satisfies ChartConfig
// radar data and config can be added here similarly
const radarDotsData = [
  { month: "Malware", desktop: 78 },
  { month: "Phishing", desktop: 65 },
  { month: "DDoS", desktop: 52 },
  { month: "Insider Threats", desktop: 48 },
  { month: "Ransomware", desktop: 70 },
  { month: "Zero-Day Exploits", desktop: 60 },
]

const radarDotsConfig = {
  desktop: {
    label: "Threat Severity",
    color: "#f97316",
  },
} satisfies ChartConfig
// card list data and config can be added here similarly which use image 
const popularContent = [ { id: 1, title: "Malware Infections", badge: "Critical", image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=600", count: 4300, }, { id: 2, title: "Phishing Attempts", badge: "High Risk", image: "https://images.pexels.com/photos/5380654/pexels-photo-5380654.jpeg?auto=compress&cs=tinysrgb&w=600", count: 5100, }, { id: 3, title: "Ransomware Alerts", badge: "Severe", image: "https://images.pexels.com/photos/5380661/pexels-photo-5380661.jpeg?auto=compress&cs=tinysrgb&w=600", count: 2900, } ]; const latestTransition = [ { id: 1, title: "Zero-Day Exploit Detected", badge: "Urgent", image: "https://images.pexels.com/photos/5380659/pexels-photo-5380659.jpeg?auto=compress&cs=tinysrgb&w=600", count: 5200, }, { id: 2, title: "Suspicious Login Attempts", badge: "Auth", image: "https://images.pexels.com/photos/5380640/pexels-photo-5380640.jpeg?auto=compress&cs=tinysrgb&w=600", count: 4500, }, { id: 3, title: "API Abuse Activity", badge: "Backend", image: "https://images.pexels.com/photos/5380651/pexels-photo-5380651.jpeg?auto=compress&cs=tinysrgb&w=600", count: 5700, } ];

/* ---------------- PAGE ---------------- */

export default function Page() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart
          BarchartTitle={BarchartTitle}
          BarchartData={BarchartData}
          BarchartConfig={BarchartConfig}
        />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList
            title="Latest Security Events"
            items={latestTransition}
          />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <ChartRadarDots
                title="Threat Severity Distribution"
                description="Analysis of cyber threat intensity across major attack vectors"
                chartData={radarDotsData}
                chartConfig={radarDotsConfig}
                footerText="Elevated risk detected"
                footerSubText="Last 30 Days · Security Operations Center (SOC)"
              />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <SectionCards cards={securityStatsCards} />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart  title="Cyber Attack Volume Trend"
                description="Visualization of detected cyber incidents over time, comparing network-level attacks with endpoint threats."
                chartData={chartData}
                chartConfig={chartConfig}
                footerText="Attack frequency increased due to phishing and malware"
                footerSubText="January – June 2024 · SOC Monitoring Window" />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <Appradialchart
              title="Threat Type Distribution"
              description="Breakdown of detected cyber incidents by attack category"
              chartData={threatData}
              chartConfig={threatConfig}
              footerText="Malware and phishing remain the most dominant attack vectors"
              footerSubText="January – June 2024 · SOC Incident Analysis"
            />
      </div>
    </div>
  )
}
