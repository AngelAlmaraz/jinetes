import { create } from "zustand";
import { Genre } from "./hooks/useGenres";

interface BookQuery {
    genre?: Genre | null;
    sortOrder?: string;
    searchText?: string;
  }
  

interface BookQueryStore {
    bookQuery: BookQuery;
    setSearchText: (searchText: string) => void;
    setGenre: (genre: Genre) => void;
    setSortOrder: (sortOrder: string) => void;
}

const useBookQueryStore = create<BookQueryStore>((set) => ({
    bookQuery: {},
    setSearchText: (searchText: string) => set(() => ({ bookQuery: {searchText}})),
    setGenre: (genre: Genre) => set(store => ({ bookQuery: {...store.bookQuery, genre}})),
    setSortOrder: (sortOrder: string) => set(store => ({ bookQuery: {...store.bookQuery, sortOrder}})),
}))

export default useBookQueryStore