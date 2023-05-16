import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const BookCardSkelleton = () => {
  return (
    <Card width={320} borderRadius={10}>
      <Skeleton height={500} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default BookCardSkelleton;
