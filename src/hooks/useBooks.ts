import { useQuery } from "@tanstack/react-query";
import { BookQuery } from "../App";
import apiClient from '../services/api-client';
import { FetchResponse } from "./useData";

export interface Book {
    id: number;
    name: string;
    url: string
    author:string
    price: number
  }
  

const useBooks = (bookQuery: BookQuery) => 
  useQuery<FetchResponse<Book>, Error>({
    queryKey: ['books', bookQuery],
    queryFn: () => apiClient.get<FetchResponse<Book>>('/books2', {
      params: {
        genre:bookQuery.genre?.name,
        search:bookQuery.searchText,
        sortBy:bookQuery.sortOrder
      },
    })
    .then(res => res.data)
  })

export default useBooks;