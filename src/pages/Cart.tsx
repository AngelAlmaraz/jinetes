import { Box, Text } from "@chakra-ui/react";
import { getUser } from "../services/auth";
import { Key } from "react";
import { Book } from "../hooks/useBooks";

const Cart = () => {
  const user = getUser();
  console.log("kart->", user.kart);

  if (!user) return <>Error</>;
  return (
    <>
      <Box padding={10}>
        {user.kart.map((book: Book) => (
          <Text key={book.id}>{book.name}</Text>
        ))}
      </Box>
    </>
  );
};

export default Cart;
