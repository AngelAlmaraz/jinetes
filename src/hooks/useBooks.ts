import useData from "./useData";
import { Genre } from "./useGenres";

export interface Book {
    id: number;
    name: string;
    url: string
    author:string
    price: number
  }
  

const useBooks = (selectedGenre: Genre | null) => useData<Book>('/books2', {params: {genre:selectedGenre?.name}}, [selectedGenre?.name]);

export default useBooks;