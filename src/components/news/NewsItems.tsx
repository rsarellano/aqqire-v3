import Image from "next/image";
import { Card } from "../ui/card";
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

const NewsItems = () => {
  return (
    <section className="p-6">
      <div className="container grid grid-cols-3  mx-auto">
        {/* Filters */}
        <div className="space-y-4 flex flex-col  col-span-1 pr-12">
          {/* Filters */}
          <div className="flex flex-col gap-2 ">
            <Label>Category</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Category</SelectLabel>
                  <SelectItem value="trends">Market Trends</SelectItem>
                  <SelectItem value="projects">Projects</SelectItem>
                  <SelectItem value="etc">Etc</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Format</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Category</SelectLabel>
                  <SelectItem value="trends">Market Trends</SelectItem>
                  <SelectItem value="projects">Projects</SelectItem>
                  <SelectItem value="etc">Etc</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Level</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Category</SelectLabel>
                  <SelectItem value="trends">Market Trends</SelectItem>
                  <SelectItem value="projects">Projects</SelectItem>
                  <SelectItem value="etc">Etc</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 col-span-2 gap-4 min-h-[79vh]">
          <Card className="col-span-1 shadow-md relative border-0 overflow-hidden">
            <Image
              src={"/background/skyline.jpg"}
              fill
              className="size-full"
              alt="article"
            />
          </Card>{" "}
          <Card className="col-span-1 shadow-md relative border-0 overflow-hidden">
            <Image
              src={"/background/skyline.jpg"}
              fill
              className="size-full"
              alt="article"
            />
          </Card>{" "}
          <Card className="col-span-1 shadow-md relative border-0 overflow-hidden">
            <Image
              src={"/background/skyline.jpg"}
              fill
              className="size-full"
              alt="article"
            />
          </Card>{" "}
          <Card className="col-span-1 shadow-md relative border-0 overflow-hidden">
            <Image
              src={"/background/skyline.jpg"}
              fill
              className="size-full"
              alt="article"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsItems;
