import TrendPropertyCard from "@/components/cards/TrendPropertyCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Property } from "@/types/property";

const SimilarProperties = ({ name }: { name: string }) => {
  const properties: Property[] = [
    {
      id: "1",
      name: "Sunset Villa",
      price: "$500,000",
      city: "Los Angeles",
      state: "CA",
    },
    {
      id: "2",
      name: "Downtown Loft",
      price: "$350,000",
      city: "San Francisco",
      state: "CA",
    },
    {
      id: "3",
      name: "Lakeside Cottage",
      price: "$420,000",
      city: "Austin",
      state: "TX",
    },
    {
      id: "4",
      name: "Mountain Retreat",
      price: "$600,000",
      city: "Denver",
      state: "CO",
    },
    {
      id: "5",
      name: "Urban Oasis",
      price: "$480,000",
      city: "Seattle",
      state: "WA",
    },
    {
      id: "6",
      name: "Beachfront Bungalow",
      price: "$750,000",
      city: "Miami",
      state: "FL",
    },
    {
      id: "7",
      name: "Historic Mansion",
      price: "$1,200,000",
      city: "Charleston",
      state: "SC",
    },
    {
      id: "8",
      name: "Suburban Home",
      price: "$390,000",
      city: "Phoenix",
      state: "AZ",
    },
    {
      id: "9",
      name: "Country Estate",
      price: "$950,000",
      city: "Nashville",
      state: "TN",
    },
    {
      id: "10",
      name: "Modern Apartment",
      price: "$320,000",
      city: "Chicago",
      state: "IL",
    },
  ];

  return (
    <section className="p-4 text-accent-foreground text-center space-y-6 md:py-16">
      <h3 className="text-2xl md:text-5xl pb-6  py-12 font-semibold">
        Similar Properties to {name}
      </h3>
      <div className="container mx-auto p-2 mb-12">
        <ScrollArea className="max-w-full mx-auto ">
          <div className="gap-4 p-4 flex grid-cols-3 mb-4">
            {properties.map((item: Property) => (
              <TrendPropertyCard property={item} key={item.name} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default SimilarProperties;
