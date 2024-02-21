import { create } from "zustand";

const getLocalStorage = (key: string) => {
  if (window) JSON.parse(window?.localStorage.getItem(key) as string);
};

const setLocalStorage = (key: string, value: Array<string>) => {
  if (window) window?.localStorage.setItem(key, JSON.stringify(value));
};

export default create((set) => ({
  previousSearches: getLocalStorage("searches") || [],
  addToSearch: (value: string) => {
    set((state: { previousSearches: Array<string> }) => {
      const updatedSearches = state.previousSearches;
      updatedSearches.push(value);
      if (state.previousSearches.length > 6) state.previousSearches.shift();
      setLocalStorage("searches", updatedSearches);
      return { previousSearches: updatedSearches };
    });
  },
}));
