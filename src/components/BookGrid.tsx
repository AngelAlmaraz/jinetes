import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useBooks from "../hooks/useBooks";
import BookCard from "./BookCard";
import BookCardSkelleton from "./BookCardSkelleton";
import BookCardContainer from "./BookCardContainer";

const BookGrid = () => {
  const { data, error, isLoading } = useBooks();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <BookCardContainer>
              <BookCardSkelleton key={skeleton} />
            </BookCardContainer>
          ))}
        {data.map((book) => (
          <BookCardContainer>
            <BookCard key={book.id} book={book}></BookCard>
          </BookCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default BookGrid;
