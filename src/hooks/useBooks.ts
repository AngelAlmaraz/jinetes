import { useQuery } from "@tanstack/react-query";
import { BookQuery } from "../App";
import APIClient,{ FetchResponse } from "../services/api-client"; 

const apiClient = new APIClient<Book>('/books2')

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
    staleTime: 5 * 60 * 1000, // 5m
    queryFn: () => apiClient.getAll({
      params: {
        genre:bookQuery.genre?.name,
        search:bookQuery.searchText,
        sortBy:bookQuery.sortOrder
      },
    })
  })

export default useBooks;