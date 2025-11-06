"use client";
import { useNewsStore } from "@/store/newsStore";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useEffect } from "react";

const NewsItemsFilters = () => {
  const { setField, category, level, format, filter, reset } = useNewsStore();

  useEffect(() => {
    filter();
  }, [level, format, category]);

  return (
    <div className="space-y-4 flex flex-col  col-span-1 pr-12">
      {/* Filters */}
      <div className="flex flex-col gap-2 ">
        <Label>Category: {category}</Label>
        <Select
          name="category"
          onValueChange={(value) => setField("category", value)}
          value={category}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="trends">Market Trends</SelectItem>
              <SelectItem value="projects">Projects</SelectItem>
              <SelectItem value="etc">Etc</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label>Format: {format}</Label>
        <Select
          name="format"
          onValueChange={(value) => setField("format", value)}
          value={format}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a Format" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Format</SelectLabel>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="a4">A4</SelectItem>
              <SelectItem value="a3">A3</SelectItem>
              <SelectItem value="portrait">Portait</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label>Level {level}</Label>
        <Select
          name="level"
          onValueChange={(value) => setField("level", value)}
          value={level}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default NewsItemsFilters;
