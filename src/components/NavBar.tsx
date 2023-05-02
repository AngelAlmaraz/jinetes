import { HStack, Image, Text } from "@chakra-ui/react";
import logoDark from "../assets/white.webp";
import logoLight from "../assets/black.webp";
import colorMode from "./ColorModeSwitch";
import ColorModeSwitch from "./ColorModeSwitch";
import { useState } from "react";

const NavBar = () => {
  const [themeDark, setThemeDark] = useState(true);

  const toggleTheme = () => {
    setThemeDark(!themeDark);
  };

  return (
    <>
      <HStack>
        <Image
          src={themeDark === true ? logoDark : logoLight}
          boxSize="60px"
        ></Image>
        <ColorModeSwitch onToggleSwitch={toggleTheme} />
      </HStack>
    </>
  );
};

export default NavBar;
