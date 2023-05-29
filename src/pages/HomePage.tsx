import { Grid, Show, GridItem, Flex } from "@chakra-ui/react";
import BookGrid from "../components/BookGrid";
import BookHeading from "../components/BookHeading";
import GenreList from "../components/GenreList";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`, //1024 px
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
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
};

export default HomePage;
