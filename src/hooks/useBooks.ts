import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Book {
    id: number;
    name: string;
    url: string
  }
  
  interface FetchBooksResponse {
    count: number;
    results: Book[];
  }
  

const useBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
        const controller = new AbortController();
      apiClient
        .get<FetchBooksResponse>("/books")
        .then((res) => setBooks(res.data.results) )
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
        });

      return () => controller.abort();
      
    }, []);

    // console.log(books)

    return {books, error}
  
};

export default useBooks;