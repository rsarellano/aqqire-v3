import SearchPropertyCard from "../cards/SearchPropertyCard";
import SearchPropertyCardSkeleton from "../cards/SearchPropertyCardSkeleton";

const PropertiesResultSkeleton = () => {
  const properties = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-12 p-4">
      {properties.map((property) => (
        <SearchPropertyCardSkeleton key={property} />
      ))}
    </div>
  );
};

export default PropertiesResultSkeleton;
