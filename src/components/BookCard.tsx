import React from "react";
import { Book } from "../hooks/useBooks";
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  return (
    <>
      <Card>
        <Image height={500} src={book.url} />
        <CardBody height={88} flex={1}>
          <Heading fontSize="xl">{book.name}</Heading>
        </CardBody>
        <CardFooter paddingTop={0}>
          <HStack flex="1" justifyContent="space-between">
            <Text color="gray.400">{book.author}</Text>
            <Badge fontSize={14} paddingX={2} borderRadius={4}>
              ${book.price}
            </Badge>
          </HStack>
        </CardFooter>
      </Card>
    </>
  );
};

export default BookCard;
