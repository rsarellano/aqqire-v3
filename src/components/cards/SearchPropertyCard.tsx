import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { Property } from "@/types/property";
import { FaLocationDot } from "react-icons/fa6";
const SearchPropertyCard = ({ property }: { property: Property }) => {
  return (
    <Card
      key={property.id}
      className="col-span-1 py-0 pb-2 overflow-hidden gap-3 min-h-84"
    >
      <CardHeader className="relative size-full min-h-45  overflow-hidden p-0">
        <div className="w-full h-">
          <Image
            src="/background/skyline.jpg"
            alt="Property Image"
            fill
            className="size-full"
          />
        </div>
      </CardHeader>

      <CardContent className="p-6 py-0">
        <div className="flex justify-between gap-2">
          <div className="flex gap-1 items-center ">
            <FaLocationDot className="p-0" size={16} />
            <p className="text-xs">
              {property.city}, {property.state}
            </p>
          </div>
          <p className=" text-main font-bold ">
            ${Number(property.price).toLocaleString("en-us")}
          </p>
        </div>

        <p className=" font-bold py-2">{property.name}</p>

        <div className="flex justify-between">
          <p className="text-xs py-3">Number of Rooms: {property.id}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchPropertyCard;
