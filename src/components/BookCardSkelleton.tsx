import {
  Card,
  CardBody,
  CardFooter,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const BookCardSkelleton = () => {
  return (
    <Card>
      <Skeleton height={500} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default BookCardSkelleton;
