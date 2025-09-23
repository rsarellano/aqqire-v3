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
          {
            name: "Burj Khalifa",
            price: "400000000",
            city: "Dubai",
            state: "UAE",
            id: "6",
          },
          {
            name: "Petronas Towers",
            price: "180000000",
            city: "Kuala Lumpur",
            state: "MY",
            id: "7",
          },
          {
            name: "Sydney Opera House",
            price: "220000000",
            city: "Sydney",
            state: "AU",
            id: "8",
          },
          {
            name: "Marina Bay Sands",
            price: "350000000",
            city: "Singapore",
            state: "SG",
            id: "9",
          },
        ]);
      }, 2000);
    });

    return properties;
  } catch (e) {
    console.error(e);
    return [];
  }
};
