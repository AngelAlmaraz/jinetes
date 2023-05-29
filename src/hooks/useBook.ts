import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Book } from "./useBooks";


const apiClient = new APIClient<Book>('/books2')

const useBook = (id: string) => useQuery({
    queryKey: ['book', id],
    staleTime: 24 * 60 * 60 * 1000, //24 hrs
    queryFn: () => apiClient.get(id)
})

export default useBook