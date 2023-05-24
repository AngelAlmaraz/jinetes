import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import useBooks from "../hooks/useBooks";
import BookCard from "./BookCard";
import BookCardSkelleton from "./BookCardSkelleton";
import BookCardContainer from "./BookCardContainer";
import { BookQuery } from "../App";
import dog from "../assets/chiwi.webp";

interface Props {
  bookQuery: BookQuery;
}

const BookGrid = ({ bookQuery }: Props) => {
  const { data, error, isLoading } = useBooks(bookQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {!isLoading && data.length === 0 && (
        <>
          <Box width="100%" marginX="37%">
            <Heading>No results found.</Heading>
            <Text marginX="5%">Meet the Jinetes Dogs</Text>
          </Box>
          <Box width="100%" marginX="35%">
            <Image
              width={400}
              paddingX={-5}
              paddingY={5}
              src={dog}
              alt="chiwinki"
            ></Image>
          </Box>
          <Box width="100%" marginX="42%">
            <Heading>Chiwinki!</Heading>
          </Box>
        </>
      )}
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <BookCardContainer key={skeleton}>
              <BookCardSkelleton />
            </BookCardContainer>
          ))}
        {data.map((book) => (
          <BookCardContainer key={book.id}>
            <BookCard book={book}></BookCard>
          </BookCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default BookGrid;
