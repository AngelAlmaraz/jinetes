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
        <div
          style={{
            width: "100%",
            paddingBottom: "156.25%",
            position: "relative",
          }}
        >
          <Image
            src={book.url}
            alt={book.name}
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <CardBody>
          <Heading fontSize="xl">{book.name.substring(0, 35)}</Heading>
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
