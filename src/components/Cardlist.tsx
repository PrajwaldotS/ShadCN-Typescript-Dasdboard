import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";

const popularContent = [
  {
    id: 1,
    title: "Malware Infections",
    badge: "Critical",
    image:
      "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 4300,
  },
  {
    id: 2,
    title: "Phishing Attempts",
    badge: "High Risk",
    image:
      "https://images.pexels.com/photos/5380654/pexels-photo-5380654.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 5100,
  },
  {
    id: 3,
    title: "Ransomware Alerts",
    badge: "Severe",
    image:
      "https://images.pexels.com/photos/5380661/pexels-photo-5380661.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 2900,
  }
];

const latestTransition = [
  {
    id: 1,
    title: "Zero-Day Exploit Detected",
    badge: "Urgent",
    image:
      "https://images.pexels.com/photos/5380659/pexels-photo-5380659.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 5200,
  },
  {
    id: 2,
    title: "Suspicious Login Attempts",
    badge: "Auth",
    image:
      "https://images.pexels.com/photos/5380640/pexels-photo-5380640.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 4500,
  },
  {
    id: 3,
    title: "API Abuse Activity",
    badge: "Backend",
    image:
      "https://images.pexels.com/photos/5380651/pexels-photo-5380651.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 5700,
  }
];


const Cardlist = ({ title }: {title:string}) => {
    const list = title.toLowerCase() === "popularContent" ? popularContent : latestTransition
  return (
    <div >
      <h1 className='text-lg font-medium mb-6'>{title}</h1>
      <div className="flex flex-col gap-2">
        {list.map(item=>(
            <Card key={item.id} className="flex flex-row items-center justify-between gap-4 p-4">
                <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                   <img src={item.image} alt={item.title}  />
                </div>
                <CardContent className="p-0 flex-1 ">
                    <CardTitle className="text-[15px] font-medium">{item.title}</CardTitle>
                    <Badge variant="secondary">{item.title}</Badge>
                    
                </CardContent>
                <CardFooter>
                    {item.count/1000}K
                </CardFooter>
            </Card>
        ))}
      </div>
    </div>
  )
}

export default Cardlist
