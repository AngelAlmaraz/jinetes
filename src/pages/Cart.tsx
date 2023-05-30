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
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { AiOutlineCreditCard } from "react-icons/ai";
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
                  <VStack paddingX={5}>
                    <Button>
                      <BiUpArrow size={20} />
                    </Button>
                    <Text>{book.quantity}</Text>
                    <Button>
                      <BiDownArrow size={20} />
                    </Button>
                  </VStack>
                  <VStack>
                    <Heading justifyContent="flex-start" fontSize="2xl">
                      {book.name}
                    </Heading>
                    <Text>{book.description}</Text>
                  </VStack>
                </HStack>
              </Card>
            </Box>
          </>
        ))}
        <HStack justify="flex-end" paddingX={10}>
          <Button>
            <HStack>
              <Text>Proceed to payment</Text>
              <AiOutlineCreditCard size={20} />
            </HStack>
          </Button>
        </HStack>
      </Box>
    </>
  );
};

export default Cart;
