import React from "react";

const PropertiesHeader = () => {
  return (
    <div className="flex  h-[820px] ">
      <div className="w-1/2 flex flex-col">
        <div className="text-center text-[61px] font-bold w-[473px] h-[281px] p-[6px] ml-[110px] mt-[111px] position:relative">
          <span> Search Smarter. </span>
          <span className=""> Lease or Invest in</span>
          <span className="text-blue-500">Commercial Properties </span>
          <span>with Confidence</span>
        </div>
        <div className="text-center text-[22px] w-[473px] ml-[110px] mt-[180px]">
          <span>Use our interactive CRE map and smart filters to</span>
          <span>explore office ,retails, industrial and land listings in</span>
          <span>your target markets</span>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center"> right side</div>
    </div>
  );
};

export default PropertiesHeader;
