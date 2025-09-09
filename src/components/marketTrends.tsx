"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const marketTrends = () => {
  return (
    <section className="p-4 py-12">
      <div className="flex justify-between container mx-auto">
        <h2 className="text-4xl font-bold">Hot on the Market</h2>

        <Select>
          <SelectTrigger className="grow max-w-1/4">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light" className="cursor-pointer">
              Light
            </SelectItem>
            <SelectItem value="dark" className="cursor-pointer">
              Dark
            </SelectItem>
            <SelectItem value="system" className="cursor-pointer">
              System
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
};

export default marketTrends;
