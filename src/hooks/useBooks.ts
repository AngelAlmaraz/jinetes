import { BookQuery } from "../App";
import useData from "./useData";

export interface Book {
    id: number;
    name: string;
    url: string
    author:string
    price: number
  }
  

const useBooks = (bookQuery: BookQuery) => 
  useData<Book>(
    '/books2',
    {
      params: {
        genre:bookQuery.genre?.name
      }
    },
     [bookQuery]);

export default useBooks;