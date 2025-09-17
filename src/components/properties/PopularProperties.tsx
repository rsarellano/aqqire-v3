import React from "react";
import PopularPropertiesCard from "../cards/PopularPropertiesCard";
import { searchProperties } from "@/actions/searchProperties";

const PopularProperties = async () => {
  const properties = await searchProperties();
  return (
    <section className="p-6 md:p-16 flex flex-col gap-4 items-center justify-center">
      <h3 className="text-center text-2xl md:text-4xl xl:text-6xl font-semibold text-accent-foreground">
        Popular Properties
      </h3>
      <div className="container mx-auto gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {properties.slice(0, 3).map((property) => (
          <PopularPropertiesCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default PopularProperties;
