import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import useBookQueryStore from "../store";

const apiClient = new APIClient<Book>('/books2')

export interface Book {
    id: string;
    name: string;
    url: string
    author:string
    price: number
    description:string
  }
  

const useBooks = () => {
  const bookQuery =useBookQueryStore(s => s.bookQuery);
  return useQuery<FetchResponse<Book>, Error>({
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
}


export default useBooks;