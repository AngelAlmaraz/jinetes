import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import dog1 from "../assets/chiwi.webp";
import dog12 from "../assets/chiwi2.webp";
import dog5 from "../assets/loki.webp";
import dog8 from "../assets/lulu.webp";
import dog9 from "../assets/luna.webp";
import dog2 from "../assets/manena.webp";
import dog7 from "../assets/paka.webp";
import dog4 from "../assets/peka.webp";
import dog3 from "../assets/rocky.webp";
import dog10 from "../assets/tiki.webp";
import dog6 from "../assets/topo.webp";

const dogs = [
  { image: dog1, name: "Chiwinki" },
  { image: dog2, name: "Manena" },
  { image: dog3, name: "Rocky" },
  { image: dog4, name: "Peka" },
  { image: dog5, name: "Loki" },
  { image: dog6, name: "Topo" },
  { image: dog7, name: "Paka" },
  { image: dog8, name: "Lulu" },
  { image: dog9, name: "Luna" },
  { image: dog10, name: "Tiki" },
  { image: dog12, name: "Chiwinki" },
];

function getRandomDog(): { image: string; name: string } {
  const randomIndex = Math.floor(Math.random() * dogs.length);
  return dogs[randomIndex];
}

const randomDog = getRandomDog();

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box paddingX={10}></Box>

      <Box width="100%" marginX="42%">
        <Heading>Oops!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error ocurred."}
        </Text>
        <br></br>
        <Text fontSize="large">Meet the Jinetes dogs.</Text>
      </Box>
      <Box width="100%" marginX="35%">
        <Image
          width={400}
          paddingX={-5}
          paddingY={5}
          src={randomDog.image}
          alt={randomDog.name}
        ></Image>
      </Box>
      <Box width="100%" marginX="42%">
        <Heading>{randomDog.name}!</Heading>
      </Box>
    </>
  );
};

export default ErrorPage;
