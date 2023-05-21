import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import BookGrid from "./components/BookGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

export interface BookQuery {
  genre: Genre | null;
}

function App() {
  const [bookQuery, setBookQuery] = useState<BookQuery>({} as BookQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //1024 px
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav" backgroundColor="red">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={bookQuery.genre}
              onSelectGenre={(genre) => setBookQuery({ ...bookQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <BookGrid bookQuery={bookQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
