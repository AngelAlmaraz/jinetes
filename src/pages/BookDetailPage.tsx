import { useNavigate, useParams } from "react-router-dom";
import useBook from "../hooks/useBook";
import {
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Show,
  Spinner,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { getUser } from "../services/auth";
import { useState } from "react";
import { Book } from "../hooks/useBooks";
import { BsCartCheck } from "react-icons/bs";

const fetchData = async (id: string, email: string) => {
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
  const [hasClicked, setHasClicked] = useState(false);
  const navigate = useNavigate();

  const user = getUser();

  const handleClick = (book: Book) => {
    if (!user) navigate("/signin");
    if (!hasClicked) {
      setHasClicked(true);
      fetchData(book.id, user.email);
    }
  };

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
          <Text fontSize="2xl" paddingTop={2}>
            By: {book.author}
          </Text>
          <Heading fontSize="2xl" paddingY={5}>
            ${book.price - 1}.99
          </Heading>
          <Text paddingTop={5}>{book.description}</Text>
          {!hasClicked && (
            <Button onClick={() => handleClick(book)} marginTop={10}>
              Add to cart
            </Button>
          )}
          {hasClicked && (
            <Button marginTop={10}>
              <HStack>
                <Text>Added to kart!</Text>
                <BsCartCheck size={20} />
              </HStack>
            </Button>
          )}
        </GridItem>
      </Grid>
    </>
  );
};

export default BookDetailPage;
