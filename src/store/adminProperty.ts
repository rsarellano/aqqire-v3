import { Property } from "@/types/property";
import { create } from "zustand";

type propertyStore = Omit<Property, "id"> & {
  setField: (field: keyof propertyStore, value: string) => void;
  reset: () => void;
};

export const useProperty = create<propertyStore>((set, get, store) => ({
  name: "",
  price: "",
  city: "",
  state: "",
  address: "",
  type: "",
  reset: () => {
    set(store.getInitialState());
  },
  setField: (field, value) =>
    set((state) => ({
      ...state,
      [field]: value,
    })),
}));
