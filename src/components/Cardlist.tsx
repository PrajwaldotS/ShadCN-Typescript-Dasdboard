import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";

const popularContent = [
  {
    id: 1,
    title: "JavaScript Tutorial",
    badge: "Coding",
    image:
      "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 4300,
  },
  {
    id: 2,
    title: "React Beginner Guide",
    badge: "Frontend",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 5100,
  },
  {
    id: 3,
    title: "Node.js Crash Course",
    badge: "Backend",
    image:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 2900,
  },
  {
    id: 4,
    title: "Full Stack Roadmap",
    badge: "Career",
    image:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 7200,
  }
  
];
const latestTransition = [
  {
    id: 1,
    title: "React Animation Effects",
    badge: "Transition",
    image:
      "https://images.pexels.com/photos/3194512/pexels-photo-3194512.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 5200,
  },
  {
    id: 2,
    title: "CSS Hover Magic",
    badge: "CSS",
    image:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 4500,
  },
  {
    id: 3,
    title: "Next.js Page Transitions",
    badge: "Next.js",
    image:
      "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 5700,
  },
  {
    id: 4,
    title: "Framer Motion Basics",
    badge: "Animation",
    image:
      "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 6200,
  }
];


const Cardlist = ({ title }: {title:string}) => {
    const list = title.toLowerCase() === "popularContent" ? popularContent : latestTransition
  return (
    <div>
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
