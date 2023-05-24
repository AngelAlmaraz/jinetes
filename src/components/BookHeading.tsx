import { Heading } from "@chakra-ui/react";
import { BookQuery } from "../App";

interface Props {
  bookQuery: BookQuery;
}

const BookHeading = ({ bookQuery }: Props) => {
  const heading = ` ${bookQuery.genre?.name || ""} Books`;

  return (
    <Heading as="h1" marginX={10} marginY={5}>
      {heading}
    </Heading>
  );
};

export default BookHeading;
