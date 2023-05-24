import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import useBooks from "../hooks/useBooks";
import BookCard from "./BookCard";
import BookCardSkelleton from "./BookCardSkelleton";
import BookCardContainer from "./BookCardContainer";
import { BookQuery } from "../App";
import dog1 from "../assets/chiwi.webp";
import dog2 from "../assets/manena.webp";

interface Props {
  bookQuery: BookQuery;
}

const dogs = [
  { image: dog1, name: "Chiwinki" },
  { image: dog2, name: "Manena" },
];

function getRandomDog(): { image: string; name: string } {
  const randomIndex = Math.floor(Math.random() * dogs.length);
  return dogs[randomIndex];
}

const BookGrid = ({ bookQuery }: Props) => {
  const { data, error, isLoading } = useBooks(bookQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const randomDog = getRandomDog();

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
              src={randomDog.image}
              alt={randomDog.name}
            ></Image>
          </Box>
          <Box width="100%" marginX="42%">
            <Heading>{randomDog.name}!</Heading>
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
