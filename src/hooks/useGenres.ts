import { useQuery } from "@tanstack/react-query";
import APIClient from '../services/api-client';

const apiClient = new APIClient<Genre>('/genres');

export interface Genre {
    name:string
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24 hrs
})

export default useGenres;