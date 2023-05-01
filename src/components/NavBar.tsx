import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/amongus.webp";

const NavBar = () => {
  return (
    <>
      <HStack>
        <Image src={logo} boxSize="60px"></Image>
        <Text>hello</Text>
      </HStack>
    </>
  );
};

export default NavBar;
