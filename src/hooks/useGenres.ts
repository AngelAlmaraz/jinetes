import useData from "./useData";

export interface Genre {
    name:string
}

const useGenres = () => useData<Genre>('/genres');

export default useGenres;