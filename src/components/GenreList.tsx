import {
  Button,
  Heading,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return <></>;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading paddingBottom={5} fontSize="2xl">
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={Math.random()} paddingY={5}>
            <Button
              onClick={() => {
                selectedGenre != genre ? onSelectGenre(genre) : null;
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
