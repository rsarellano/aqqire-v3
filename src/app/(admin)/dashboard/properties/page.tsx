import React from "react";
import { useProperty } from "@/store/adminProperty";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Page = () => {
  const properties = [
    {
      propertyName: "Sm Mall of Asia",
      type: "Mall",
      price: "$250.00",
      broker: "Neil Infante",
    },
    {
      propertyName: "Ayala Center Cebu",
      type: "Mall",
      price: "$310.00",
      broker: "Maria Santos",
    },
    {
      propertyName: "Rockwell Tower",
      type: "Condominium",
      price: "$520.00",
      broker: "James Tan",
    },
    {
      propertyName: "Greenbelt Residences",
      type: "Residential",
      price: "$450.00",
      broker: "Sophia Reyes",
    },
    {
      propertyName: "Eastwood City",
      type: "Mixed-use",
      price: "$600.00",
      broker: "Carlos Dela Cruz",
    },
    {
      propertyName: "BGC Corporate Center",
      type: "Office",
      price: "$700.00",
      broker: "Angela Lim",
    },
    {
      propertyName: "Nuvali Estates",
      type: "Residential",
      price: "$380.00",
      broker: "Patrick Ong",
    },
    {
      propertyName: "Vista Mall Taguig",
      type: "Mall",
      price: "$295.00",
      broker: "Rachel Mendoza",
    },
    {
      propertyName: "Circuit Makati",
      type: "Mixed-use",
      price: "$640.00",
      broker: "Victor Chua",
    },
    {
      propertyName: "Ortigas Tech Hub",
      type: "Office",
      price: "$560.00",
      broker: "Louise Bautista",
    },
    {
      propertyName: "Alabang Hills Village",
      type: "Residential",
      price: "$410.00",
      broker: "Emily Ramos",
    },
    {
      propertyName: "Trinoma",
      type: "Mall",
      price: "$330.00",
      broker: "Henry Go",
    },
    {
      propertyName: "Araneta Coliseum Complex",
      type: "Commercial",
      price: "$720.00",
      broker: "Dennis Yu",
    },
    {
      propertyName: "Okada Manila",
      type: "Hotel & Casino",
      price: "$1,250.00",
      broker: "Isabella Cruz",
    },
    {
      propertyName: "SM Seaside City Cebu",
      type: "Mall",
      price: "$345.00",
      broker: "Jonathan Uy",
    },
  ];
  return (
    <section className="p-4 ">
      <div className="container mx-auto">
        <div className="mx-auto bg-primary  flex gap-8 p-4 items-center rounded-t-sm border-b-2 border-accent">
          <h1 className="text-2xl font-bold text-white">
            AQQIRE Properties Admin Dashboard
          </h1>
          <Link href="/dashboard/properties/create" className="ml-auto">
            <Button className="cursor-pointer" variant={"secondary"}>
              Create New Property
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-4 p-6 bg-gray-900">
          <Label className="text-white">Filter Properties</Label>
          <Input
            className=" border-transparent text-white"
            placeholder="Filter Properties"
          />
        </div>
        <Table className="bg-primary text-white">
          <TableHeader>
            <TableRow>
              <TableHead>Property Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Broker</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {properties.map((property, key) => (
              <TableRow key={key}>
                <TableCell className="font-semibold text-lg">
                  {property.propertyName}
                </TableCell>
                <TableCell>{property.type}</TableCell>
                <TableCell>{property.price}</TableCell>
                <TableCell>{property.broker}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination className="mt-2  rounded-sm p-4">
          <PaginationContent>
            <PaginationItem className="bg-primary text-white rounded-sm">
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem className="bg-primary text-white rounded-sm">
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem className="bg-primary text-white rounded-sm">
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem className="bg-primary text-white rounded-sm">
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem className="bg-primary text-white rounded-sm">
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem className="bg-primary text-white rounded-sm">
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>

            <PaginationItem className="bg-primary text-white rounded-sm">
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};

export default Page;
