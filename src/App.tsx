import { Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import BookGrid from "./components/BookGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import SortSelector from "./components/SortSelector";
import BookHeading from "./components/BookHeading";

export interface BookQuery {
  genre: Genre | null;
  sortOrder: string;
  searchText: string;
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
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setBookQuery({ ...bookQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5} paddingY={5}>
            <GenreList
              selectedGenre={bookQuery.genre}
              onSelectGenre={(genre) => setBookQuery({ ...bookQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem paddingY={5} area="main">
          <BookHeading bookQuery={bookQuery} />
          <Flex paddingLeft={10}>
            <SortSelector
              sortOrder={bookQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setBookQuery({ ...bookQuery, sortOrder })
              }
            />
          </Flex>
          <BookGrid bookQuery={bookQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
