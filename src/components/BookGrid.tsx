import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import dog1 from "../assets/chiwi.webp";
import dog12 from "../assets/chiwi2.webp";
import dog5 from "../assets/loki.webp";
import dog8 from "../assets/lulu.webp";
import dog9 from "../assets/luna.webp";
import dog2 from "../assets/manena.webp";
import dog7 from "../assets/paka.webp";
import dog4 from "../assets/peka.webp";
import dog3 from "../assets/rocky.webp";
import dog10 from "../assets/tiki.webp";
import dog6 from "../assets/topo.webp";
import useBooks from "../hooks/useBooks";
import BookCard from "./BookCard";
import BookCardContainer from "./BookCardContainer";
import BookCardSkelleton from "./BookCardSkelleton";

const dogs = [
  { image: dog1, name: "Chiwinki" },
  { image: dog2, name: "Manena" },
  { image: dog3, name: "Rocky" },
  { image: dog4, name: "Peka" },
  { image: dog5, name: "Loki" },
  { image: dog6, name: "Topo" },
  { image: dog7, name: "Paka" },
  { image: dog8, name: "Lulu" },
  { image: dog9, name: "Luna" },
  { image: dog10, name: "Tiki" },
  { image: dog12, name: "Chiwinki" },
];

function getRandomDog(): { image: string; name: string } {
  const randomIndex = Math.floor(Math.random() * dogs.length);
  return dogs[randomIndex];
}

const BookGrid = () => {
  const { data, error, isLoading } = useBooks();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const randomDog = getRandomDog();
  console.log("Books->", data?.results);

  return (
    <>
      {!isLoading && data?.results.length === 0 && (
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
      {error && <Text>{error.message}</Text>}
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
        {data?.results.map((book) => (
          <BookCardContainer key={book.id}>
            <BookCard book={book}></BookCard>
          </BookCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default BookGrid;
