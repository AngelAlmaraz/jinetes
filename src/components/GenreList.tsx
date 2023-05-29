import { Button, Heading, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import useBookQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenre = useBookQueryStore((s) => s.bookQuery.genre);
  const setSelectedGenre = useBookQueryStore((s) => s.setGenre);

  if (error) return <></>;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading paddingBottom={5} fontSize="2xl">
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={Math.random()} paddingY={5}>
            <Button
              onClick={() => {
                selectedGenre != genre ? setSelectedGenre(genre) : null;
              }}
              whiteSpace="normal"
              textAlign="left"
              fontWeight={
                genre.name === selectedGenre?.name ? "bold" : "normal"
              }
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
