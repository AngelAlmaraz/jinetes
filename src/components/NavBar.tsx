import { HStack, Image } from "@chakra-ui/react";
import logoDark from "../assets/white.webp";
import logoLight from "../assets/black.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { useState } from "react";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [themeDark, setThemeDark] = useState(true);

  const toggleTheme = () => {
    setThemeDark(!themeDark);
  };

  return (
    <>
      <HStack padding="10px">
        <Link to={"/"}>
          <Image
            src={themeDark === true ? logoDark : logoLight}
            boxSize="60px"
          ></Image>
        </Link>
        <SearchInput />
        <ColorModeSwitch onToggleSwitch={toggleTheme} />
      </HStack>
    </>
  );
};

export default NavBar;
