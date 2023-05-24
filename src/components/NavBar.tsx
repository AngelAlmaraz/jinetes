import { HStack, Image } from "@chakra-ui/react";
import logoDark from "../assets/white.webp";
import logoLight from "../assets/black.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { useState } from "react";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const [themeDark, setThemeDark] = useState(true);

  const toggleTheme = () => {
    setThemeDark(!themeDark);
  };

  return (
    <>
      <HStack padding="10px">
        <Image
          src={themeDark === true ? logoDark : logoLight}
          boxSize="60px"
        ></Image>
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch onToggleSwitch={toggleTheme} />
      </HStack>
    </>
  );
};

export default NavBar;
