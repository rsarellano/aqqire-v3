import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { Star } from "lucide-react";
import { Property } from "@/types/property";

const TrendPropertyCard = ({ property }: { property: Property }) => {
  return (
    <Card
      key={property.id}
      className="bg-transparent flex flex-col col-span-1 border-transparent rounded-xl py-2 gap-2 shadow-none grow aspect-square min-w-[300px]"
    >
      <CardHeader className="relative w-full grow rouned-xl mb-0 min-h-44">
        <Image
          src="/background/skyline.jpg"
          fill
          alt={property.name + "property"}
          className="rounded-xl"
        />

        <div className="absolute top-2 right-2">
          <Button className="!py-0 !px-0 bg-transparent hover:bg-transparent cursor-pointer hover:text-blue-500">
            <Star className="size-6" />
          </Button>
        </div>

        <div className="absolute bottom-2 right-2 text-white text-sm">
          ${Number(property.price).toLocaleString("en-us")}
        </div>
      </CardHeader>

      <CardContent className="px-2">
        <h3 className="text-sm">{property.name}</h3>
        <p className="text-xs text-accent-foreground">
          {property.city}, {property.state}
        </p>
      </CardContent>
    </Card>
  );
};

export default TrendPropertyCard;
