import {
  Card,
  CardBody,
  CardFooter,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const BookCardSkelleton = () => {
  return (
    <Card width={300} borderRadius={10}>
      <Skeleton height={500} />
      <CardBody>
        <SkeletonText />
      </CardBody>
      <CardFooter>
        <SkeletonText />
      </CardFooter>
    </Card>
  );
};

export default BookCardSkelleton;
