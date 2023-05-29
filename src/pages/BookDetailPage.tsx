import { useParams } from "react-router-dom";
import useBook from "../hooks/useBook";
import { Spinner, Text } from "@chakra-ui/react";

const BookDetailPage = () => {
  const { id } = useParams();
  const { data: book, isLoading, error } = useBook(id!);
  console.log("book->", book);

  if (isLoading) return <Spinner />;

  if (error || !book) throw error;

  return (
    <>
      <Text>{book.description}</Text>
    </>
  );
};

export default BookDetailPage;
