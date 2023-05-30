import { useQuery } from "@tanstack/react-query";
import apiClient2 from "../services/api-client2";


const useCart = (book_id:string,user_email:string) => useQuery({
    queryKey: ['cart'],
    queryFn: () => apiClient2
    .get('/cart', 
    { params: 
        { id: book_id
        , email: user_email 
    } })
      .then(res => res.data)
  });

export default useCart
  