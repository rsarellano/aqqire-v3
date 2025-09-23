import React from "react";
import PropertiesHeader from "@/components/properties/propertiesHeader";
import Featuredproperties from "@/components/properties/featuredproperties";

const page = () => {
  return (
    <div className="container">
      <PropertiesHeader />
      <Featuredproperties />
    </div>
  );
};

export default page;
