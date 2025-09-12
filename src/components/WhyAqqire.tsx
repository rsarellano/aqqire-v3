import React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { FaStar } from "react-icons/fa6";

const WhyAqqire = () => {
  const items = [
    {
      title: "Direct Access to Investors",
      description:
        "Connect directly with qualified investors without intermediaries or unnecessary delays.",
    },
    {
      title: "Enhanced Listing Visibility",
      description:
        "Boost your property’s exposure with our targeted marketing and featured placements.",
    },
    {
      title: "Verified Leads Only",
      description:
        "Receive inquiries from vetted buyers and tenants, saving you time and effort.",
    },
    {
      title: "Seamless Communication",
      description:
        "Communicate securely and efficiently with interested parties through our platform.",
    },
    {
      title: "Data-Driven Insights",
      description:
        "Access real-time analytics to track listing performance and optimize your strategy.",
    },
    {
      title: "No Hidden Fees",
      description:
        "Transparent pricing with no surprise charges or commissions.",
    },
    {
      title: "Easy Listing Management",
      description:
        "Update, edit, or remove your listings anytime with our user-friendly dashboard.",
    },
    {
      title: "Professional Support",
      description:
        "Our expert team is available to assist you at every step of the process.",
    },
    {
      title: "Secure Transactions",
      description:
        "Benefit from secure document sharing and transaction management tools.",
    },
    {
      title: "Flexible Listing Options",
      description:
        "Choose from multiple listing packages tailored to your needs and budget.",
    },
  ];
  return (
    <section className="bg-accent p-2 md:p-12">
      <div className="container mx-auto">
        <h3 className="font-semibold text-3xl text-accent-foreground text-center">
          Why List with Aqqire
        </h3>
        <p className="text-xl text-secondary-foreground pt-2  text-center">
          Stand out in a crowded CRE market and connect directly with serious
          investors, tenants, and partners
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2  lg:grid-cols-3 gap-2 sm:gap-4 mt-12 max-w-5xl mx-auto">
          {items.map((item) => (
            <WhyAqqireItem
              title={item.title}
              description={item.description}
              key={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyAqqireItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <Card className="  md:aspect-auto py-1 md:p-4">
    <CardContent className="p-1 flex flex-col min-h-[11rem]">
      <CardHeader className="p-2 py-0 flex lg:flex-row flex-col text-sn md:text-2xl gap-4">
        <FaStar />
        <h4 className="font-semibold">{title}</h4>
      </CardHeader>
      <CardDescription className="text-xs md:text-lg p-2 py-1">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);

export default WhyAqqire;
