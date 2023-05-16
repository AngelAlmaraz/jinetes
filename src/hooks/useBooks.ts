import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Book {
    id: number;
    name: string;
    url: string
    author:string
    price: number
  }
  
  interface FetchBooksResponse {
    count: number;
    results: Book[];
  }
  

const useBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading ] = useState(false);
  
    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
      apiClient
        .get<FetchBooksResponse>("/books")
        .then((res) => {
          setBooks(res.data.results);
          setLoading(false)
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false)
        });

      return () => controller.abort();
      
    }, []);

    // console.log(books)
    console.log(books)

    return {books, error, isLoading}
  
};

export default useBooks;