import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";

type CardItem = {
  id: number;
  title: string;
  badge: string;
  image: string;
  count: number;
};

const Cardlist = ({
  title,
  items,
}: {
  title: string;
  items: CardItem[];
}) => {
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">{title}</h1>

      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <Card
            key={item.id}
            className="flex flex-row items-center justify-between gap-4 p-4"
          >
            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
              <img src={item.image} alt={item.title} />
            </div>

            <CardContent className="p-0 flex-1 ">
              <CardTitle className="text-[15px] font-medium">
                {item.title}
              </CardTitle>

              {/* ✅ FIXED (logic only, UI unchanged) */}
              <Badge variant="secondary">{item.badge}</Badge>
            </CardContent>

            <CardFooter>
              {item.count / 1000}K
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cardlist;
