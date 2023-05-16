import useData from "./useData";

export interface Book {
    id: number;
    name: string;
    url: string
    author:string
    price: number
  }
  

const useBooks = () => useData<Book>('/books');

export default useBooks;