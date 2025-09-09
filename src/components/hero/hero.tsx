"use client";

import React from "react";
import HeaderSearch from "./headerSearch";

const header = () => {
  const gridBackgroundStyle = {
    backgroundImage: `
        linear-gradient(to right,oklch(0.4459 0.125673 249.833) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 20% 20%, oklch(0.4459 0.125673 249.833), transparent),
        radial-gradient(circle 500px at 80% 80%, oklch(0.4459 0.125673 249.833), transparent)
      `,
    backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
  };
  return (
    <section
      className="flex flex-col gap-4 items-center justify-center min-h-screen bg-background relative"
      style={{
        background: ` linear-gradient(to right, oklch(0.4459 0.125673 249.833) 1px, transparent 1px),
        linear-gradient(to bottom, oklch(0.4459 0.125673 249.833) 1px, transparent 1px),
        radial-gradient(circle 500px at 20% 20%, oklch(0.4459 0.125673 249.833), transparent),
        radial-gradient(circle 500px at 80% 80%, oklch(0.4459 0.125673 249.833), transparent),
        url('/background/skyline.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="inset-0 absolute pointer-events-none bg opacity-10"
        style={gridBackgroundStyle}
      />
      <div className="space-y-4 relative z-10">
        <h1 className=" text-center text-4xl  md:text-6xl font-bold xl:leading-[1.5] p-4 text-white">
          Find Your Next
          <span className="px-2 text-primary">Commercial Real Estate</span>
          <br />
          Opportunity
        </h1>

        <p className="text-center text-xl md:text-2xl font-normal md:p-6 p-4 text-white">
          Powering CRE professionals with real-time listings, vendor
          directories, and headline news.
        </p>
      </div>
      <div className="p-4 lg:p-0 mt-12 max-w-6xl w-full relative z-10">
        <HeaderSearch />
      </div>
    </section>
  );
};

export default header;
