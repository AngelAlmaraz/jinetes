import { SimpleGrid, Text } from "@chakra-ui/react";
import useBooks from "../hooks/useBooks";
import BookCard from "./BookCard";

const BookGrid = () => {
  const { books, error } = useBooks();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 5, xl: 6 }}
        padding={10}
        spacing={10}
      >
        {books.map((book) => (
          <BookCard key={book.id} book={book}></BookCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default BookGrid;
