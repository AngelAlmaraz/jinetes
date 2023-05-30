import { useParams } from "react-router-dom";
import useBook from "../hooks/useBook";
import {
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Show,
  Spinner,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { getUser } from "../services/auth";

const fetchData = (id: string, email: string) => {
  try {
    const response = axios.get(
      "https://4nxi7wtmf2.execute-api.us-east-1.amazonaws.com/dev/cart",
      {
        params: {
          id: id,
          email: email,
        },
      }
    );

    console.log(response);
    // Handle the response data as needed
  } catch (error) {
    console.error(error);
    // Handle any error that occurs during the request
  }
};

const BookDetailPage = () => {
  const { id } = useParams();
  const { data: book, isLoading, error } = useBook(id!);
  console.log("book->", typeof book?.id);
  const user = getUser();

  if (isLoading) return <Spinner />;

  if (error || !book) throw error;

  return (
    <>
      <Grid
        padding={5}
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`, //1024 px
        }}
        templateColumns={{
          base: "1fr",
          lg: "400px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside" padding={5}>
            <Image
              src={book.url}
              alt={book.name}
              style={{
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </GridItem>
        </Show>
        <GridItem area="main" paddingTop={5} paddingX={5}>
          <Heading>{book.name}</Heading>
          <Text paddingTop={10}>{book.description}</Text>
          <Button onClick={() => fetchData(book.id, user.email)} marginTop={10}>
            Add to cart
          </Button>
        </GridItem>
      </Grid>
    </>
  );
};

export default BookDetailPage;
