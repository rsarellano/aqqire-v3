import { create } from "zustand";

type News = {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  publishedAt: string;
  category: string;
  format: string;
  level: string;
};

type NewsStore = {
  initialNews: News[];
  news: News[];
  category?: string;
  format?: string;
  level?: string;
  setField: (field: keyof NewsStore, value: string) => void;
  setNewsItems: (newsItems: News[]) => void;
  reset: () => void;
  filter: () => void;
};

export const useNewsStore = create<NewsStore>((set, get, store) => ({
  initialNews: [],
  news: [],
  category: "all",
  format: "all",
  level: "all",
  setNewsItems: (newsItems) =>
    set(() => ({
      initialNews: newsItems,
      news: newsItems,
    })),
  setField: (field, value) =>
    set((state) => ({
      ...state,
      [field]: value,
    })),
  filter: () => {
    const { category, format, level } = get();
    set((state) => ({
      news: state.initialNews.filter((item) => {
        return (
          (category === "all" || item.category === category) &&
          (format === "all" || item.format === format) &&
          (level === "all" || String(item.level) === String(level))
        );
      }),
    }));
  },
  reset: () => {
    set(store.getInitialState());
  },
}));
