import { Heading } from "@chakra-ui/react";
import useBookQueryStore from "../store";

const BookHeading = () => {
  const genre = useBookQueryStore((s) => s.bookQuery.genre);

  const heading = ` ${genre?.name || ""} Books`;

  return (
    <Heading as="h1" marginX={10} marginY={5}>
      {heading}
    </Heading>
  );
};

export default BookHeading;
