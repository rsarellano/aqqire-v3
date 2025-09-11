import { Property } from "@/types/property";
import SearchPropertyCard from "../cards/SearchPropertyCard";

const PropertiesResult = ({ results }: { results: Property[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-12 p-4">
      {results.map((property) => (
        <SearchPropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertiesResult;
