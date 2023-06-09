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
import { AiOutlineCreditCard } from "react-icons/ai";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { Book } from "../hooks/useBooks";
import { getUser } from "../services/auth";
import axios from "axios";
import { useEffect, useState } from "react";

const Cart = () => {
  const user = getUser();
  const [kart, setKart] = useState<Book[]>([]);

  useEffect(() => {
    const fetchCartData = async (email: string) => {
      try {
        const response = await axios.get(
          "https://4nxi7wtmf2.execute-api.us-east-1.amazonaws.com/dev/getcart",
          {
            params: {
              email: email,
            },
          }
        );

        setKart(response.data);
      } catch (error) {
        console.error(error);
        // Manejar cualquier error que ocurra durante la solicitud
      }
    };

    if (user) {
      fetchCartData(user.email);
    }
  }, [user]);

  if (!user) return <>Error</>;

  return (
    <>
      <Box marginX={20}>
        {kart.map((book: Book) => (
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
