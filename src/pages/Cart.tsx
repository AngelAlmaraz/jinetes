import {
  Box,
  Button,
  Card,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { getUser } from "../services/auth";
import { Key } from "react";
import { Book } from "../hooks/useBooks";

const Cart = () => {
  const user = getUser();
  console.log("kart->", user.kart);

  if (!user) return <>Error</>;
  return (
    <>
      <Box marginX={20}>
        {user.kart.map((book: Book) => (
          <>
            <Box key={book.id} margin={5}>
              <Card padding={7}>
                <HStack>
                  <Image
                    borderRadius={10}
                    marginX={5}
                    src={book.url}
                    width="10%"
                  />
                  <VStack>
                    <Heading fontSize="2xl">{book.name}</Heading>
                    <Text>{book.description}</Text>
                  </VStack>
                </HStack>
              </Card>
            </Box>
          </>
        ))}
        <HStack justify="flex-end" paddingX={10}>
          <Button>Proceed to payment</Button>
        </HStack>
      </Box>
    </>
  );
};

export default Cart;
