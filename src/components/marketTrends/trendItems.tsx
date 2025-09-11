import { Property } from "@/types/property";
import TrendPropertyCard from "../cards/TrendPropertyCard";

export const TrendItems = ({
  properties,
}: {
  properties: Property[] | null;
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3  gap-2 md:gap-4 mt-12 md:p-4 container mx-auto grid-rows-3">
      {properties?.map((property) => (
        <TrendPropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default TrendItems;
