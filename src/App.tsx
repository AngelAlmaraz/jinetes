import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import BookGrid from "./components/BookGrid";
import BookHeading from "./components/BookHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import SortSelector from "./components/SortSelector";

function App() {
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
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5} paddingY={5}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem paddingY={5} area="main">
          <BookHeading />
          <Flex paddingLeft={10}>
            <SortSelector />
          </Flex>
          <BookGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
