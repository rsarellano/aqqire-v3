import { Property } from "@/types/property";

export const searchProperties = async (query?: string): Promise<Property[]> => {
  try {
    const properties: Property[] = await new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            name: "Empire State Building",
            price: "250000000",
            city: "New York",
            state: "NY",
            id: "1",
          },
          {
            name: "Willis Tower",
            price: "150000000",
            city: "Chicago",
            state: "IL",
            id: "2",
          },
          {
            name: "Transamerica Pyramid",
            price: "120000000",
            city: "San Francisco",
            state: "CA",
            id: "3",
          },
          {
            name: "The Shard",
            price: "200000000",
            city: "London",
            state: "UK",
            id: "4",
          },
          {
            name: "One World Trade Center",
            price: "300000000",
            city: "New York",
            state: "NY",
            id: "5",
          },
        ]);
      }, 800);
    });

    return properties;
  } catch (error) {
    return [];
  }
};
